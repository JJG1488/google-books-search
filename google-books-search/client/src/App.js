import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Wrapper from './components/layout/Wrapper';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';

function App() { 

  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route exact path="/saved" component={Saved}/>
          <Route exact path="/saved:id" component={Saved}/>
          <Route exact path="/search" component={Search}/>

        </Switch>
      </Wrapper>
    </div>
  </Router>
  )

  


}

export default App;
