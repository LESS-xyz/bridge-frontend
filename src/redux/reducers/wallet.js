import {getFromStorage, setToStorage} from '../../utils';

const defaultNetworkFrom = getFromStorage('defaultNetworkFrom');
const networkFrom = defaultNetworkFrom ? defaultNetworkFrom : 'Ethereum';

const initialState = {
  type: '',
  networkFrom,
  networkTo: '',
  dexList: '',
  dex: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WALLET:SET_TYPE': return { ...state, type: payload, };
    case 'WALLET:SET_NETWORK_FROM': return { ...state, networkFrom: payload, };
    case 'WALLET:SET_NETWORK_TO': return { ...state, networkTo: payload, };
    case 'WALLET:SET_DEX_LIST': return { ...state, dexList: payload, };
    case 'WALLET:SET_DEX': return { ...state, dex: payload, };
    default: return state;
  }
}
