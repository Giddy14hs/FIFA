import React from 'react'
import "./Careers.css"
import{Layout}from "antd"
import image24 from "../../images/image24.jpeg"

const Careers = () => {
  return (
    <div>
      <Layout>
        {/* <section className='careers'>
          <div class="container">
            <div class="col-md-12">
              <h4>Brighter world is a company registered under companies Act in May 2016 as limited by guarantee. </h4>
            </div>
          </div>
        </section> */}
        <section className="careers">
  <div className="careers-container">
    {/* Hero Section */}
    <div className="careers-hero">
      <h1>Join Our Team</h1>
      <p>
        Brighter World was established in May 2016, and we're on a mission to
        create a brighter future for everyone. Explore our open roles and grow
        with us!
      </p>
    </div>

    {/* Why Work With Us */}
    <div className="careers-why">
      <div className="careers-why-content">
        <h3>Why Join Brighter World?</h3>
        <ul>
          <li>Inclusive and collaborative work environment</li>
          <li>Opportunities for growth and professional development</li>
          <li>Competitive benefits and compensation</li>
        </ul>
      </div>
      <div className="careers-image">
        <img
          src={image24}
          alt="Team at work"
        />
      </div>
    </div>

    {/* Job Listings */}
    <div className="careers-jobs">
      <h3>Current Opportunities</h3>
      {/* <div className="careers-job">
        <h4>Frontend Developer</h4>
        <p>Location: Remote | Type: Full-Time</p>
        <button>View Details</button>
      </div>
      <div className="careers-job">
        <h4>Marketing Specialist</h4>
        <p>Location: Nairobi | Type: Part-Time</p>
        <button>View Details</button>
      </div> */}
      <div>
        <h4>No jobs available</h4>
      </div>
    </div>

    {/* Employee Testimonials */}
    <div className="careers-testimonials">
      <h3>What Our Team Says</h3>
      <div className="testimonial">
        <p>"Working here has been life-changing."</p>
        <footer>Peter Omollo</footer>
      </div>
      <div className="testimonial">
        <p>"Brighter World truly values its employees."</p>
        <footer>Emily Ouma</footer>
      </div>
    </div>

    {/* FAQs */}
    <div className="careers-faq">
      <h3>FAQs</h3>
      <div className="faq-item">
        <h4>How do I apply?</h4>
        <p>Visit our job listings above, select a role, and click "Apply Now."</p>
      </div>
      <div className="faq-item">
        <h4>What benefits do you offer?</h4>
        <p>We offer loan officer's roles, digital marketing, admin assistants and more!</p>
      </div>
    </div>

    {/* Application Button
    <div className="careers-cta">
      <button>Apply Now</button>
    </div>*/}
  </div> 
</section>
      </Layout>
    </div>
  )
}

export default Careers;