//import { Layout } from "antd"
import "./Home.css";
import image2 from "../../images/image2.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";




const Home = () => {
  return (
    <div>
        <div className="navbarHeader">
          <header id="header">
            <div class="overlay">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1 class="display-4">BRIGHTER WORLD</h1>
                    <p class="text-muted">Brighter world is a company registered under companies Act in May 2016 as limited by guarantee. Its main aim is to build capacity of small entrepreneurs to realize their full potential through trainings and affordable credit hence financial inclusion. Financial inclusion is defined as the provision of “a full suite of quality financial services, provided at affordable prices, in a convenient manner, and with dignity for the clients”</p>
  
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="Ourwork">
          <section id="work" class="py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h1>Our Work</h1>
                  <p class="text-muted">To build capacity of small entrepreneurs to realize their full potential through trainings and affordable credit</p>
                </div>
                <div class="col-md-6 text-center mx-auto">
                    <a href="#" class="video" data-image="images/image1.jpg"
                  data-toggle="modal" data-target="#firstModal"><i class="fa-solid fa-play fa-3x"></i></a>
                </div>
              </div>
            </div>
          </section>
          <div id="firstModal"class="modal fade" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>Close
                  </button>
                  <iframe src="images/modalVideo.mp4" width="100%" height="400"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products">
          <section id="product" class="mt-5 pb-5">
          <div className="container">
            <div className="row">
            <h1 className="choose">Why Choose Us</h1>
              <div class="col-md-4 pb-5">
               <div class="card text-center pt-3">
                <div class="card-img">
                <img src={image2} class="img-fluid my-3" style={{width:"200px;", height: "150px"}}  alt=""/>
                </div>
              <div className="card-body">
                <h3>Accessible Financing</h3>
                <p> Our microloans are designed to be accessible to everyone, including those who may not qualify for traditional bank loans.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5">
            <div class="card text-center pt-3">
              <div class="card-img">
                <img src= {image4 }class="img-fluid my-3" style={{width:"200px;", height: "150px"}} alt=""/>
              </div>
              <div class="card-body">
                <h3>Personalized Service</h3>
                <p>We work closely with our clients to understand their needs and provide customized financial solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5">
            <div class="card text-center pt-3">
              <div class="card-img">
                <img src={image5} class="img-fluid my-3" style={{width:"200px;" ,height: "150px"}} alt=""/>
              </div>
              <div class="card-body">
                <h3>Community Focused</h3>
                <p>We are committed to supporting and uplifting the communities we serve.</p>
              </div>
             </div>
          </div>
        </div>
      </div>
    </section>
    </div>

    <div class="container">
     <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>

    </div>
  )
}

export default Home;