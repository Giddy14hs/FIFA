//import { Layout } from "antd"
import "./Home.css";
import image18 from "../../images/image18.jpg";
import image19 from "../../images/image19.png";
import image20 from "../../images/image20.png";
import image2 from "../../images/image2.jpg"
import image4 from "../../images/image4.jpg"
import image5 from "../../images/image5.jpg"
import ScrollAnimation from '../../components/ScrollAnimation'

const Home = () => {
  return (
    <div id="media">
        <div className="navbarHeader">
          <header id="header">
            <div class="overlay">
              <div class="container">
                <div class="row text-center">
                  <ScrollAnimation>
                    <div class="col">
                      <h1 class="display-4" className="animate-hover animate__animated animate__flipInX animate__delay-2s">BRIGHTER WORLD</h1>
                      <p class="text-muted" className="animate-hover animate__animated animate__bounce animate__delay-1s">Brighter world is a company registered under companies Act in May 2016 as limited by guarantee. Its main aim is to build capacity of small entrepreneurs to realize their full potential through trainings and affordable credit hence financial inclusion. Financial inclusion is defined as the provision of "a full suite of quality financial services, provided at affordable prices, in a convenient manner, and with dignity for the clients"</p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="Ourwork">
          <section id="work" class="py-5">
            <div class="container">
              <div class="row">
                <ScrollAnimation delay={0.2}>
                  <div class="col-md-12 text-center">
                    <h1 className="animate-hover animate__animated animate__rotateIn animate__delay-2s">Our Work</h1>
                    <p class="text-muted" className="animate-hover animate__animated animate__flip animate__delay-3s">To build capacity of small entrepreneurs to realize their full potential through trainings and affordable credit</p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.4}>
                  <div class="col-md-6 text-center mx-auto">
                    <a class="video" data-image="images/image1.jpg"
                      data-toggle="modal" data-target="#firstModal"><i class="fa-solid fa-play fa-3x"></i></a>
                  </div>
                </ScrollAnimation>
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
            <h1 class="choose" className="animate-hover animate__animated animate__wobble animate__delay-1s">Why Choose Us</h1>
              <div class="col-md-4 pb-5">
               <div class="card text-center pt-3">
                <div class="card-img">
                <img src={image2} class="img-fluid my-3" style={{width:"200px;", height: "150px"}}  alt=""/>
                </div>
              <div className="card-body">
                <h3 className="animate-hover animate__animated animate__bounceInLeft animate__delay-3s">Accessible Financing</h3>
                <p className="animate__animated animate__bounceInRight animate__delay-4s"> Our microloans are designed to be accessible to everyone, including those who may not qualify for traditional bank loans.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5">
            <div class="card text-center pt-3">
              <div class="card-img">
                <img src= {image4 }class="img-fluid my-3" style={{width:"200px;", height: "150px"}} alt=""/>
              </div>
              <div class="card-body">
                <h3 className="animate-hover animate__animated animate__bounceInLeft animate__delay-3s">Personalized Service</h3>
                <p className="animate__animated animate__bounceInRight animate__delay-4s">We work closely with our clients to understand their needs and provide customized financial solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5">
            <div class="card text-center pt-3">
              <div class="card-img">
                <img src={image5} class="img-fluid my-3" style={{width:"200px;" ,height: "150px"}} alt=""/>
              </div>
              <div class="card-body">
                <h3 className="animate-hover animate__animated animate__bounceInLeft animate__delay-3s">Community Focused</h3>
                <p className="animate__animated animate__bounceInRight animate__delay-4s">We are committed to supporting and uplifting the communities we serve.</p>
              </div>
             </div>
          </div>
        </div>
      </div>
    </section>
    </div>

     <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image18} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h5>LEUGADIA AWINO</h5>
        <p>As a young girl she always harbored a passion for dress making.She saved money and a cquired her first machine and started off her dream business.Her husband a wildlife office working in Kitale saw her passion and helped her in aquiring additional machine.With all the necessary machines and tools for work ,her biggest challenge was stock (materials). Immediately after joining Brighter World, she got some training from credit officer and by the time she was through with the training she had qualified to take her first loan of Ksh.15,000. She has used this money to buy material for her business which she says is now fully stocked.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image19} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h5>Florence Wandia Waweru</h5>
        <p>The year 2021 October is when a friend approached her and convinced her to Join Brighter World Programme through a group i.e Murata s.h.g. Since she is a natural leader, opinion leader, other members recognized her leadership skills and elected her as their chairlady up to date. She is currently servicing her 5th loan amounting to Ksh 100,000 which she used to boost her business. She is grateful to Brighter World for boosting her working capital at the right times throughout.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image20} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h5>Peter Kasaya Wesonga</h5>
        <p>He is a welder and has successfully opened a metal /glass hardware through his stay in Brighter World which has created employment opportunity to 3 employees. He attributes his success to Brighter World through the subsequent loans of Ksh20,000 40,000, 60,000 which he has serviced.
        He is currently servicing his 4th loan amounting to Ksh 90,000 which he used to boost his business. He is grateful to Brighter World for empowering him</p>
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
  )
}

export default Home;