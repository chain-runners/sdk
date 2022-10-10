/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChainRunnersItems,
  ChainRunnersItemsInterface,
} from "../ChainRunnersItems";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ChangeMaxTokenSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "ChangeMintingEndDate",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxTokenSupplyExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "MintingEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAllowedToManageItem",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "itemManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowlisted",
        type: "bool",
      },
    ],
    name: "ItemManagerAllowlistUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "allowlistAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isAddressAllowlisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "isMintActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "mintEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "removeAllowlistedAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rendererAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    name: "setMaxSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "setMintEndTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rendererAddress",
        type: "address",
      },
    ],
    name: "setRendererAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805160208101909152600081526200002c816200003e565b50620000383362000057565b62000196565b805162000053906002906020840190620000a9565b5050565b600480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000b7906200014f565b90600052602060002090601f016020900481019282620000db576000855562000126565b82601f10620000f657805160ff191683800117855562000126565b8280016001018555821562000126579182015b828111156200012657825182559160200191906001019062000109565b506200013492915062000138565b5090565b5b8082111562000134576000815560010162000139565b6002810460018216806200016457607f821691505b602082108114156200017a576200017a62000180565b50919050565b634e487b7160e01b600052602260045260246000fd5b61307c80620001a66000396000f3fe608060405234801561001057600080fd5b50600436106101b85760003560e01c806369fa0647116100f9578063be8c592211610097578063e985e9c511610071578063e985e9c5146103ff578063f191aad01461043b578063f242432a1461044e578063f2fde38b1461046157600080fd5b8063be8c5922146103aa578063d67c52eb146103bd578063e1cc61f8146103ce57600080fd5b80638da5cb5b116100d35780638da5cb5b1461034a578063a22cb46514610364578063a556f60f14610377578063bd85b0391461038a57600080fd5b806369fa06471461030f578063715018a614610322578063869f75941461032a57600080fd5b806330df2e5b116101665780634f558e79116101405780634f558e79146102a757806354336742146102c957806357128683146102e957806364296cdd146102fc57600080fd5b806330df2e5b1461026157806337da577c146102745780634e1273f41461028757600080fd5b80630e89341c116101975780630e89341c1461021b5780632a36c1081461023b5780632eb2c2d61461024e57600080fd5b8062fdd58e146101bd57806301ffc9a7146101e657806304411fbb14610206575b600080fd5b6101d06101cb3660046123ed565b610474565b6040516101dd9190612dc7565b60405180910390f35b6101f96101f4366004612581565b6104ce565b6040516101dd9190612c8e565b6102196102143660046124ba565b6105b1565b005b61022e6102293660046125f0565b6106f9565b6040516101dd9190612c9c565b61021961024936600461241b565b6107a0565b61021961025c3660046122b2565b610932565b61021961026f36600461260d565b610977565b61021961028236600461260d565b6109f9565b61029a610295366004612523565b610a7b565b6040516101dd9190612c58565b6101f96102b53660046125f0565b600090815260036020526040902054151590565b6101d06102d73660046125f0565b60009081526007602052604090205490565b6102196102f736600461241b565b610b9b565b61021961030a36600461225d565b610f28565b6101f961031d3660046125f0565b610faa565b610219610fd6565b6101d06103383660046125f0565b60009081526008602052604090205490565b6004546001600160a01b03165b6040516101dd9190612ba3565b6102196103723660046123bf565b61100c565b61021961038536600461225d565b6110a4565b6101d06103983660046125f0565b60009081526003602052604090205490565b6102196103b83660046124ba565b611108565b6006546001600160a01b0316610357565b6101f96103dc36600461225d565b6001600160a01b031660009081526005602052604090205460ff16151560011490565b6101f961040d36600461227a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b61021961044936600461225d565b61127c565b61021961045c36600461236a565b6112fb565b61021961046f36600461225d565b611340565b60006001600160a01b0383166104a55760405162461bcd60e51b815260040161049c90612ccd565b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061056157507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b806104c857507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146104c8565b6105ba336103dc565b6105d757604051630be6e53f60e31b815260040160405180910390fd5b60005b838110156106f2573385858381811061060357634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610618919061225d565b6001600160a01b03161415801561066a575061066885858381811061064d57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610662919061225d565b3361040d565b155b156106a1576040517f4fb505aa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106e08585838181106106c457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906106d9919061225d565b848461139c565b806106ea81612f1f565b9150506105da565b5050505050565b6006546040517f0e89341c0000000000000000000000000000000000000000000000000000000081526060916001600160a01b0316908190630e89341c90610745908690600401612dc7565b60006040518083038186803b15801561075d57600080fd5b505afa158015610771573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261079991908101906125bb565b9392505050565b6107a9336103dc565b6107c657604051630be6e53f60e31b815260040160405180910390fd5b60005b8581101561092957338787838181106107f257634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610807919061225d565b6001600160a01b03161415801561083e575061083c87878381811061064d57634e487b7160e01b600052603260045260246000fd5b155b15610875576040517f4fb505aa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091787878381811061089857634e487b7160e01b600052603260045260246000fd5b90506020020160208101906108ad919061225d565b86868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808a028281018201909352898252909350899250889182918501908490808284376000920191909152506113cf92505050565b8061092181612f1f565b9150506107c9565b50505050505050565b6001600160a01b03851633148061094e575061094e853361040d565b61096a5760405162461bcd60e51b815260040161049c90612d1d565b6106f28585858585611473565b6004546001600160a01b031633146109a15760405162461bcd60e51b815260040161049c90612d4d565b600082815260076020526040902054156109e7576040517f6473ddee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60009182526007602052604090912055565b6004546001600160a01b03163314610a235760405162461bcd60e51b815260040161049c90612d4d565b60008281526008602052604090205415610a69576040517f321170b700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60009182526008602052604090912055565b60608151835114610a9e5760405162461bcd60e51b815260040161049c90612d97565b6000835167ffffffffffffffff811115610ac857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610af1578160200160208202803683370190505b50905060005b8451811015610b9357610b58858281518110610b2357634e487b7160e01b600052603260045260246000fd5b6020026020010151858381518110610b4b57634e487b7160e01b600052603260045260246000fd5b6020026020010151610474565b828281518110610b7857634e487b7160e01b600052603260045260246000fd5b6020908102919091010152610b8c81612f1f565b9050610af7565b509392505050565b610ba4336103dc565b610bc157604051630be6e53f60e31b815260040160405180910390fd5b8383808060200260200160405190810160405280939291908181526020018383602002808284376000920182905250925050505b8151811015610c7657610c2e828281518110610c2157634e487b7160e01b600052603260045260246000fd5b6020026020010151610faa565b610c64576040517ff48339e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80610c6e81612f1f565b915050610bf5565b50838214610c8357600080fd5b60005b84811015610e5057600060086000888885818110610cb457634e487b7160e01b600052603260045260246000fd5b90506020020135815260200190815260200160002054118015610d87575060086000878784818110610cf657634e487b7160e01b600052603260045260246000fd5b9050602002013581526020019081526020016000205488889050858584818110610d3057634e487b7160e01b600052603260045260246000fd5b90506020020135610d419190612e73565b60096000898986818110610d6557634e487b7160e01b600052603260045260246000fd5b90506020020135815260200190815260200160002054610d859190612e5b565b115b15610dbe576040517f32ae5dbb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86848483818110610ddf57634e487b7160e01b600052603260045260246000fd5b90506020020135610df09190612e73565b60096000888885818110610e1457634e487b7160e01b600052603260045260246000fd5b9050602002013581526020019081526020016000206000828254610e389190612e5b565b90915550819050610e4881612f1f565b915050610c86565b5060005b86811015610f1e57610f0c888883818110610e7f57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610e94919061225d565b87878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808b0282810182019093528a82529093508a925089918291850190849080828437600092018290525060408051602081019091529081529250611623915050565b80610f1681612f1f565b915050610e54565b5050505050505050565b6004546001600160a01b03163314610f525760405162461bcd60e51b815260040161049c90612d4d565b6001600160a01b038116600081815260056020526040808220805460ff19169055517f691dbfcc9642a461ce55c6a2ae9d9cc5827cfbc7bdcfbfe12c0faf00ed29bbd291610f9f91612c8e565b60405180910390a250565b60008181526007602052604081205415806104c857505060009081526007602052604090205442111590565b6004546001600160a01b031633146110005760405162461bcd60e51b815260040161049c90612d4d565b61100a60006116c2565b565b336001600160a01b03831614156110355760405162461bcd60e51b815260040161049c90612d87565b3360008181526001602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190611098908590612c8e565b60405180910390a35050565b6004546001600160a01b031633146110ce5760405162461bcd60e51b815260040161049c90612d4d565b600680547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b611111336103dc565b61112e57604051630be6e53f60e31b815260040160405180910390fd5b8161113881610faa565b61116e576040517ff48339e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8481101561127457600084815260086020526040902054158015906111b857506000848152600860209081526040808320546009909252909120546111b69085612e5b565b115b156111ef576040517f32ae5dbb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000848152600960205260408120805485929061120d908490612e5b565b90915550611262905086868381811061123657634e487b7160e01b600052603260045260246000fd5b905060200201602081019061124b919061225d565b85856040518060200160405280600081525061172c565b8061126c81612f1f565b915050611171565b505050505050565b6004546001600160a01b031633146112a65760405162461bcd60e51b815260040161049c90612d4d565b6001600160a01b03811660008181526005602052604090819020805460ff1916600190811790915590517f691dbfcc9642a461ce55c6a2ae9d9cc5827cfbc7bdcfbfe12c0faf00ed29bbd291610f9f91612c8e565b6001600160a01b0385163314806113175750611317853361040d565b6113335760405162461bcd60e51b815260040161049c90612cfd565b6106f28585858585611761565b6004546001600160a01b0316331461136a5760405162461bcd60e51b815260040161049c90612d4d565b6001600160a01b0381166113905760405162461bcd60e51b815260040161049c90612cdd565b611399816116c2565b50565b6113a783838361188a565b600082815260036020526040812080548392906113c5908490612e92565b9091555050505050565b6113da83838361198f565b60005b825181101561146d5781818151811061140657634e487b7160e01b600052603260045260246000fd5b60200260200101516003600085848151811061143257634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060008282546114579190612e92565b90915550611466905081612f1f565b90506113dd565b50505050565b81518351146114945760405162461bcd60e51b815260040161049c90612da7565b6001600160a01b0384166114ba5760405162461bcd60e51b815260040161049c90612d0d565b3360005b84518110156115bd5760008582815181106114e957634e487b7160e01b600052603260045260246000fd5b60200260200101519050600085838151811061151557634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156115655760405162461bcd60e51b815260040161049c90612d3d565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906115a2908490612e5b565b92505081905550505050806115b690612f1f565b90506114be565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161160d929190612c69565b60405180910390a4611274818787878787611b27565b61162f84848484611c8f565b60005b83518110156106f25782818151811061165b57634e487b7160e01b600052603260045260246000fd5b60200260200101516003600086848151811061168757634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060008282546116ac9190612e5b565b909155506116bb905081612f1f565b9050611632565b600480546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61173884848484611df6565b60008381526003602052604081208054849290611756908490612e5b565b909155505050505050565b6001600160a01b0384166117875760405162461bcd60e51b815260040161049c90612d0d565b336117a081878761179788611ecb565b6106f288611ecb565b6000848152602081815260408083206001600160a01b038a168452909152902054838110156117e15760405162461bcd60e51b815260040161049c90612d3d565b6000858152602081815260408083206001600160a01b038b811685529252808320878503905590881682528120805486929061181e908490612e5b565b92505081905550856001600160a01b0316876001600160a01b0316836001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051611874929190612dd5565b60405180910390a4610929828888888888611f24565b6001600160a01b0383166118b05760405162461bcd60e51b815260040161049c90612d2d565b336118e0818560006118c187611ecb565b6118ca87611ecb565b5050604080516020810190915260009052505050565b6000838152602081815260408083206001600160a01b0388168452909152902054828110156119215760405162461bcd60e51b815260040161049c90612ced565b6000848152602081815260408083206001600160a01b03808a16808652919093528184208786039055905190918516907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906119809089908990612dd5565b60405180910390a45050505050565b6001600160a01b0383166119b55760405162461bcd60e51b815260040161049c90612d2d565b80518251146119d65760405162461bcd60e51b815260040161049c90612da7565b604080516020810190915260009081905233905b8351811015611ac8576000848281518110611a1557634e487b7160e01b600052603260045260246000fd5b602002602001015190506000848381518110611a4157634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815280835260408082206001600160a01b038c168352909352919091205490915081811015611a915760405162461bcd60e51b815260040161049c90612ced565b6000928352602083815260408085206001600160a01b038b1686529091529092209103905580611ac081612f1f565b9150506119ea565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051611b19929190612c69565b60405180910390a450505050565b6001600160a01b0384163b15611274576040517fbc197c810000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063bc197c8190611b849089908990889088908890600401612bb1565b602060405180830381600087803b158015611b9e57600080fd5b505af1925050508015611bce575060408051601f3d908101601f19168201909252611bcb9181019061259e565b60015b611c2e57611bda612f66565b806308c379a01415611c145750611bef612f7e565b80611bfa5750611c16565b8060405162461bcd60e51b815260040161049c9190612c9c565b505b60405162461bcd60e51b815260040161049c90612cad565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146109295760405162461bcd60e51b815260040161049c90612cbd565b6001600160a01b038416611cb55760405162461bcd60e51b815260040161049c90612db7565b8151835114611cd65760405162461bcd60e51b815260040161049c90612da7565b3360005b8451811015611d8e57838181518110611d0357634e487b7160e01b600052603260045260246000fd5b6020026020010151600080878481518110611d2e57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254611d769190612e5b565b90915550819050611d8681612f1f565b915050611cda565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611ddf929190612c69565b60405180910390a46106f281600087878787611b27565b6001600160a01b038416611e1c5760405162461bcd60e51b815260040161049c90612db7565b33611e2d8160008761179788611ecb565b6000848152602081815260408083206001600160a01b038916845290915281208054859290611e5d908490612e5b565b92505081905550846001600160a01b031660006001600160a01b0316826001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051611eb4929190612dd5565b60405180910390a46106f281600087878787611f24565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611f1357634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b6001600160a01b0384163b15611274576040517ff23a6e610000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063f23a6e6190611f819089908990889088908890600401612c11565b602060405180830381600087803b158015611f9b57600080fd5b505af1925050508015611fcb575060408051601f3d908101601f19168201909252611fc89181019061259e565b60015b611fd757611bda612f66565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146109295760405162461bcd60e51b815260040161049c90612cbd565b600061204b61204684612e0c565b612df0565b9050808382526020820190508285602086028501111561206a57600080fd5b60005b858110156120945761207f8783612157565b8352602092830192919091019060010161206d565b5050509392505050565b60006120ac61204684612e0c565b905080838252602082019050828560208602850111156120cb57600080fd5b60005b85811015612094576120e08783612252565b835260209283019291909101906001016120ce565b600061210361204684612e30565b90508281526020810184848401111561211b57600080fd5b610b93848285612eba565b600061213461204684612e30565b90508281526020810184848401111561214c57600080fd5b610b93848285612ec6565b80356104c881612ffc565b60008083601f840112612173578182fd5b50813567ffffffffffffffff81111561218a578182fd5b6020830191508360208202830111156121a257600080fd5b9250929050565b600082601f8301126121b9578081fd5b81356121c9848260208601612038565b949350505050565b600082601f8301126121e1578081fd5b81356121c984826020860161209e565b80356104c881613010565b80356104c881613018565b80516104c881613018565b600082601f830112612222578081fd5b81356121c98482602086016120f5565b600082601f830112612242578081fd5b81516121c9848260208601612126565b80356104c881613040565b60006020828403121561226e578081fd5b61079983828401612157565b6000806040838503121561228c578081fd5b61229884828501612157565b915060206122a885828601612157565b9150509250929050565b600080600080600060a086880312156122c9578081fd5b6122d587828801612157565b945060206122e588828901612157565b945050604086013567ffffffffffffffff811115612301578182fd5b61230d888289016121d1565b935050606086013567ffffffffffffffff811115612329578182fd5b612335888289016121d1565b925050608086013567ffffffffffffffff811115612351578182fd5b61235d88828901612212565b9150509295509295909350565b600080600080600060a08688031215612381578081fd5b61238d87828801612157565b9450602061239d88828901612157565b94505060406123ae88828901612252565b935050606061233588828901612252565b600080604083850312156123d1578182fd5b6123dd84838501612157565b915060206122a8858286016121f1565b600080604083850312156123ff578182fd5b61240b84838501612157565b915060206122a885828601612252565b60008060008060008060608789031215612433578081fd5b8087013567ffffffffffffffff81111561244b578182fd5b61245789828a01612162565b9650965050602087013567ffffffffffffffff811115612475578182fd5b61248189828a01612162565b9450945050604087013567ffffffffffffffff81111561249f578182fd5b6124ab89828a01612162565b92509250509295509295509295565b600080600080606085870312156124cf578182fd5b8185013567ffffffffffffffff8111156124e7578283fd5b6124f387828801612162565b9450945050602061250687828801612252565b925050604061251787828801612252565b91505092959194509250565b60008060408385031215612535578182fd5b8183013567ffffffffffffffff81111561254d578283fd5b612559858286016121a9565b925050602083013567ffffffffffffffff811115612575578182fd5b6122a8858286016121d1565b600060208284031215612592578081fd5b610799838284016121fc565b6000602082840312156125af578081fd5b61079983828401612207565b6000602082840312156125cc578081fd5b8082015167ffffffffffffffff8111156125e4578182fd5b6121c984828501612232565b600060208284031215612601578081fd5b61079983828401612252565b6000806040838503121561261f578182fd5b61240b84838501612252565b6126358282612b9d565b5060200190565b61264581612ea9565b82525050565b6000612655825190565b8084526020938401938301825b82811015612687578151612676878261262b565b965050602082019150600101612662565b5093949350505050565b801515612645565b60006126a3825190565b8084526020840193506126ba818560208601612ec6565b601f01601f19169290920192915050565b60348152602081017f455243313135353a207472616e7366657220746f206e6f6e204552433131353581527f526563656976657220696d706c656d656e746572000000000000000000000000602082015290505b60400190565b60288152602081017f455243313135353a204552433131353552656365697665722072656a6563746581527f6420746f6b656e730000000000000000000000000000000000000000000000006020820152905061271f565b602b8152602081017f455243313135353a2062616c616e636520717565727920666f7220746865207a81527f65726f20616464726573730000000000000000000000000000000000000000006020820152905061271f565b60268152602081017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181527f64647265737300000000000000000000000000000000000000000000000000006020820152905061271f565b60248152602081017f455243313135353a206275726e20616d6f756e7420657863656564732062616c81527f616e6365000000000000000000000000000000000000000000000000000000006020820152905061271f565b60298152602081017f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7281527f20617070726f76656400000000000000000000000000000000000000000000006020820152905061271f565b60258152602081017f455243313135353a207472616e7366657220746f20746865207a65726f20616481527f64726573730000000000000000000000000000000000000000000000000000006020820152905061271f565b60328152602081017f455243313135353a207472616e736665722063616c6c6572206973206e6f742081527f6f776e6572206e6f7220617070726f76656400000000000000000000000000006020820152905061271f565b60238152602081017f455243313135353a206275726e2066726f6d20746865207a65726f206164647281527f65737300000000000000000000000000000000000000000000000000000000006020820152905061271f565b602a8152602081017f455243313135353a20696e73756666696369656e742062616c616e636520666f81527f72207472616e73666572000000000000000000000000000000000000000000006020820152905061271f565b60298152602081017f455243313135353a2073657474696e6720617070726f76616c2073746174757381527f20666f722073656c6600000000000000000000000000000000000000000000006020820152905061271f565b60298152602081017f455243313135353a206163636f756e747320616e6420696473206c656e67746881527f206d69736d6174636800000000000000000000000000000000000000000000006020820152905061271f565b60288152602081017f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682081527f6d69736d617463680000000000000000000000000000000000000000000000006020820152905061271f565b60218152602081017f455243313135353a206d696e7420746f20746865207a65726f2061646472657381527f73000000000000000000000000000000000000000000000000000000000000006020820152905061271f565b80612645565b602081016104c8828461263c565b60a08101612bbf828861263c565b612bcc602083018761263c565b8181036040830152612bde818661264b565b90508181036060830152612bf2818561264b565b90508181036080830152612c068184612699565b979650505050505050565b60a08101612c1f828861263c565b612c2c602083018761263c565b612c396040830186612b9d565b612c466060830185612b9d565b8181036080830152612c068184612699565b60208082528101610799818461264b565b60408082528101612c7a818561264b565b905081810360208301526121c9818461264b565b602081016104c88284612691565b602080825281016107998184612699565b602080825281016104c8816126cb565b602080825281016104c881612725565b602080825281016104c88161277d565b602080825281016104c8816127d5565b602080825281016104c88161282d565b602080825281016104c881612885565b602080825281016104c8816128dd565b602080825281016104c881612935565b602080825281016104c88161298d565b602080825281016104c8816129e5565b60208082528181019081527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726040830152606082016104c8565b602080825281016104c881612a3d565b602080825281016104c881612a95565b602080825281016104c881612aed565b602080825281016104c881612b45565b602081016104c88284612b9d565b60408101612de38285612b9d565b6107996020830184612b9d565b6000612dfb60405190565b9050612e078282612ef2565b919050565b600067ffffffffffffffff821115612e2657612e26612f50565b5060209081020190565b600067ffffffffffffffff821115612e4a57612e4a612f50565b601f19601f83011660200192915050565b60008219821115612e6e57612e6e612f3a565b500190565b6000816000190483118215151615612e8d57612e8d612f3a565b500290565b600082821015612ea457612ea4612f3a565b500390565b60006001600160a01b0382166104c8565b82818337506000910152565b60005b83811015612ee1578181015183820152602001612ec9565b8381111561146d5750506000910152565b601f19601f830116810181811067ffffffffffffffff82111715612f1857612f18612f50565b6040525050565b6000600019821415612f3357612f33612f3a565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d1115612f7b57600481823e5160e01c5b90565b600060443d1015612f8c5790565b60405160043d036004823e80513d602482011167ffffffffffffffff82111715612fb557505090565b808201805167ffffffffffffffff811115612fd1575050505090565b80602083010160043d038501811115612fec57505050505090565b50610b9381602001840185612ef2565b61300581612ea9565b811461139957600080fd5b801515613005565b7fffffffff000000000000000000000000000000000000000000000000000000008116613005565b8061300556fea2646970667358221220b58dbb7c2427611c978338183b6d86e693582c74f98aa3b23b04e90e47cbe6ea64736f6c63430008040033";

export class ChainRunnersItems__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainRunnersItems> {
    return super.deploy(overrides || {}) as Promise<ChainRunnersItems>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainRunnersItems {
    return super.attach(address) as ChainRunnersItems;
  }
  connect(signer: Signer): ChainRunnersItems__factory {
    return super.connect(signer) as ChainRunnersItems__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainRunnersItemsInterface {
    return new utils.Interface(_abi) as ChainRunnersItemsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainRunnersItems {
    return new Contract(address, _abi, signerOrProvider) as ChainRunnersItems;
  }
}