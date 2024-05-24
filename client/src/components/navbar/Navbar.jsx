import "./Navbar.css"
import {Link} from "react-router-dom"
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
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/about">About</Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mission</a></li>
            <li><a class="dropdown-item" href="#">Vision</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products&Services
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#mission">Missions</a></li>
            <li><a class=" dropdown-item" href="#">Visions</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/careers" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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