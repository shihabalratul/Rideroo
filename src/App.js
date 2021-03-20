import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { createContext, useState } from 'react';
import Destination from './Destination/Destination';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser)
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />

          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/signIn'>
              <SignIn />
            </Route>
            <PrivateRoute path='/destination/:id'>
              <Destination />
            </PrivateRoute>
            <Route path='/signUp'>
              <SignUp />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
