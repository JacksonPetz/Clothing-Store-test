import React from 'react';



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';

import HomeStrap from './pages/Home';
import shop from './pages/shop';
import MyOrder from './pages/MyOrder';
import History from './pages/History';
import SignupStrap from './pages/Signup';
import LoginStrap from './pages/Login';
import NoMatch from "./pages/NoMatch";
import Success from "./pages/Success";

// import Nav from './components/Nav';
import FooterStrap from './components/Footer'

import NavStrap from './components/Nav';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}`: ''
      }
    })
  },
  uri: 'http://localhost:3001/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            {/* <ThemeProvider theme={customTheme}> */}
              <NavStrap />
              <Switch>
                <Route exact path="/" component={HomeStrap} />
                <Route exact path="/shop" component={shop} />
                <Route exact path="/login" component={LoginStrap} />
                <Route exact path="/signup" component={SignupStrap} />
                <Route exact path="/cart" component={MyOrder} />
                <Route exact path="/profile" component={History} />
                <Route exact path="/success" component={Success} />
                <Route component={NoMatch} />
              </Switch>
              <FooterStrap />
            {/* </ThemeProvider> */}
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;