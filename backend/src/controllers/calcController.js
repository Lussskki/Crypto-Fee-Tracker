import { exec } from "child_process"

const calculateInvestment = (req, res) => {
    const { bitcoin_transaction_size, bitcoin_fee_rate, ethereum_gas_used, ethereum_gas_price } = req.body

    // Validate input
    if (
        bitcoin_transaction_size == null ||
        bitcoin_fee_rate == null ||
        ethereum_gas_used == null ||
        ethereum_gas_price == null
    ) {
        return res.status(400).json({ message: "All parameters are required." })
    }

    // Execute Python script with parameters
    const command = `python src/utils/calculations.py ${bitcoin_transaction_size} ${bitcoin_fee_rate} ${ethereum_gas_used} ${ethereum_gas_price}`
    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ message: "Error executing Python script", error: error.message })
        }
        if (stderr) {
            return res.status(500).json({ message: "Error in Python script", error: stderr })
        }

        try {
            const result = JSON.parse(stdout) // Parse Python output as JSON
            res.json(result)
        } catch (parseError) {
            res.status(500).json({ message: "Error parsing Python script output", error: parseError.message })
        }
    })
}

export default calculateInvestment
