
import './App.css';
import Naver from './Naver.js'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Homer.js'
import Login from './Logger.js'
import Register from './Regger.js'

function App() {
  return (
       <BrowserRouter>
            <Naver/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
             <Routes>
                <Route path="/register" element={<Register/>}/>
            </Routes>
       </BrowserRouter>
  );
}

export default App;
