
import '../Files/App.css';
import Naver from '../views/Naver.js'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../views/Homer.js'
import Login from '../views/Logger.js';
import Register from '../views/Regger.js'

function App() {
  return (
       <>
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
       </>
  );
}

export default App;
