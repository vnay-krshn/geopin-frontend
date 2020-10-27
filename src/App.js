import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import Landingpage from './pages/landingPage';
import Login from './pages/login';
import Register from './pages/register';
import SearchPage from './pages/searchpage';
import CheckInPage from './pages/checkInPage'
import SearchResults from './pages/searchResultPage';
import CheckinResults from './pages/checkinResultPage'
import VisitorProfile from './pages/visitorProfile'
import UserProfile from './pages/userprofile'

import {OptionProvider} from './comp/optionsContext'

function App() {

 return (
  <OptionProvider>
    <div>
      <Router>
        <Switch>
            <Route path='/' exact component={Landingpage}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/homepage' component={Homepage}/>
            <Route path='/search' component={SearchPage}/>
            <Route path='/checkIn' component={CheckInPage}/>
            <Route path='/searchResults' component={SearchResults}/>
            <Route path='/checkinResults' component={CheckinResults}/>
            <Route path='/visitorProfile' component={VisitorProfile}/>
            <Route path='/userProfile' component={UserProfile}/>
          </Switch>
      </Router>
    </div>
    </OptionProvider>
  );
}


export default App;
