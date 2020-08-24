import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "react-apollo"

import App from './App'
import { store } from './store/configureStore';
import { client } from './utils/client';



ReactDOM.render(
   <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
         </Provider>
      </ApolloProvider>
    </BrowserRouter>,
  document.getElementById('root')
);