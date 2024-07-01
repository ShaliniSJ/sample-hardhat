import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage } from "../typechain-types";

describe("SimpleStorage", () => {
    let SimpleStorageFactory, SimpleStorage:SimpleStorage;
    beforeEach(async () => {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        SimpleStorage = await SimpleStorageFactory.deploy();
    });

    it("should start with fav no 0", async () => {
        const curr = await SimpleStorage.retrieve();
        const ev = "0";
        // either assert and expect
        assert.equal(curr.toString() , ev)
    });
});
