import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
      <NavBar />
      <StarshipPage />
      <Routes>
        <>
        </>
      </Routes>
    </>
  )
}

export default App;
