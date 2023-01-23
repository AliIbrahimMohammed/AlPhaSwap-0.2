import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xC61f4D3Ee059ebb4E1007E8aaC698c4F8974527d"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/D5yRQlDUQ2NWN7Yx7QNZN9wh7pJtWdBJ",
  },
};