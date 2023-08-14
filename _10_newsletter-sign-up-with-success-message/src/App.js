import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import Success from './Success';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/success' element={<Success/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
