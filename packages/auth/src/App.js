import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';
import ForgotPassword from './components/forgot-password/ForgotPassword';
import RecoverPassword from './components/recover-password/RecoverPassword';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
           
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/forgot-password" component={ForgotPassword}/>
            <Route path="/auth/recover-password" component={RecoverPassword}/> 
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
