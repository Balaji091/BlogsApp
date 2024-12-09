import {Link} from 'react-router-dom';
import './index.css';
function Navbar(){
    return(
        <div className="nav-bar"> 
            <ul>
                <li><h1> NextWave</h1></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
           
        </div>
    );
}
export default Navbar;
