import "./Navbar.css"
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"
import image17 from "../../images/image17.jpg"

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-warning ">
      <div class="container-fluid">
        <img src={image17} alt="" style={{width: "100px", height: "100px"}}/>
      <a class="navbar-brand" href="#"><b>BRIGHTER-WORLD PROGRAMME</b></a>
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
          <li><HashLink className="dropdown-item" to="/about#mission">Mission</HashLink></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" to="/products" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
            Products&Services
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownProducts">
                  <li><Link className="dropdown-item" to="/businessloans">Business Loans</Link></li>
                  <li><Link className="dropdown-item" to="/msingiloans">Msingi Loans</Link></li>
                  <li><Link className="dropdown-item" to="/salariedloans">Salaried Loans</Link></li>
                  <li><Link className="dropdown-item" to="/grouploans">Group Loans</Link></li>
                  <li><Link className="dropdown-item" to="/individualloans">Individual Loans</Link></li>
                  <li><Link className="dropdown-item" to="/specialloans">Special Loans</Link></li>
                  <li><Link className="dropdown-item" to="/savingsplan">Savings Plan</Link></li>
                  <li><Link className="dropdown-item" to="/benevolentfund">Benevolent Fund</Link></li>
                </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" to="/careers" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
            Careers
          </Link>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
              </ul>
            </li>
          </ul>
              <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;