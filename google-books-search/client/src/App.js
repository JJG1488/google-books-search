// import logo from './logo.svg';
import './App.css';
import Landing from "./components/layout/Landing";
import Search from "./components/layout/Search";
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter >
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

        <Landing/>
        
      </header>

      {/* <Route path="/" component={Search} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
