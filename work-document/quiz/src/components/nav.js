import React from "react";
import {Link,useNavigate} from 'react-router-dom';
const Navbar=()=>{
  let history = useNavigate();

  const logout = () => {
    history('/')
}
    return(
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div>
            <Link className="navbar-brand" to={'/sign-in'}>              
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
              <button className='btn2' onClick={logout}>Logout</button>

            </div>
          </div>
        </nav>
    )
}
export default Navbar;