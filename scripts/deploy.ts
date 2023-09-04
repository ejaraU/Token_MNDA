const { ethers, network } = require('hardhat'); // Agrega 'network' para acceder a la configuración de la red

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Balance de la Cuenta:', (await deployer.getBalance()).toString());

  // Configura las opciones de la transacción, incluyendo gasPrice y gasLimit
  const txOptions = {
    gasPrice: ethers.utils.parseUnits('10', 'gwei'), // Cambia esto al precio del gas deseado
    gasLimit: 2000000, // Cambia esto al límite de gas deseado
  };

  const Token = await ethers.getContractFactory('MNDA');
  const token = await Token.deploy(txOptions); // Pasa las opciones de transacción al desplegar el contrato

  const name = await token.name();
  const symbol = await token.symbol();
  const decimals = await token.decimals();
  const supply = await token.totalSupply();
  
  console.log('Token address:', token.address);
  console.log('Nombre del Token:', name);
  console.log('Símbolo del Token:', symbol);
  console.log('Decimales del Token:', decimals);
  console.log('Total de Suministo de Token:', supply.toString());

  // Imprime las tarifas de gas utilizadas en esta transacción
  console.log('Gas Price:', txOptions.gasPrice.toString());
  console.log('Gas Limit:', txOptions.gasLimit.toString());
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
