const hre = require("hardhat");

async function main() {
  // Contract factory
  const MyContract = await hre.ethers.getContractFactory("Lock");

  // Deploy contract
  const myContract = await MyContract.deploy();
  await myContract.deployed();

  console.log("MyContract deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
