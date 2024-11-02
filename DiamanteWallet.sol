// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DiamanteWallet {
    // Store the owner's address
    address public owner;

    // Event to log deposits
    event Deposited(address indexed from, uint256 amount);
    // Event to log withdrawals
    event Withdrawn(address indexed to, uint256 amount);

    // Constructor to set the owner of the wallet
    constructor() {
        owner = msg.sender;
    }

    // Function to deposit Ether into the wallet
    function deposit() external payable {
        emit Deposited(msg.sender, msg.value);
    }

    // Function to withdraw Ether from the wallet
    function withdraw(uint256 amount) external {
        require(msg.sender == owner, "Only the owner can withdraw");
        require(amount <= address(this).balance, "Insufficient balance");

        payable(owner).transfer(amount);
        emit Withdrawn(owner, amount);
    }

    // Function to check the wallet balance
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
