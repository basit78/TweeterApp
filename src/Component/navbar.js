import React,{useContext} from "react";
import {Link} from "react-router-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import "../App.css"
import {Globalcontex} from "../Contex/contex"
function Navbar(){
  const {state}=useContext(Globalcontex)
    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <img src="https://ra.ac.ae/wp-content/uploads/2020/01/logo-twitter-icon-symbol-0.png" width="50px" alt="ALT"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
          state.authuser ?
          <>
        <li className="nav-item">
        <Link className="nav-link active" to="/Home">Home <i className="fas fa-home"></i></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/Mytweets">My Tweets <i className="fab fa-twitter"></i></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/Profile">Profile <i className="fas fa-users"></i></Link>
        </li>
          </>
          :
          <>
        <li className="nav-item">
        <Link className="nav-link active" to="/signup">Signup <i className="fas fa-user-plus"></i></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/signin">Signin <i className="fas fa-sign-in-alt"></i></Link>
        </li>

          </>
        }
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}
export default Navbar;