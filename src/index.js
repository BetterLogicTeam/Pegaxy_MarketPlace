import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { Provider } from 'react-redux';

import store from './redux/redux/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider initializeOnMount={true}
          serverUrl="https://it200adba9tf.usemoralis.com:2053/server" appId="BHvBuek1TZiN1uEiKhVUzXKuIv5wzl5AKGQB83dt"
          masterKey="6TgnpRRUOqle4Z4csNyaj2cSaw8u8TPMQ7JuB2TR"
          >

            <Provider store={store}>  
              <App />
              </Provider>



    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
