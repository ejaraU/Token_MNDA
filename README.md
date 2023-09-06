# Creación de TOKEN MONEDA MNDA

Con este programa se puede crear un token ECR20 en la RED TESNET POLYGON MUMBAI.<br><br>

Se debe crear el archivo .env en la raiz del proyecto con los siguientes datos:<br>

```.env
POLYGON_MUMBAI_URL=https://rpc-mumbai.maticvigil.com/
PRIVATE_KEY=
```

# Configuración de Polygon Mumbai en Metamask

- **Network Name:** Mumbai Testnet
    
- **New RPC URL:** https://rpc-mumbai.maticvigil.com/
- **Chain ID:** 80001
- **Currency Symbol:** MATIC
- **Block Explorer URL:** https://polygonscan.com/
<br><br>
### Paso 1:
![image](https://github.com/ejaraU/Token_MNDA/assets/143906202/3dce7297-3785-458c-958c-cb39b567ceb1)
### Paso 2:
![image](https://github.com/ejaraU/Token_MNDA/assets/143906202/8662b48e-c65c-49f7-b7a4-9720eb87745e)
### Paso 3:
![image](https://github.com/ejaraU/Token_MNDA/assets/143906202/e849f2ef-2e2d-49f9-8202-1a41b54ea35b)

# Cargar la Billetera con MATIC

Para poder cargar con token en nuestra billetera para poder usar en el pago de token y fee para pruebas se puede hacer en: <br>

[Polygon Faucet](https://faucet.polygon.technology/)

[Mumbai Faucet](https://mumbaifaucet.com/)

## Ejecutar el proyecto

Para ejecutar el proyecto se deben serguir los siguientes pasos:<br>
```bash
npm i -f
```
```bash
npx hardhat run .\scripts\deploy.ts
```
