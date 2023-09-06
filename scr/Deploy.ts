
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Desplegando el contrato desde la cuenta:", deployer.address);

  const MotToken = await ethers.getContractFactory("MotToken");
  const motToken = await MotToken.deploy();

  console.log("Contrato MOT Token desplegado en la dirección:", motToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
