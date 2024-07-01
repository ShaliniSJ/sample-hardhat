# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

> ## Refer package.json for command

# want to run this code ?

- follow the below commands

```shell
yarn install
```

- open terminal in the project / directory
- the below code will spin up a local blockchain network called localhost

```shell 
yarn node 
```

- open another terminal
```shell
yarn dev
```

- by doing this you are deploying contract in blockchain and doing changes in blockchain which will cost eth

- you can even connect your metamask account. PLEASE USE TESTNET ETH