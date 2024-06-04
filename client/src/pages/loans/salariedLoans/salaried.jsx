import React from 'react'
import "./salaried.css"
import { Layout } from 'antd'

const salaried = () => {
  return (
    <Layout>
    <div class="container">
      <div className="business-container row">
            <div className="" id='business'>
                <div class="col">
                <img />
                <h1 className="text-center">Salaried Loans</h1>
                <ul>
                  <h4>Terms</h4>
                  <ol>
                    <li>Interest rate of 26.4% per year. </li>
                    <li>Loan application and insurance of 4 %.</li>
                  </ol><br></br>
                  <h4>Purpose</h4>
                  <ul>
                    <li>. The product will give an opportunity to employees to further education, own property and improve their livelihood. The loans under this product will be paid through check off system together with savings.</li>
                  </ul>
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
                  <label>Are you a Brighter-World Programme Account Holder</label>
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

export default salaried;