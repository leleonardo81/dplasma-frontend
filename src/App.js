import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store, { history } from './store';
import routes from './routes';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeApp } from 'firebase/app';
import AuthModal from 'components/AuthModal';
import { persistor } from 'store/index';
import NavBar from 'components/NavBar';
import Container from '@material-ui/core/Container';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);

function App(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <AuthModal />
          <NavBar {...props} />
          <Container className="pt-36 md:pt-20">
            <Switch>
              {routes.map(routeProps => (
                <Route {...routeProps} key={routeProps.path} />
              ))}
            </Switch>
          </Container>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
