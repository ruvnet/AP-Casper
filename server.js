// Import required libraries
const express = require('express');
const axios = require('axios');

// Initialize Express app
const app = express();
app.use(express.json());

// Define constants
const API_ENDPOINT = 'https://casper.blockchain/api/';
const TOKEN = 'INSERT_AUTH_TOKEN_HERE';

// Set up axios instance with default headers for authorization
const apiClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

// Function to mint non-fungible tokens (NFTs)
async function mintNonFungibleTokens(tokenId, recipient) {
  try {
    const mintTx = { type: 'MINT', tokenId, recipient };
    const response = await apiClient.post('mint', mintTx);

    if (response.status === 200) {
      console.log('Minting transaction successful.');
      return true;
    } else {
      console.log('Minting transaction failed.');
      return false;
    }
  } catch (error) {
    console.log('Minting transaction failed:', error.message);
    return false;
  }
}

// Function to transfer non-fungible tokens (NFTs)
async function transferNonFungibleTokens(tokenId, recipient) {
  try {
    const transferTx = { type: 'TRANSFER', tokenId, recipient };
    const response = await apiClient.post('transfer', transferTx);

    if (response.status === 200) {
      console.log('Transfer transaction successful.');
      return true;
    } else {
      console.log('Transfer transaction failed.');
      return false;
    }
  } catch (error) {
    console.log('Transfer transaction failed:', error.message);
    return false;
  }
}

// API endpoint to mint NFTs
app.post('/mint', async (req, res) => {
  const { tokenId, recipient } = req.body;
  if (await mintNonFungibleTokens(tokenId, recipient)) {
    res.status(200).json({ message: 'Minting transaction successful.' });
  } else {
    res.status(400).json({ message: 'Minting transaction failed.' });
  }
});

// API endpoint to transfer NFTs
app.post('/transfer', async (req, res) => {
  const { tokenId, recipient } = req.body;
  if (await transferNonFungibleTokens(tokenId, recipient)) {
    res.status(200).json({ message: 'Transfer transaction successful.' });
  } else {
    res.status(400).json({ message: 'Transfer transaction failed.' });
  }
});

// API endpoint for the root URL
app.get('/', (req, res) => {
  res.send('👻 Welcome to the Award Pool x Casper API Connector!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
