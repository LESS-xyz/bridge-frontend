import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BinanceService, ContractService, MetamaskService, BackendService } from '../../utils';
import { userActions, modalActions, walletActions } from '../../redux/actions';

const contractContext = createContext({
  walletService: null,
  contractService: null,
})

const backendService = new BackendService()

const ContractProvider = ({ children }) => {
  const [walletService, setWalletService] = React.useState(null)
  const [contractService, setContractService] = React.useState(null)
  const [contractDetails, setContractDetails] = React.useState(null)

  const dispatch = useDispatch();

  const { walletType, networkFrom, networkTo } = useSelector(({ wallet }) => ({
    walletType: wallet.type,
    networkFrom: wallet.networkFrom,
    networkTo: wallet.networkTo,
  }))

  const loginMetamask = async (interval) => {
    try {
      console.log('loginMetamask',networkFrom,contractDetails)
      const wallet = new MetamaskService({networkFrom,contractDetails})
      // dispatch(modalActions.toggleModal({isOpen:true,text:'MetamaskService'}))
      await window.ethereum.enable()
      // dispatch(modalActions.toggleModal({isOpen:true,text:'ethereum.enable'}))
      setContractService(new ContractService({ wallet, networkFrom, contractDetails }))
      setWalletService(wallet)
      // dispatch(modalActions.toggleModal({isOpen:true,text:'ContractService'}))
      const account = await wallet.getAccount()
      dispatch(userActions.setUserData(account))
      interval && clearInterval(interval)
    } catch (e) {
      console.error(e);
      if (!e.errorMsg || e.errorMsg==='') {
        dispatch(modalActions.toggleModal({
          isOpen:true,
          text:
          <div>
            <p>
              Metamask extension is not found.
            </p>
            <p>
              You can install it from {' '}
              <a href="https://metamask.io" target="_blank">metamask.io</a>
            </p>
          </div>
        }))
      } else {
        dispatch(modalActions.toggleModal({isOpen:true,text:e.errorMsg}))
      }
    }
  }

  const loginBinance = async (interval) => {
    try {
      console.log('loginBinance',networkFrom)
      const wallet = new BinanceService({networkFrom,contractDetails})
      setContractService(new ContractService({ wallet, networkFrom, contractDetails }))
      setWalletService(wallet)
      const account = await wallet.getAccount()
      dispatch(userActions.setUserData(account))
      interval && clearInterval(interval)
    } catch (e) {
      console.error(e);
      if (!e.errorMsg || e.errorMsg==='') {
        dispatch(modalActions.toggleModal({
          isOpen:true,
          text:
          <div>
            <p>
              Binance Chain Wallet is not found.
            </p>
            <p>
              You can install it from {' '}
              <a href="https://www.binance.org" target="_blank">binance.org</a>
            </p>
          </div>
        }))
      } else {
        dispatch(modalActions.toggleModal({isOpen:true,text:e.errorMsg}))
      }
    }
  }

  const getDex = async () => {
    try {
      const resultGetDex = await backendService.getDex({name:'dds'})
      const dex = resultGetDex.data;
      dispatch(walletActions.setWalletDex(dex));
      console.log('resultGetDex',resultGetDex.data)
      const tokens = dex.tokens;
      if (!dex) return dispatch(modalActions.toggleModal({
        isOpen:true,text:'Server is offline',
      }))
      if (tokens && !tokens[0]) return dispatch(modalActions.toggleModal({
        isOpen:true,text:'Server is offline',
      }))
      const binanceSmartChain = tokens.filter((item) => item.network==='Binance-Smart-Chain')[0]
      const ethereumChain = tokens.filter((item) => item.network==='Ethereum')[0]
      let contractDetails = {
        ADDRESS: {
          TOKEN: {
            'Ethereum':ethereumChain.token_address,
            'Binance-Smart-Chain':binanceSmartChain.token_address,
          },
          SWAP: {
            'Ethereum':ethereumChain.swap_address,
            'Binance-Smart-Chain':binanceSmartChain.swap_address,
          },
          FEE: {
            'Ethereum':ethereumChain.fee_address,
            'Binance-Smart-Chain':binanceSmartChain.fee_address,
          },
        },
        DECIMALS: {
          TOKEN: {
            'Ethereum': ethereumChain.decimals,
            'Binance-Smart-Chain': binanceSmartChain.decimals,
          },
          SWAP: {
            'Ethereum':ethereumChain.decimals,
            'Binance-Smart-Chain':binanceSmartChain.decimals,
          },
        },
        ABI: {
          TOKEN: {
            'Ethereum':ethereumChain.token_abi,
            'Binance-Smart-Chain':binanceSmartChain.token_abi,
          },
          SWAP: {
            'Ethereum': ethereumChain.swap_abi,
            'Binance-Smart-Chain': binanceSmartChain.swap_abi,
          },
        }
      }
      setContractDetails(contractDetails)
    } catch (e) {
      console.error(e);
    }
  }

  React.useEffect(() => {
    console.log('ContractContext useEffect walletType', walletType);
    (async () => {
      await getDex()
    })();
  }, [walletType])

  React.useEffect(() => {
    console.log('ContractContext useEffect contractDetails', contractDetails);
    if (!contractDetails) return;
    (async () => {
      const walletTypeOnChainChanged = localStorage.getItem('walletTypeOnChainChanged')
      if (walletTypeOnChainChanged === '') {
        if (walletType === 'metamask') {
          loginMetamask()
        } else if (walletType === 'binance') {
          loginBinance()
        }
      } else {
        if (walletTypeOnChainChanged === 'metamask') {
          loginMetamask()
        } else if (walletTypeOnChainChanged === 'binance') {
          loginBinance()
        }
      }
      localStorage.setItem('walletTypeOnChainChanged','')
    })();
  }, [contractDetails])

  return (
    <contractContext.Provider value={{ walletService, contractService }}>
      {children}
    </contractContext.Provider>
  );
}

export default ContractProvider;

export function useContractContext() {
  return useContext(contractContext)
}
