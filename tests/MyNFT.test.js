const { expect } = require("chai");

describe("MyNFT", function () {
    let MyNFT;
    let myNFT;
    let owner;
    let addr1;

    beforeEach(async function () {
        MyNFT = await ethers.getContractFactory("MyNFT");
        [owner, addr1] = await ethers.getSigners();
        myNFT = await MyNFT.deploy();
        await myNFT.deployed();
    });

    it("Should mint a new NFT and assign it to the recipient", async function () {
        await myNFT.mintNFT(addr1.address);
        expect(await myNFT.ownerOf(1)).to.equal(addr1.address);
    });

    it("Should increment the tokenId for each mint", async function () {
        await myNFT.mintNFT(addr1.address);
        await myNFT.mintNFT(owner.address);
        expect(await myNFT.ownerOf(1)).to.equal(addr1.address);
        expect(await myNFT.ownerOf(2)).to.equal(owner.address);
    });

    // Add more tests as needed
});
