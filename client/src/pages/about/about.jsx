import { Layout } from "antd";
import "./About.css";
import image7 from "../../images/image7.jpg"
import image8 from "../../images/image8.jpg"
import "animate.css"
import Lottie, {LottieRefCurrentProps} from "lottie-react"
import animation1 from "../../animations/Animation - 1719585171252.json"
import animation2 from "../../animations/Animation - 1719585477393.json"
import animation3 from "../../animations/Animation - 1719585824280.json"
import animation4 from "../../animations/Animation - 1719585904103.json"
import animation5 from "../../animations/Animation - 1719657256682.json"
import animation6 from "../../animations/Animation - 1719657293798.json"
import { useRef, useEffect } from "react";


const About = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  const handleComplete = ()=>{
    if (lottieRef.current){
      lottieRef.current.goToAndPlay(45, true)
    }
  }

  useEffect(() => {
    const handleMouseEnter = (index) => {
      if (lottieRef.current[index]) {
        lottieRef.current[index].play();
      }
    };

    const handleMouseLeave = (index) => {
      if (lottieRef.current[index]) {
        lottieRef.current[index].stop();
      }
    };

    const elements = document.querySelectorAll(".small-lottie");

    elements.forEach((element, index) => {
      element.addEventListener("mouseenter", () => handleMouseEnter(index));
      element.addEventListener("mouseleave", () => handleMouseLeave(index));
    });

    return () => {
      elements.forEach((element, index) => {
        element.removeEventListener("mouseenter", () => handleMouseEnter(index));
        element.removeEventListener("mouseleave", () => handleMouseLeave(index));
      });
    };
  }, []);

  return (
    <div className='about'>
      <Layout>
      <section id="us" class="py-5">
            <div class="container">
              <div class="row about">
              <h1 class="text-center" className="animate__animated animate__heartBeat">About Us</h1>
                <div class="col-md-12 text-center py-5 mb-4">
                  <h3 class="animate__animated animate__fadeInDown animate__delay-1s">Empowering Lives Through Financial Inclusion</h3>
                  <p className="animate__animated animate__zoomIn">At Brighter World, we believe that everyone deserves access to the financial resources they need to improve their lives. Our mission is to empower individuals and communities by providing affordable microfinance services that foster economic growth and development.</p>
                </div>
                <div className="col-md-12 text-center mt-5 mb-5 ">
                  <h3 class="animate__animated animate__fadeInDown animate__delay-1s">Who We Are</h3>
                  <p className="animate__animated animate__zoomIn">Founded in 2017, Brighter World is a dedicated team of professionals and volunteers committed to making a positive impact in underserved communities. With a focus on sustainable development, we provide microloans, financial education, and support to entrepreneurs, small businesses, and individuals who lack access to traditional banking services.</p>
                </div>
                <div class="col-md-12 text-center mt-5 mb-5 ">
                  <h3 className="animate__animated animate__fadeInDown animate__delay-1s">What We Do</h3>
                  <ul>
                    <li className="animate__animated animate__zoomIn">Microloans: We offer small, affordable loans to help individuals start or expand their businesses, invest in education, or improve their living conditions. Our loans are designed to be accessible and tailored to meet the specific needs of our clients.</li>
                    <li className="animate__animated animate__zoomIn">Financial Education: Empowering our clients with the knowledge and skills to manage their finances effectively is at the core of our mission. We provide workshops, one-on-one coaching, and resources to help them make informed financial decisions.</li>
                    <li className="animate__animated animate__zoomIn">Support Services: Beyond financial assistance, we offer a range of support services including business mentoring, market access, and community-building activities to ensure our clients succeed and thrive.</li>
                  </ul>
                </div>
                <div class="col-md-12 text-center">
                  <h3 className="animate__animated animate__fadeInDown animate__delay-2s">Our Impact</h3>
                  <p className="animate__animated animate__zoomIn">Since our inception, we have helped thousands of individuals achieve their financial goals and improve their quality of life. Our clients' success stories are a testament to the transformative power of microfinance. By fostering entrepreneurship and self-reliance, we are creating lasting change and contributing to the overall economic development of the communities we serve.</p>
                </div>
              </div>
            </div>
          </section>
          <section>
          <div className="values container">
            <div className="ui grid row mt-5">
              <h1 className="core text-center py-3 mb-5 animate__animated animate__fadeInDown animate__delay-2s" >Core Values</h1>
              <div className="col-md-4 text-center mb-5">
                <Lottie onComplete={handleComplete}  className="small-lottie" lottieRef={(ref)=> (lottieRef.current[0] = ref)} animationData={animation5}/>
                <h3 class="mt-3" className="animate__animated animate__jackInTheBox animate__delay-2s">Transparency</h3>
                <p className="animate__animated animate__zoomIn animate__delay-1s"><b>At the heart of our operations is transparency. </b>We believe that open communication and clear information are crucial in building strong relationships. By being transparent in our dealings, we ensure that our customers, partners, and team members always have a complete and accurate understanding of our processes, decisions, and actions. This commitment to openness fosters trust and accountability at every level of our organization.</p>
              </div>
              <div className="col-md-4 text-center mb-5">
              <Lottie  className="small-lottie" lottieRef={(ref) => (lottieRef.current[1] = ref)} animationData={animation2}/>
                <h3 class="mt-3" className="animate__animated animate__jackInTheBox animate__delay-3s">Integrity</h3>
                <p className="animate__animated animate__zoomIn animate__delay-1s"><b>We uphold the highest standards of integrity and transparency in all our operations.</b>Trust is the foundation of our relationships with clients, partners, and stakeholders. We are committed to operating with honesty, accountability, and ethical practices, ensuring that our actions consistently reflect our values and mission.</p>
              </div>
              <div className="col-md-4 text-center mb-5">
              <Lottie
               className="small-lottie"
               lottieRef={(ref) => (lottieRef.current[2] = ref)} 
              loop={false}
              animationData={animation6}/>
                <h3 class="mt-3" className="animate__animated animate__jackInTheBox animate__delay-4s">Inclusivity</h3>
                <p className="animate__animated animate__zoomIn animate__delay-1s"><b>We are dedicated to promoting financial inclusion for all, regardless of background or circumstances.</b>We strive to reach underserved and marginalized populations who lack access to traditional financial services. Our goal is to create equitable opportunities for everyone to participate in and benefit from economic growth, fostering a more inclusive and just society.</p>
              </div>
              <div className="col-md-4 text-center mb-5">
              <Lottie
               className="small-lottie"
               lottieRef={(ref) => (lottieRef.current[3] = ref)} animationData={animation4}/>
                <h3 class="mt-3" className="animate__animated animate__jackInTheBox animate__delay-5s">Teamwork</h3>
                <p className="animate__animated animate__zoomIn animate__delay-1s"><b>Success is a collective effort.</b>Our dedication to teamwork means we value the diverse skills, ideas, and perspectives each team member brings. We strive to create a collaborative environment where everyone can contribute, learn, and grow. By working together towards common goals, we achieve more and celebrate our victories as one united team.</p>
              </div>
              <div className="col-md-4 text-center mb-5">
              <Lottie  className="small-lottie" lottieRef={(ref) => (lottieRef.current[4] = ref)} animationData={animation2}/>
                <h3 class="mt-3" className="animate__animated animate__jackInTheBox animate__delay-5s">Trustworthiness</h3>
                <p className="animate__animated animate__zoomIn animate__delay-1s"><b>Trust is the foundation of all meaningful relationships.</b>We are committed to being reliable, honest, and ethical in all our interactions. Our promise is to uphold the highest standards of integrity and professionalism, ensuring that our customers and partners can always count on us. By consistently delivering on our commitments, we earn and maintain the trust of those we serve.</p>
              </div>
              <div className="col-md-4 text-center mb-5">
              <Lottie  className="small-lottie" lottieRef={(ref) => (lottieRef.current[5] = ref)} animationData={animation3}/>
                <h3 class="mt-3" className="animate__animated animate__jackInTheBox animate__delay-5s">Customer-Oriented</h3>
                <p className="animate__animated animate__zoomIn animate__delay-1s"><b>Our customers are at the core of everything we do.</b>We are dedicated to understanding their needs and exceeding their expectations. By prioritizing customer satisfaction and delivering personalized experiences, we build long-lasting relationships that are based on mutual respect and value. Our goal is to be not just a service provider, but a trusted partner in our customers' success.</p>
              </div>
            </div>
          </div>
          </section>
          <section id="mission">
            <div class="container-fluid mx-auto">
                <div  class="mission text-center">
                  <h1 className="animate__animated animate__zoom Inanimate__delay-5s">Our Mission</h1>
                  <p className="animate__animated animate__zoomIn animate__delay-4s">To   provide micro, small and medium entrepreneurs with the wherewithal to manage their financial resources efficiently through economic empowerment, capacity building and business Advisory services so as to improve the quality of their lives.</p>
                </div>
            </div>
          </section>

          <section id="vision">
            <div class="container-fluid text-center">
              <h1 class="vision text-center animate__animated animate__fadeInDown animate__delay-5s">Our Vision</h1>
              <p className="animate__animated animate__zoomIn animate__delay-4s">To empower the entrepreneurs to take greater control of their business by increasing opportunities for making productive and informed economic investments.</p>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row">
                <h1 className="animate__animated animate__fadeInDown animate__delay-5s">DIRECTORS</h1>
                <div class="col-md-6 text-center">
                  <img class="w-50 h-50 rounded-circle" src={image7}  alt="image7" />
                  <p>Esther Lemeta</p>
                  <b>CEO BRIGHTER WORLD</b>
                  <p>As the CEO of Brighter World, it is my honor to introduce you to our mission and the work we are passionate about. Our organization is dedicated to transforming lives and communities through innovative and accessible microfinance solutions.</p>
                </div>
                <div class="col-md-6 text-center">
                  <img class="w-50 h-50 rounded-circle" src={image8} alt="" />
                  <p>Gideon Lemiso</p>
                  <b>Project Manager/Leading Developer</b>
                  <p>Welcome to my corner of the digital world! I'm Gideon, a seasoned software developer with a passion for crafting elegant solutions to complex problems. With years of experience in the industry, I've had the privilege of working on a diverse range of projects, from small-scale applications to large-scale enterprise systems.</p>
                </div>
              </div>
            </div>
          </section>
      </Layout>
    </div>
  )
}

export default About;