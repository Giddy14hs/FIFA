//import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" >NavBar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                <a class="nav-link" href="#header">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#gallery">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#carouselExampleControls">Products&Services</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#footer">Loans</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  )
}

export default Navbar;