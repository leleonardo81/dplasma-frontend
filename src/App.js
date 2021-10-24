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
// import { PersistGate } from 'redux-persist/integration/react';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <ConnectedRouter history={history}>
          <Switch>
            {routes.map(routeProps => (
              <Route {...routeProps} key={routeProps.path} />
            ))}
          </Switch>
        </ConnectedRouter>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
