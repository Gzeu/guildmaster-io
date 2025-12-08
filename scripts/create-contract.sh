#!/bin/bash
set -e

echo "$$ Creating DeFi Smart Contract Template..."

CONTRACT_NAME="${1:-defi-pool}"
CONTRACT_DIR="contracts/${CONTRACT_NAME}"

echo "Creating contract directory: $CONTRACT_DIR"
mkdir -p "$CONTRACT_DIR"
cd "$CONTRACT_DIR"

# Create Cargo.toml for Rust contract
cat > Cargo.toml << 'EOF'
[package]
name = "defi-contract"
version = "0.1.0"
edition = "2021"

[dependencies]
multiversx-sc = "0.43"
multiversx-sc-derive = "0.43"

[lib]
path = "src/lib.rs"
crate-type = ["cdylib"]

[profile.release]
opt-level = "z"
lto = true
EOF

# Create src directory
mkdir -p src

# Create basic contract template
cat > src/lib.rs << 'EOF'
multiversx_sc::imports!();

#[multiversx_sc::contract]
pub trait DefiPool {
    #[init]
    fn init(&self) {
        // Initialize contract
    }

    #[payable("EGLD")]
    #[endpoint]
    fn deposit(&self) {
        let payment = self.call_value().egld_value();
        require!(payment > 0, "Payment must be greater than 0");
        // Deposit logic
    }

    #[endpoint]
    fn withdraw(&self, amount: BigUint) {
        require!(amount > 0, "Amount must be greater than 0");
        // Withdraw logic
    }

    #[view]
    fn get_balance(&self, address: ManagedAddress) -> BigUint {
        // Return user balance
        BigUint::zero()
    }
}
EOF

# Create build script
cat > build.sh << 'EOF'
#!/bin/bash
set -e

echo "Building contract..."
cargo build --target wasm32-unknown-unknown --release

echo "Optimizing WASM..."
wasm-opt -Oz -o output.wasm target/wasm32-unknown-unknown/release/defi_contract.wasm

echo "Build complete!"
EOF
chmod +x build.sh

echo "$$ Contract template created successfully!"
echo "Contract name: $CONTRACT_NAME"
echo "Location: $CONTRACT_DIR"
echo "Next steps: cd $CONTRACT_DIR && ./build.sh"
