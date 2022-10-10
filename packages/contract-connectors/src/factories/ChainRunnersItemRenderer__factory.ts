/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ChainRunnersItemRenderer,
  ChainRunnersItemRendererInterface,
} from "../ChainRunnersItemRenderer";

const _abi = [
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

export class ChainRunnersItemRenderer__factory {
  static readonly abi = _abi;
  static createInterface(): ChainRunnersItemRendererInterface {
    return new utils.Interface(_abi) as ChainRunnersItemRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainRunnersItemRenderer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainRunnersItemRenderer;
  }
}
