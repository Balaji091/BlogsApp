import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import BlogItemDetails from './components/blogItemDetails';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/blogs/:id" element={<BlogItemDetails/>}/>
        </Routes>

    </div>
  );
}

export default App;
