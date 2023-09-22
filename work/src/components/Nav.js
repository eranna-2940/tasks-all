import React  from "react";
import {Link,useLocation} from "react-router-dom";

const Navbar=()=>{
    const location = useLocation();

    return(
        <div>
        <ul class="navbar-email-list">
                <li>
              Employee Login
                </li>
                <li><i class="bi bi-envelope-paper-fill"></i>
                &nbsp;
                info@perksys.com
                </li>
                <li><i class="bi bi-phone"></i>
                &nbsp;
                214-842-6969
                </li>
              </ul>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="/">Perks Systems INC</a>
      <ul class="navbar-nav mr-auto mt-2 ">
        <li class="nav-item active">
          <Link class='nav-link' id={location.pathname === '/' ? 'active-link' : ''} to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class='nav-link'to="/about" id={location.pathname === '/about' ? 'active-link' : ''}>ABOUT US</Link>
        </li>
        <li class="nav-item">
          <Link  class='nav-link' to="/services" id={location.pathname === '/services' ? 'active-link' : ''}>SERVICES</Link>
        </li>
        <li class="nav-item">
          <Link  class='nav-link' to="/clients" id={location.pathname === '/clients' ? 'active-link' : ''}>CLIENTS</Link>
        </li>
        <li class="nav-item">
          <Link  class='nav-link' to="/carrers" id={location.pathname === '/carrers' ? 'active-link' : ''}>CARRERS</Link>
        </li>
        <li class="nav-item">
          <Link  class='nav-link' to="/contact" id={location.pathname === '/contact' ? 'active-link' : ''}>CONTACT US</Link>
        </li>
      </ul>
     
    </div>
  </nav>
  </div>
    )
}

export default Navbar;