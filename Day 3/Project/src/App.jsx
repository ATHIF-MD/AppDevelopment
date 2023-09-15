import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;