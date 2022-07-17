import {Link} from 'react-router-dom';
function Header() {
    return (
        <nav className="header-bar">
            <div >
                <Link to='/' ><img height='100px' src={require("../assets/home.png")} alt="home" className="header" /></Link>

            </div>
        </nav>
    );
}

export default Header; 