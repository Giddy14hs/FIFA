import React from 'react'
import "./footer.css"

const footer = () => {
  return (
    <div id="footer"  >
        <footer style={{width: "100vh"}} class="py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="firstComment">
                  <h2>Follow Us</h2>
                  <p>Stay connected with us and be part of a global movement empowering individuals through financial inclusion. By following us on social media, you'll receive the latest updates on our projects, success stories, and opportunities to get involved. Join our community and see how microfinance is transforming lives every day.</p>
                </div>
                <div class="social-d-flex flex-row py-5">
                  <a href="#"><i class="fa-brands fa-twitter p-2 m-2"></i></a>
                  <a href="#"><i class="fa-brands fa-facebook p-2"></i></a> 
                  <a href="#"><i class="fa-brands fa-instagram p-2"></i></a>
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
                      <input type="email" class="py-2" />
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
    </div>
  )
}

export default footer;