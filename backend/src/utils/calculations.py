import sys
import json

# Bitcoin Transaction Fee Calculation
def calculate_bitcoin_fee(transaction_size, fee_rate):
    if transaction_size <= 0 or fee_rate <= 0:
        raise ValueError("Transaction size and fee rate must be positive values.")
    fee = transaction_size * fee_rate
    return fee

# Ethereum Gas Fee Calculation
def calculate_ethereum_fee(gas_used, gas_price):
    if gas_used <= 0 or gas_price <= 0:
        raise ValueError("Gas used and gas price must be positive values.")
    fee = gas_used * gas_price
    return fee

# Main function to handle command-line arguments
if __name__ == "__main__":
    try:
        # Extract arguments from command line
        bitcoin_transaction_size = int(sys.argv[1])
        bitcoin_fee_rate = int(sys.argv[2])
        ethereum_gas_used = int(sys.argv[3])
        ethereum_gas_price = int(sys.argv[4])

        result = {}

        # Calculate Bitcoin fee
        btc_fee = calculate_bitcoin_fee(bitcoin_transaction_size, bitcoin_fee_rate)
        btc_fee_in_btc = btc_fee / 1e8  # Convert to BTC
        result["bitcoin"] = {
            "btc_fee_satoshis": btc_fee,
            "btc_fee_in_btc": btc_fee_in_btc
        }

        # Calculate Ethereum fee
        eth_fee_in_gwei = calculate_ethereum_fee(ethereum_gas_used, ethereum_gas_price)
        eth_fee_in_eth = eth_fee_in_gwei / 1e9  # Convert to ETH
        result["ethereum"] = {
            "eth_fee_in_gwei": eth_fee_in_gwei,
            "eth_fee_in_eth": eth_fee_in_eth
        }

        # Output the result as JSON
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
