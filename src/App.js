import './App.css';
import About from './components/about';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {

  return (

      <div className="App">
        <Router>

      <div>
      <ul class="navbar-email-list">
              <li>
            Employee Login
              </li>
              <li><i class="bi bi-envelope-paper-fill"></i>
              &nbsp;
              info@perksys.com
              </li>
              <li>
              214-842-6969
              </li>
            </ul>
          <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="/">Perks Systems INC</a>
    <ul class="navbar-nav mr-auto mt-2 ">
      <li class="nav-item active">
        <Link class="nav-link" to="/">HOME</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">ABOUT US</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/">SERVICES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">CLIENTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">CARRERS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">CONTACT US</a>
      </li>
    </ul>
   
  </div>
</nav>
</div>
         
         <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
           </Routes>
    </Router>
    <div className="homefooter">
                <p>Copyright © 2014 Perk Systems, Inc. All rights reserved.</p>
            </div>
    </div>
  );
}

export default App;
