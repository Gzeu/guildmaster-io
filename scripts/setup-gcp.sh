#!/bin/bash
set -e

echo "$$ Setting up Google Cloud Platform infrastructure..."

PROJECT_ID="${1:-guildmaster-io}"
REGION="${2:-us-central1}"
APP_NAME="guildmaster-dapp"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "gcloud CLI not found. Installing..."
        curl https://sdk.cloud.google.com | bash
            exec -l $SHELL
            fi

            # Initialize gcloud with project
            echo "Initializing gcloud with project: $PROJECT_ID"
            gcloud init --project=$PROJECT_ID

            # Enable required APIs
            echo "Enabling required APIs..."
            gcloud services enable run.googleapis.com firestore.googleapis.com

            # Create Firestore database
            echo "Setting up Firestore database..."
            gcloud firestore databases create --region=$REGION || true

            # Create Cloud Run service placeholder
            echo "Creating Cloud Run service placeholder..."
            echo "Service will be deployed from CI/CD pipeline"
            echo "To deploy: gcloud run deploy $APP_NAME --source . --region $REGION"

            # Set IAM permissions
            echo "Configuring IAM permissions..."
            gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$PROJECT_ID@appspot.gserviceaccount.com --role=roles/datastore.user || true

            echo "$$ GCP setup complete!"
            echo "Project ID: $PROJECT_ID"
            echo "Region: $REGION"
            echo "Next: Deploy with 'gcloud run deploy'"
            
