/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { ERC721, ERC721Interface } from '../ERC721'

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620019c3380380620019c383398101604081905262000034916200017e565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b505050620002f8565b82805462000076906200026c565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b6000620001256200011f846200020c565b620001ed565b9050828152602081018484840111156200013e57600080fd5b6200014b84828562000239565b509392505050565b600082601f83011262000164578081fd5b8151620001768482602086016200010e565b949350505050565b6000806040838503121562000191578182fd5b828201516001600160401b03811115620001a9578283fd5b620001b78582860162000153565b602085015190935090506001600160401b03811115620001d5578182fd5b620001e38582860162000153565b9150509250929050565b6000620001f960405190565b90506200020782826200029d565b919050565b60006001600160401b03821115620002285762000228620002e2565b601f19601f83011660200192915050565b60005b83811015620002565781810151838201526020016200023c565b8381111562000266576000848401525b50505050565b6002810460018216806200028157607f821691505b60208210811415620002975762000297620002cc565b50919050565b601f19601f83011681016001600160401b0381118282101715620002c557620002c5620002e2565b6040525050565b634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6116bb80620003086000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b8578063b88d4fde146101cb578063c87b56dd146101de578063e985e9c5146101f157600080fd5b80636352211e1461017d57806370a082311461019057806395d89b41146101b057600080fd5b8063095ea7b3116100bd578063095ea7b31461014257806323b872dd1461015757806342842e0e1461016a57600080fd5b806301ffc9a7146100e457806306fdde031461010d578063081812fc14610122575b600080fd5b6100f76100f2366004610e54565b61022d565b604051610104919061134e565b60405180910390f35b610115610312565b604051610104919061135c565b610135610130366004610e8e565b6103a4565b60405161010491906112fc565b610155610150366004610e26565b6103fd565b005b610155610165366004610d37565b6104a1565b610155610178366004610d37565b6104d2565b61013561018b366004610e8e565b6104ed565b6101a361019e366004610ce2565b610522565b6040516101049190611458565b610115610566565b6101556101c6366004610df8565b610575565b6101556101d9366004610d82565b61062b565b6101156101ec366004610e8e565b610663565b6100f76101ff366004610cff565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102c057507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061030c57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606000805461032190611539565b80601f016020809104026020016040519081016040528092919081815260200182805461034d90611539565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103e15760405162461bcd60e51b81526004016103d890611408565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610408826104ed565b9050806001600160a01b0316836001600160a01b0316141561043c5760405162461bcd60e51b81526004016103d890611438565b336001600160a01b038216148061047657506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6104925760405162461bcd60e51b81526004016103d8906113d8565b61049c8383610703565b505050565b6104ab3382610789565b6104c75760405162461bcd60e51b81526004016103d890611448565b61049c83838361083b565b61049c8383836040518060200160405280600081525061062b565b6000818152600260205260408120546001600160a01b03168061030c5760405162461bcd60e51b81526004016103d8906113f8565b60006001600160a01b03821661054a5760405162461bcd60e51b81526004016103d8906113e8565b506001600160a01b031660009081526003602052604090205490565b60606001805461032190611539565b6001600160a01b03821633141561059e5760405162461bcd60e51b81526004016103d89061138d565b3360008181526005602090815260408083206001600160a01b03871680855292529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319061061f90859061134e565b60405180910390a35050565b6106353383610789565b6106515760405162461bcd60e51b81526004016103d890611448565b61065d84848484610975565b50505050565b6000818152600260205260409020546060906001600160a01b031661069a5760405162461bcd60e51b81526004016103d890611428565b60006106b160408051602081019091526000815290565b905060008151116106d157604051806020016040528060008152506106fc565b806106db846109a8565b6040516020016106ec9291906112e6565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091558190610750826104ed565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166107bd5760405162461bcd60e51b81526004016103d8906113c8565b60006107c8836104ed565b9050806001600160a01b0316846001600160a01b031614806108035750836001600160a01b03166107f8846103a4565b6001600160a01b0316145b8061083357506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661084e826104ed565b6001600160a01b0316146108745760405162461bcd60e51b81526004016103d890611418565b6001600160a01b03821661089a5760405162461bcd60e51b81526004016103d89061137d565b6108a5600082610703565b6001600160a01b03831660009081526003602052604081208054600192906108ce9084906114d9565b90915550506001600160a01b03821660009081526003602052604081208054600192906108fc9084906114ad565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61098084848461083b565b61098c84848484610af6565b61065d5760405162461bcd60e51b81526004016103d89061136d565b6060816109e857505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610a1257806109fc81611593565b9150610a0b9050600a836114c5565b91506109ec565b60008167ffffffffffffffff811115610a3b57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610a65576020820181803683370190505b5090505b841561083357610a7a6001836114d9565b9150610a87600a866115cc565b610a929060306114ad565b60f81b818381518110610ab557634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610aef600a866114c5565b9450610a69565b60006001600160a01b0384163b15610c42576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290610b5390339089908890889060040161130a565b602060405180830381600087803b158015610b6d57600080fd5b505af1925050508015610b9d575060408051601f3d908101601f19168201909252610b9a91810190610e71565b60015b610bf7573d808015610bcb576040519150601f19603f3d011682016040523d82523d6000602084013e610bd0565b606091505b508051610bef5760405162461bcd60e51b81526004016103d89061136d565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610833565b506001949350505050565b6000610c60610c5b84611482565b611466565b905082815260208101848484011115610c7857600080fd5b610c83848285611501565b509392505050565b803561030c81611638565b803561030c8161164f565b803561030c81611657565b805161030c81611657565b600082601f830112610cc7578081fd5b8135610833848260208601610c4d565b803561030c8161167f565b600060208284031215610cf3578081fd5b6106fc83828401610c8b565b60008060408385031215610d11578081fd5b610d1d84828501610c8b565b91506020610d2d85828601610c8b565b9150509250929050565b600080600060608486031215610d4b578081fd5b610d5785828601610c8b565b92506020610d6786828701610c8b565b9250506040610d7886828701610cd7565b9150509250925092565b60008060008060808587031215610d97578081fd5b610da386828701610c8b565b93506020610db387828801610c8b565b9350506040610dc487828801610cd7565b925050606085013567ffffffffffffffff811115610de0578182fd5b610dec87828801610cb7565b91505092959194509250565b60008060408385031215610e0a578182fd5b610e1684838501610c8b565b91506020610d2d85828601610c96565b60008060408385031215610e38578182fd5b610e4484838501610c8b565b91506020610d2d85828601610cd7565b600060208284031215610e65578081fd5b6106fc83828401610ca1565b600060208284031215610e82578081fd5b6106fc83828401610cac565b600060208284031215610e9f578081fd5b6106fc83828401610cd7565b610eb4816114f0565b82525050565b801515610eb4565b6000610ecc825190565b808452602084019350610ee381856020860161150d565b601f01601f19169290920192915050565b6000610efe825190565b610f0c81856020860161150d565b9290920192915050565b60328152602081017f4552433732313a207472616e7366657220746f206e6f6e20455243373231526581527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015290505b60400190565b60248152602081017f4552433732313a207472616e7366657220746f20746865207a65726f2061646481527f726573730000000000000000000000000000000000000000000000000000000060208201529050610f6a565b602c8152602081017f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657881527f697374656e7420746f6b656e000000000000000000000000000000000000000060208201529050610f6a565b60388152602081017f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7781527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060208201529050610f6a565b602a8152602081017f4552433732313a2062616c616e636520717565727920666f7220746865207a6581527f726f20616464726573730000000000000000000000000000000000000000000060208201529050610f6a565b60298152602081017f4552433732313a206f776e657220717565727920666f72206e6f6e657869737481527f656e7420746f6b656e000000000000000000000000000000000000000000000060208201529050610f6a565b602c8152602081017f4552433732313a20617070726f76656420717565727920666f72206e6f6e657881527f697374656e7420746f6b656e000000000000000000000000000000000000000060208201529050610f6a565b60298152602081017f4552433732313a207472616e73666572206f6620746f6b656e2074686174206981527f73206e6f74206f776e000000000000000000000000000000000000000000000060208201529050610f6a565b602f8152602081017f4552433732314d657461646174613a2055524920717565727920666f72206e6f81527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060208201529050610f6a565b60218152602081017f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6581527f720000000000000000000000000000000000000000000000000000000000000060208201529050610f6a565b60318152602081017f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f81527f776e6572206e6f7220617070726f76656400000000000000000000000000000060208201529050610f6a565b80610eb4565b6112f08184610ef4565b90506106fc8183610ef4565b6020810161030c8284610eab565b608081016113188287610eab565b6113256020830186610eab565b61133260408301856112e0565b81810360608301526113448184610ec2565b9695505050505050565b6020810161030c8284610eba565b602080825281016106fc8184610ec2565b6020808252810161030c81610f16565b6020808252810161030c81610f70565b6020808252810161030c81601981527f4552433732313a20617070726f766520746f2063616c6c657200000000000000602082015260400190565b6020808252810161030c81610fc8565b6020808252810161030c81611020565b6020808252810161030c81611078565b6020808252810161030c816110d0565b6020808252810161030c81611128565b6020808252810161030c81611180565b6020808252810161030c816111d8565b6020808252810161030c81611230565b6020808252810161030c81611288565b6020810161030c82846112e0565b600061147160405190565b905061147d8282611566565b919050565b600067ffffffffffffffff82111561149c5761149c611622565b601f19601f83011660200192915050565b600082198211156114c0576114c06115e0565b500190565b6000826114d4576114d46115f6565b500490565b6000828210156114eb576114eb6115e0565b500390565b60006001600160a01b03821661030c565b82818337506000910152565b60005b83811015611528578181015183820152602001611510565b8381111561065d5750506000910152565b60028104600182168061154d57607f821691505b602082108114156115605761156061160c565b50919050565b601f19601f830116810181811067ffffffffffffffff8211171561158c5761158c611622565b6040525050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156115c5576115c56115e0565b5060010190565b6000826115db576115db6115f6565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b611641816114f0565b811461164c57600080fd5b50565b801515611641565b7fffffffff000000000000000000000000000000000000000000000000000000008116611641565b8061164156fea2646970667358221220ccd3936534dc30c4a7ffc1b760aa5cfa1eafa23255fa7292e4bae9890342c56164736f6c63430008040033'

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {})
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721
  }
}