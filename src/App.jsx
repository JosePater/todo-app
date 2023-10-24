import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster position='top-right'/>
        <Routes>
          <Route index Component={Home} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
