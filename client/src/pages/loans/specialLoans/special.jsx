import React from 'react'
import "./special.css"
import { Layout } from 'antd'

const special = () => {
  return (
    <Layout>
    <div class="container">
      <div className="business-container row">
            <div className="" id='business'>
                <div class="col">
                <img />
                <h1 className="text-center">Special Loans</h1>
                <ul>
                  <h4>All special loans will be serviced for a maximum of 3 months.</h4>
                  <ol>
                    <li>Clients will have serviced 1st loans. </li>
                    <li>All special loans should have a separate savings from business loans.</li>
                    <li>Be of good standing with the group.</li>
                  </ol><br></br>
                  </ul>
                </div>
            </div>
      </div>
      <div class="p-2 col">
        <section className='form-section'>
          <h4>Interested in this product??</h4>
          <b>Fill the form below</b>
            <div>
              <form class="form-control">
                <div class="form-group">
                  <label for="name"> Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter Name" required/>
                </div>
                
                <div class="form-group">
                  <label>Are you a Brighter-World Programme Account Holder</label><br></br>
                    <label><input type="radio" name="true" value="" required/>Yes</label>
                    <label><input type="radio" name="true" value=""/> No</label>
                </div>

                <div class="form-group">
                  <label for="email">E-mail</label>
                  <input type="email" id="email" name="email" placeholder="Enter E-mail" required/>
                </div>
                

                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter Phone" required/>
                </div>
                

                <div class="form-group">
                  <label><input type="checkbox" name="terms" required/> I Agree to the Terms of use</label>
                </div>
                

                <div class="buttons">
                    <input type="submit" value="Submit" class="submit"/>
                    <input type="button" value="Cancel" class="cancel"/>
                </div>
              </form>
            </div>
        </section>
      </div>
    </div>
  </Layout>
  )
}

export default special;