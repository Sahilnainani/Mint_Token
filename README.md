# Mint Token

This project involves creating a custom ERC20 token on the Ethereum blockchain using Solidity smart contracts. In addition, a front-end interface will be created using React.js and ethers.js to interact with the smart contract.

## Description

This project includes a smart contract written in solidity that inherits the ERC20 and this smart contract is having a constructor that takes the arguments name, symbol, decimal, initialSupply and mint the token. The fontend is made using react js, the app.js file takes the input  name, symbol, decimal, initialSupply from the user and pass it to the constructor of the smart contract while deploying the contract on the local blockchain which is running through hardhat.

## Getting Started

1. Clone this repository to your local machine and then open it in any editor.

2. Install the required dependencies by running "npm install".

3. Start the development server by running "npm start".

4. In a separate terminal window, run the Hardhat node by running "npx hardhat node".

5. Interact with the front-end interface by visiting http://localhost:3000 in your web browser.

## Usage

The front-end interface allows you to enter the token name, symbol, and number of decimals for your custom ERC20 token. Once these details have been entered, this allows you to mint your own token by clicking the "Mint Tokens" button.
```
