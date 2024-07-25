import logo from './logo.svg';
import './App.css';

import Default from './pages/default';
import About from './pages/about';
import Users from './pages/users';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Default/>}/>
      <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
     </Routes>
    </div>
  );
}

export default App;
