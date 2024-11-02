const { expect } = require("chai");

describe("MyToken", function () {
    let MyToken;
    let myToken;
    let owner;
    let addr1;

    beforeEach(async function () {
        MyToken = await ethers.getContractFactory("MyToken");
        [owner, addr1] = await ethers.getSigners();
        myToken = await MyToken.deploy(1000); // Deploy with 1000 tokens
        await myToken.deployed();
    });

    it("Should have correct name and symbol", async function () {
        expect(await myToken.name()).to.equal("MyToken");
        expect(await myToken.symbol()).to.equal("MTK");
    });

    it("Should assign the initial supply to the owner", async function () {
        const ownerBalance = await myToken.balanceOf(owner.address);
        expect(await myToken.totalSupply()).to.equal(ownerBalance);
    });

    // Add more tests as needed
});
