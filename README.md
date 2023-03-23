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

#### Mint a Non-Fungible Token
POST /mint-nft


Request body:
```json
{
  "collectionName": "My Collection",
  "collectionSymbol": "MYC",
  "totalTokenSupply": "100",
  "ownershipMode": 1,
  "nftKind": 1,
  "jsonSchema": {
    "properties": {
      "name": {
        "name": "Name",
        "description": "The name of the NFT",
        "required": true
      },
      "description": {
        "name": "Description",
        "description": "A description of the NFT",
        "required": false
      }
    }
  },
  "nftMetadataKind": 1,
  "tokenId": "01",
  "toAddress": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "privateKey": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "fee": "1000000000",
  "sender": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "rpcUrl": "http://localhost:11101/rpc"
}

## Transfer a Non-Fungible Token

POST /transfer-nft

{
  "tokenId": "01",
  "toAddress": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "privateKey": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "rpcUrl": "http://localhost:11101/rpc"
}

## Burn a Non-Fungible Token

POST /burn-nft

request body

{
  "tokenId": "01",
  "privateKey": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "rpcUrl": "http://localhost:11101/rpc"
}

## Mint a Fungible Token
POST /mint-ft

Request body:
{
  "amount": "1000",
  "recipient": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "privateKey": "0123456789abcdef012
3456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "rpcUrl": "http://localhost:11101/rpc"
}

## Transfer a Fungible Token

POST /transfer-ft

Request body:

{
  "amount": "100",
  "recipient": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "privateKey": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "rpcUrl": "http://localhost:11101/rpc"
}

## Response Format
All responses will be in JSON format, with the following fields:

{
  "status": "success",
  "message": "The request was successful.",
  "data": { ... }
}

If an error occurs, the status field will be set to "error", and the message field will contain an error message.

# License

This project is licensed under the MIT License. See the LICENSE file for details.