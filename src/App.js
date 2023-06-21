import './App.css';
import Nav from './Nav'
import Home from './Home'

function App() {


  return (
    <div className="App">

      <div className="nav-container">
        <Nav />
      </div>

    
      <div className='home-container'>
        <Home />
      </div>

    </div>
  );
}

export default App;
