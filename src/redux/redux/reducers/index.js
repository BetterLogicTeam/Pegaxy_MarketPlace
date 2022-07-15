import getWalletAddrss from "./getWalletAddrss";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    getWalletAddrss: getWalletAddrss,
  
});

export default rootReducer;