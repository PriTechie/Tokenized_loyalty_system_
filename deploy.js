const { ethers } = require("hardhat");

async function main() {
    const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1 million tokens with 18 decimals
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(initialSupply);

    await myToken.deployed();
    console.log(`MyToken deployed to: ${myToken.address}`);
}

// Run the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
