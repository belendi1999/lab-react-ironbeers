import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Beers from './pages/Beers'
import NewBeer from './pages/NewBeer'
import RandomBeer from './pages/RandomBeer'
import Header from './components/Header';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/beers" element={ <Beers />} />
        <Route path="/random-beer" element={ <RandomBeer />} />
        <Route path="/new-beer" element={ <NewBeer />} />
        <Route path="/beer/:beerId" element={ <BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
