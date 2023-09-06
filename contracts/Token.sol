// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MotToken is ERC20 {
    constructor() ERC20("MOT Token", "MOT") {
        _mint(msg.sender, 1000000000000000000000000); // Inicializa el contrato con 1,000,000 MOT tokens
    }
}
