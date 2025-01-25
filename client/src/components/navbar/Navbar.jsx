import "./Navbar.css"
import {Link, useNavigate} from "react-router-dom"
import {HashLink} from "react-router-hash-link"
import { useDispatch, useSelector } from "react-redux"
import image17 from "../../images/image17.jpg"
import {logout} from "../../actions/authentication.js"

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const user = useSelector((state) => state.authentication.authData) || JSON.parse(localStorage.getItem('profile'));;

  console.log(user);
  
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("profile"); // Clear localStorage
    navigate('/login');
  };
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-warning ">
      <div class="container-fluid">
        <iframe src={image17} title="Logo" type="PDF" style={{width: "50px", height: "50px"}} scrolling="auto"/>
      <a class="navbar-brand" href="#"><b></b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" aria-current="page" to="/">Home</Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#work">Our Work</a></li>
            <li><a class="dropdown-item" href="#product">Why Choose Us</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" aria-current="page"  data-bs-toggle="dropdown" to="/about">About</Link>
          <ul class="dropdown-menu">
          <li><HashLink className="dropdown-item" to="/about#us">About Us</HashLink></li>
          <li><Link className="dropdown-item" to="/branches">Our Branches</Link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" to="/products" aria-expanded="false" aria-current="page">
            Products&Services
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownProducts">
                  <li><Link className="dropdown-item" to="products/businessloans">Business Loans</Link></li>
                  <li><Link className="dropdown-item" to="/msingiloans">Msingi Loans</Link></li>
                  <li><Link className="dropdown-item" to="products/salariedloans">Salaried Loans</Link></li>
                  <li><Link className="dropdown-item" to="products/grouploans">Group Loans</Link></li>
                  <li><Link className="dropdown-item" to="products/individualloans">Individual Loans</Link></li>
                  <li><Link className="dropdown-item" to="products/specialloans">Special Loans</Link></li>
                  <li><Link className="dropdown-item" to="products/savingsplan">Savings Plan</Link></li>
                  <li><Link className="dropdown-item" to="products/benevolentfund">Benevolent Fund</Link></li>
                </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" to="/careers" role="button" aria-expanded="false" aria-current="page">
            Careers
          </Link>
            </li>
            <li className="nav-item">
            {user ? (
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;