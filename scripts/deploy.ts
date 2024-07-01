//imports
import { ConstructorFragment } from "ethers";
import "@nomicfoundation/hardhat-toolbox";
import { ethers, network, run } from "hardhat";

// main def
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    const simpleStorage = await SimpleStorageFactory.deploy();
    const contractAddress = await simpleStorage.getAddress();

    const curr = await simpleStorage.retrieve();
    console.log("current value of storage is: ",curr.toString());

    // update
    const transactionResponse = simpleStorage.store(7);
    (await transactionResponse).wait(5);
    // console.log(transactionResponse)
    const updateval = await simpleStorage.retrieve();
    console.log("update value", updateval);
}
async function verify(contractAddress: string, args: {}) {
    console.log("verifying.....");
    // run function is used to run task when you give yarn hardhat in terminal
    await run("verify:verify", {
        address: contractAddress,
        ConstructorArguments: args,
    });
}

main()
    .then(() => process.exit(0))
    .catch((e) => console.log(e));
