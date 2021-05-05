// import logo from './logo.svg';
import './App.css';
import Landing from "./components/layout/Landing";
import Search from "./components/layout/Search";
import Saved from "./components/layout/Saved";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            something can go here
        </p>
          <Link
            className="App-link"
            to="https://google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Link
        </Link>
          <Switch>
            <Route path="/" component={Landing} />
            <Route path="/saved" component={Saved} />
          </Switch>



          <Landing />

        </header>

        {/* <Route path="/" component={Search} /> */}

      </div>
    </Router>
  );
}

export default App;
