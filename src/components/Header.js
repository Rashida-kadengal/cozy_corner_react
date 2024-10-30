import { useContext,useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import './Header.css'
function Header() {
    const [count,setCount]=useState('')
    const [searchText,setSearchText]=useState('')
    const typeSearchText=($e)=>{
        setSearchText($e.target.value)

    }
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Shopmart</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/'}>Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/products'}>Products</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/about'}>About Us</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/contact'}>Contact Us</NavLink>
                        </li>
                    </ul>
                    <form class="d-flex me-5">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={typeSearchText} />
                        <NavLink to={'/products?search='+searchText} className="btn btn-outline-success">Search</NavLink>
                    </form>
                    <ul class="navbar-nav ms-5  mb-2 mb-lg-0">
                       
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                        </li>
                       
                        
                    </ul>
                </div>
            </div>
        </nav>
       
        </>
    );
}
export default Header;