#!/bin/bash
set -e

echo "$$ Installing MultiversX Toolchain..."

# Check if mxpy is installed
if ! command -v mxpy &> /dev/null; then
    echo "Installing mxpy..."
        python3 -m pip install --upgrade pip setuptools wheel
            pip install pycryptodome
                pip install mxpy
                else
                    echo "mxpy already installed. Upgrading..."
                        pip install --upgrade mxpy
                        fi

                        # Check if Rust is installed
                        if ! command -v rustc &> /dev/null; then
                            echo "Installing Rust..."
                                curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
                                    source $HOME/.cargo/env
                                    else
                                        echo "Rust already installed. Updating..."
                                            rustup update
                                            fi

                                            # Install wasm-opt for contract optimization
                                            if ! command -v wasm-opt &> /dev/null; then
                                                echo "Installing wasm-opt..."
                                                    npm install -g wasm-opt
                                                    else
                                                        echo "wasm-opt already installed"
                                                        fi

                                                        # Add Rust wasm target
                                                        rustup target add wasm32-unknown-unknown

                                                        echo "$$ Toolchain installation complete!"
                                                        echo "Versions:"
                                                        mxpy --version
                                                        rustc --version
                                                        cargo --version
