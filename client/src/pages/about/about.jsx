import { Layout } from "antd";
import "./About.css";
import image7 from "../../images/image7.jpg"
import image8 from "../../images/image8.jpg"
import { Footer } from "antd/es/layout/layout";

const About = () => {
  return (
    <div className='about'>
      <Layout>
      <section id="about" class="py-5">
            <div class="container">
              <div class="row">
              <h1 class="text-center">About Us</h1>
                <div class="col-md-12 text-center py-5">
                  <h3>Empowering Lives Through Financial Inclusion</h3>
                  <p>At Brighter World, we believe that everyone deserves access to the financial resources they need to improve their lives. Our mission is to empower individuals and communities by providing affordable microfinance services that foster economic growth and development.</p>
                </div>
                <div class="col-md-12 text-center">
                  <h3>Who We Are</h3>
                  <p>Founded in 2017, Brighter World is a dedicated team of professionals and volunteers committed to making a positive impact in underserved communities. With a focus on sustainable development, we provide microloans, financial education, and support to entrepreneurs, small businesses, and individuals who lack access to traditional banking services.</p>
                </div>
                <div class="col-md-12 text-center">
                  <h3>What We Do</h3>
                  <ul>
                    <li>Microloans: We offer small, affordable loans to help individuals start or expand their businesses, invest in education, or improve their living conditions. Our loans are designed to be accessible and tailored to meet the specific needs of our clients.</li>
                    <li>Financial Education: Empowering our clients with the knowledge and skills to manage their finances effectively is at the core of our mission. We provide workshops, one-on-one coaching, and resources to help them make informed financial decisions.</li>
                    <li>Support Services: Beyond financial assistance, we offer a range of support services including business mentoring, market access, and community-building activities to ensure our clients succeed and thrive.</li>
                  </ul>
                </div>
                <div class="col-md-12 text-center">
                  <h3>Our Impact</h3>
                  <p>Since our inception, we have helped thousands of individuals achieve their financial goals and improve their quality of life. Our clients' success stories are a testament to the transformative power of microfinance. By fostering entrepreneurship and self-reliance, we are creating lasting change and contributing to the overall economic development of the communities we serve.</p>
                </div>
              </div>
            </div>
          </section>
          <section>
          <div class="container">
            <div class="row mt-5">
              <h1 class="text-center py-3">Core Values</h1>
              <div class="col-md-4 text-center">
                <i class="fa-brands fa-odnoklassniki fa-4x"></i>
                <h3 class="mt-3">Empowerment</h3>
                <p><b>We believe in empowering individuals to achieve financial independence and self-sufficiency.</b>Through our microfinance services, we provide the tools, resources, and support necessary for individuals to take control of their financial future. By fostering entrepreneurship and self-reliance, we help our clients build sustainable livelihoods and create lasting change in their communities.</p>
              </div>
              <div class="col-md-4 text-center">
                <i class="fa-solid fa-rocket fa-4x"></i>
                <h3 class="mt-3">Integrity</h3>
                <p><b>We uphold the highest standards of integrity and transparency in all our operations.</b>Trust is the foundation of our relationships with clients, partners, and stakeholders. We are committed to operating with honesty, accountability, and ethical practices, ensuring that our actions consistently reflect our values and mission.</p>
              </div>
              <div class="col-md-4 text-center">
                <i class="fa-solid fa-comment-dots fa-4x"></i>
                <h3 class="mt-3">Inclusivity</h3>
                <p><b>We are dedicated to promoting financial inclusion for all, regardless of background or circumstances.</b>We strive to reach underserved and marginalized populations who lack access to traditional financial services. Our goal is to create equitable opportunities for everyone to participate in and benefit from economic growth, fostering a more inclusive and just society.</p>
              </div>
            </div>
          </div>
          </section>
          <section>
            <div class="container-fluid mx-auto">
                <div class=" text-center">
                  <h1>Our Mission</h1>
                  <p>At Brighter World, our mission is to empower underserved communities through accessible and sustainable financial services. We aim to:</p>
                  <ol class="text-center">
                    <li><b>Promote Financial Inclusion:</b>Provide affordable microloans and financial education to individuals and small businesses who lack access to traditional banking, enabling them to achieve financial stability and independence.</li>
                    <li><b>Foster Economic Growth:</b>Support entrepreneurship and small business development by offering the necessary resources and mentorship to help our clients grow and succeed, thereby contributing to the overall economic development of their communities.</li>
                    <li><b>Enhance Quality of Life: </b>Improve the living conditions of our clients by enabling them to invest in their education, health, and housing, ensuring a better future for themselves and their families.</li>
                  </ol>
                  <p>Through our commitment to these goals, we strive to create a world where everyone has the opportunity to thrive financially and contribute to the prosperity of their communitie</p>
                </div>
            </div>
          </section>

          <section>
            <div class="container-fluid text-center">
              <h1 class="text-center">Our Vision</h1>
              <p>At Brighter World, we envision a future where technology is leveraged to create positive change and empower individuals and businesses worldwide. Our vision is shaped by three core principles:</p>
              <ol>
                <li><b>Innovation:</b> We strive to be at the forefront of technological innovation, constantly pushing boundaries and exploring new possibilities. By embracing emerging technologies and creative thinking, we aim to develop cutting-edge solutions that address the evolving needs of our clients and society as a whole.</li>
                <li><b>Empowerment:</b>We believe in the transformative power of technology to empower individuals and businesses to reach their full potential. Whether it's through streamlined processes, enhanced productivity, or expanded opportunities, we seek to empower our clients to achieve their goals and unlock new opportunities for growth and success.</li>
                <li><b>Impact: </b> Ultimately, our vision is driven by a desire to make a meaningful impact on the world around us. We measure our success not just by the projects we deliver, but by the positive outcomes we enable for our clients and communities. Whether it's driving social change, advancing environmental sustainability, or fostering economic development, we are committed to using technology as a force for good.</li>
              </ol>
              <p>By staying true to these principles, we are working towards a future where technology is not just a tool, but a catalyst for positive change and human progress. Join us on this journey as we strive to create a better, brighter future for all.</p>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row">
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
                  <input type="email" class="py-2" name="" value=""/>
                </div>
              <div class="msg">
                <div class="text-py-2">
                  Message*
                </div>
                <textarea name="name" rows="2" cols="30"></textarea>
                </div>
                <div class="btn">
                  <button type="submit" name="button"></button>
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
          <div class="col-md-4 text-center">
            <h2>BRANCHES</h2>
            <ol>
              <li>
              <div class="firstComment">
                <p>KARIOBANGI OFFICE</p>
                <p>COOPERATIVE BANK</p>
                <p>BUILDING, 1ST FLOOR</p>
                <p>TEL: 0753666303 or 0771850408</p>
            </div>
              </li>
              <li>
              <div class="firstComment">
                <p>KITENGELA OFFICE</p>
                <p>PENA TOWERS BUILDING ALONG KAJIADO RD</p>
                <p>TEL: 0720328587 or 0103228576</p>
            </div>
              </li>
              <li>
              <div class="firstComment">
                <p>KISUMU BRANCH</p>
                <p>ALMIRAN PLAZA</p>
                <p>NYAMASARIA</p>
                <p>ALONG KISUMU NAIROBI HIGHWAY</p>
                <p>TEL: 0726937367</p>
            </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
      </Footer>
    </div>
  )
}

export default About;