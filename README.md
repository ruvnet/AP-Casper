# Casper NFT API

This is a simple API for minting, transferring, and burning non-fungible tokens (NFTs) on the Casper blockchain using the CEP-78 Enhanced NFT Standard. It also includes endpoints for minting and transferring fungible tokens.

## Requirements

To use this API, you will need:

- A Casper account with funds for paying transaction fees
- A private key for your Casper account
- Node.js installed on your system
- The `casper-js-sdk`, `casper-cep78-js-client`, `express`, and `body-parser` Node.js packages installed

## Usage

1. Clone this repository to your local system.
2. Install the required dependencies by running the `npm install` command in the project directory.
3. Start the API server by running the `node index.js` command in the project directory.
4. Send POST requests to the appropriate endpoints to mint, transfer, or burn NFTs, or mint or transfer fungible tokens.

### API Endpoints

If an error occurs, the status field will be set to "error", and the message field will contain an error message.

POST /mint: Mint non-fungible tokens (NFTs)  
Request body: { "tokenId": "<TOKEN_ID>", "recipient": "<RECIPIENT_ADDRESS>" }

POST /transfer: Transfer non-fungible tokens (NFTs)  
Request body: { "tokenId": "<TOKEN_ID>", "recipient": "<RECIPIENT_ADDRESS>" }

# License

This project is licensed under the MIT License. See the LICENSE file for details.