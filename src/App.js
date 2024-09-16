import logo from './logo.svg';
import './App.css';
import AllData from './Components/AllData';
import Search from './Components/Search';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AllData/>}/>
      <Route path="/country-details" element={<CountryDetails />} />    </Routes>
    
    </>
  );
}

export default App;
