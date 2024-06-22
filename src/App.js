import './App.css';
import LogInSignUp from './components/LogInSignUp';
import ChatHome from './components/ChatHome';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/login&signup' element={<LogInSignUp />}/>
       <Route path='/' element={<ChatHome />}/>
     </Routes>  
    </div>
  );
}

export default App;
