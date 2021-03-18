export default {
  ADDRESS: {
    TOKEN: {
      mainnet: {
        'Ethereum': '',
        'Binance-Chain': '',
        'Binance-Smart-Chain': '',
      },
      testnet: {
        'Ethereum': '0x6491086E326f3AF68C3C7928C7c132a9a665d542',
        'Binance-Chain': '',
        'Binance-Smart-Chain': '0x9D805Fb40F37fc0595F076f158c0f42673d9aaB1',
      },
    },
    SWAP: {
      mainnet: {
        'Ethereum': '',
        'Binance-Chain': '',
        'Binance-Smart-Chain': '',
      },
      testnet: {
        'Ethereum': '0x87264eC999Af83938720916FaA5F3a6124549F87',
        'Binance-Chain': 'tbnb1gz96khg7k20x84qup8jq669jx57ltzpz9aq2cw',
        'Binance-Smart-Chain': '0xF4cEC21417184510B47eaFd9D199e24F03adB3B3',
      },
    },
    FEE: {
      mainnet: {
        'Ethereum': '',
        'Binance-Chain': '',
        'Binance-Smart-Chain': '',
      },
      testnet: {
        'Ethereum': '0xa2537026e1f1db218c4a4dc3d87a378e730cf19b',
        'Binance-Chain': 'tbnb1mkzvl2qzwjpvl97yvqalgwsklq0zumd4kjlgf2',
        'Binance-Smart-Chain': '0xa2537026e1f1db218c4a4dc3d87a378e730cf19b',
      },
    },
  },
  DECIMALS: {
    TOKEN: {
      mainnet: {
        'Ethereum': 8,
        'Binance-Chain': 8,
        'Binance-Smart-Chain': 8,
      },
      testnet: {
        'Ethereum': 8,
        'Binance-Chain': 8,
        'Binance-Smart-Chain': 8,
      },
    },
    SWAP: {
      mainnet: {
        'Ethereum': 8,
        'Binance-Chain': 8,
        'Binance-Smart-Chain': 8,
      },
      testnet: {
        'Ethereum': 8,
        'Binance-Chain': 8,
        'Binance-Smart-Chain': 8,
      },
    },
  },
  ABI: {
    TOKEN: [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],

    // ========================================

    SWAP: [{"inputs":[{"internalType":"contract IERC20","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint128","name":"_numOfTotalBlockchains","type":"uint128"},{"internalType":"uint128","name":"_numOfThisBlockchain","type":"uint128"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransferFromOtherBlockchain","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint128","name":"blockchain","type":"uint128"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"newAddress","type":"string"}],"name":"TransferToOtherBlockchain","type":"event"},{"inputs":[{"internalType":"address","name":"newFeeAddress","type":"address"}],"name":"changeFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"newNumOfThisBlockchain","type":"uint128"},{"internalType":"uint128","name":"newNumOfTotalBlockchains","type":"uint128"}],"name":"changeInformationAboutOtherBlockchain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"","type":"uint128"}],"name":"feeAmountOfBlockchain","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numOfThisBlockchain","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numOfTotalBlockchains","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"blockchainNum","type":"uint128"},{"internalType":"uint128","name":"feeAmount","type":"uint128"}],"name":"setFeeAmountOfBlockchain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"blockchain","type":"uint128"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"newAddress","type":"string"}],"name":"transferToOtherBlockchain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amountToUser","type":"uint256"}],"name":"transferToUserWithFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferToUserWithoutFee","outputs":[],"stateMutability":"nonpayable","type":"function"}],
  }
}
