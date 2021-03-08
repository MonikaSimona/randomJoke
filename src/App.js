import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Joke/>
    </div>
  );
}

export default App;
