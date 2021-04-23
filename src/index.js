import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css";
import { InMemoryCache, ApolloClient, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers:{
    authorization:  `Bearer add your own github token to test the application`
  }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode><App /></React.StrictMode>    
    </ApolloProvider>,
  document.getElementById('root')
);