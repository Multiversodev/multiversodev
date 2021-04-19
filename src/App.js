import React from 'react';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import PageRenderer from './page-renderer'

function App() {

  const user ={
    firstName: 'Vand',
    lastName: 'Aquino'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={user}/>
        <Switch>
          <Route path="/:page" component={PageRenderer}/>
          <Route path="/" render={() => <Redirect to="/inicio" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
