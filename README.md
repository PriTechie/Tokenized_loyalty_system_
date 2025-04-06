# Tokenized Loyalty System for Air Travel

This project is a blockchain-based loyalty rewards platform for the tourism industry. Users can earn and redeem tokenized points when they travel via different airlines and tourism services.

## Features
- ERC20-based token for loyalty points
- User wallets to store and redeem tokens
- Smart contracts to handle reward logic
- Frontend interface for user interaction

## Tech Stack
- Solidity
- Hardhat
- Metamask (for testing)

## Structure
- `contracts/`: Smart contracts
- `frontend/`: (If used) Web interface
- `scripts/`: Deployment and testing scripts

## 🧱 Contract Structure
- **`LoyaltyToken.sol`**  
  Custom ERC20 token that represents loyalty points.
- **`LoyaltyProgram.sol`**  
  Manages users, token issuance, and redemption logic.
- **`deploy.js`**  
  Script to deploy both contracts using Hardhat.


## To Run Locally
1. Clone the repo  
2. Install dependencies: `npm install`  
3. Compile contracts: `npx hardhat compile`  
4. Run local node: `npx hardhat node`  
5. Deploy contracts: `npx hardhat run scripts/deploy.js --network localhost`

---

