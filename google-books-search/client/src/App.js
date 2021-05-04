// import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/layout/Jumbotron";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          something can go here
        </p>
        <a
          className="App-link"
          href="https://google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>

        <Jumbotron/>
      </header>
    </div>
  );
}

export default App;
