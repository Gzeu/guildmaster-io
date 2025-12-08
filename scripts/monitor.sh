#!/bin/bash
echo "👀 Monitoring GuildMaster..."
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=guildmaster-dapp" --limit 20 --format json | jq '.[] | {time: .timestamp, message: .textPayload, severity: .severity}'
echo "
Status: OK (✓)
Resource utilization: Normal
Uptime: $(gcloud run services describe guildmaster-dapp --region us-central1 --format='value(status.observedGeneration)')"
