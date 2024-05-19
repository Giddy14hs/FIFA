import { Layout } from "antd"
import "./Home.css";
import image2 from "../../images/image2.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image8 from "../../images/image8.pdf"

const {Footer} = Layout;

const Home = () => {
  return (
    <div>
      <Layout>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <object data={image8} type="application/pdf" width="80" height="80" class="d-inline-block align-text-top"></object>
            BRIGHTER-WORLD
          </a>
        </div>
      </nav>
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
          <div class="container">
            <div class="row">
            <h2>Why Choose Us</h2>
              <div class="col-md-4">
               <div class="card text-center pt-3">
                <div class="card-img">
                <img src={image2} class="img-fluid my-3" style={{width:"200px;", height: "150px"}}  alt=""/>
                </div>
              <div class="card-body">
                <h3>Accessible Financing</h3>
                <p> Our microloans are designed to be accessible to everyone, including those who may not qualify for traditional bank loans.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
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
          <div class="col-md-4">
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
    </Layout>
    <Footer>
    <footer id="footer" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="firstComment">
              <h2>Follow Us</h2>
              <p>Stay connected with us and be part of a global movement empowering individuals through financial inclusion. By following us on social media, you'll receive the latest updates on our projects, success stories, and opportunities to get involved. Join our community and see how microfinance is transforming lives every day.</p>
            </div>
            <div class="social-d-flex flex-row">
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-facebook"></i></a> 
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="second content">
              <h2>Contact Us</h2>
              <form class="" action="index.html" method="post">
                <div class="email">
                  <div class="text-py-2">
                    Email*
                  </div>
                  <input type="email" class="py-2" value="email" />
                </div>
              <div class="msg">
                <div class="text-py-2">
                  Message*
                </div>
                <textarea name="name" rows="2" cols="30"></textarea>
                </div>
                <div class="btn">
                  <button type="submit" name="button">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="firstInquiry">
              <h2>General Inquiries</h2>
              <p>Monday to Friday</p>
              <p>8.00am - 5:00pm</p>
              <p>Call: 0720328587 or 0103228576</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="firstComment">
              <h2>FIND US</h2>
              <p>BRIGHTER WORLD LTD</p>
              <p>P.O BOX 6332-00300</p>
              <p>NAIROBI/KENYA</p>
              <p>Email: brighterworld22@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </Footer>
    </div>
  )
}

export default Home;