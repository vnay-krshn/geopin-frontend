import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import Landingpage from './components/landingPage';
import Login from './components/login';
import Register from './components/register';
import SearchPage from './components/searchpage';
import CheckInPage from './components/checkInPage'
import SearchResults from './components/searchResultPage';
import CheckinResults from './components/checkinResultPage'
import {OptionProvider} from './components/optionsContext'
import VisitorProfile from './components/visitorProfile'

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
          </Switch>
      </Router>
    </div>
    </OptionProvider>
  );
}


export default App;
