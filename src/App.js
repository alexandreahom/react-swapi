import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<StarshipPage />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App;
