import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index Component={Home} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
