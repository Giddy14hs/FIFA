import React from 'react'
import {Layout} from "antd"
const {Footer} = Layout;

const Products = () => {
  return (
    <div>
      <Layout>
      <section id="product" class="mt-5 pb-5">
          <div class="container">
            <div class="row">
            <h2>Loan products</h2>
              <div class="col-md-4">
               <div class="card text-center pt-3">
                <div class="card-img">
                
                </div>
              <div class="card-body">
                <h3>Business Loans</h3>
                <p>A loan to grow or enhance an existing business or expand into another business venture. </p>
                <button type="button" name="button" class="btn-btn-outline-secondary px-3">Read More</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center pt-3">
              <div class="card-img">
               
              </div>
              <div class="card-body">
                <h3>Msingi Loans`(Business Start-up loans)`</h3>
                <p>A loan to start a new business for a client without an existing business but has the desire to develop their business skills to support themselves and/or their family. </p>
                <button type="button" name="button" class="btn-btn-outline-secondary px-3">Read More</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center pt-3">
              <div class="card-img">
                
              </div>
              <div class="card-body">
                <h3>Salaried Loans</h3>
                <p>This product is to cater for members of staff of private and public institution who earn low income and are in need of loans to develop themselves and their families.</p>
                <button type="button" name="button" class="btn-btn-outline-secondary px-3">Read More</button>
              </div>
             </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center pt-3">
              <div class="card-img">
                
              </div>
              <div class="card-body">
                <h3>Group Loans</h3>
                <p>	The product is for groups running successful table banking and requires money to meet its members demand. </p>
                <button type="button" name="button" class="btn-btn-outline-secondary px-3">Read More</button>
              </div>
             </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center pt-3">
              <div class="card-img">
               
              </div>
              <div class="card-body">
                <h3>Individual Loans</h3>
                <p>These are loans given to an individual who wants to expand their business and they need not to be in a group. The loans will be secured.</p>
                <button type="button" name="button" class="btn-btn-outline-secondary px-3">Read More</button>
              </div>
             </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center pt-3">
              <div class="card-img">
              </div>
              <div class="card-body">
                <h3>Special Loans</h3>
                <p>The purpose is to provide customized financial solutions that empower individuals and small businesses to achieve their unique goals. </p>
                <button type="button" name="button" class="btn-btn-outline-secondary px-3">Read More</button>
              </div>
             </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row col-md-6">
          <h3>Savings Plan</h3>
          <p>The product is for our clients, encouraging them to save for a rainy day, emergency, asset, investment or holidays and family needs.</p>
        </div>
        <div class="row col-md-6">
          <h3>Benevolent Fund</h3>
          <p>This product is to support our client in times of demise of one of nuclear family member.</p>
        </div>
      </div>
    </section>
      </Layout>
    </div>
  )
}

export default Products;