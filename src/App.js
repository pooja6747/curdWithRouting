
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Showuesr from './components/Showuesr';
import UpdateUser from './components/UpdateUser';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="App">
      <h1>Hello API with Routing </h1>
      <nav>
        <Link className='mx-5' to='/'>Home</Link>
        <Link to='/create'>Create</Link>
        
      </nav>
      <Routes>
        <Route path='/' element={<Showuesr/>}/>
        <Route path='update' element={<UpdateUser/>}/>
        <Route path='create' element={<CreateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
