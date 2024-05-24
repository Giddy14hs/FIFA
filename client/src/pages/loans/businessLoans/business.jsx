import React from 'react'
import "./business.css"
import {Layout} from "antd"


const business = () => {
  return (
    <div>
      <Layout>
      <section>
        <div class="container" id='business'>
          <div class="row">
        <img />
        <h2 class="text-center">Business Loans</h2>
        <ul>
          <h4>Benefits</h4>
          <ol>
            <li class="col-md-6">Provides a client with the needed capital to stabilize and/or expand an existing business and grow an income as means to support themselves and their family. </li>
            <li class="col-md-6">Allows members of the community to take initiative, empower themselves, become self-reliant and improve their quality of life.</li>
          </ol>
        </ul>
        </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <h4>Benefits Include</h4>
          </div>
        </div>
      </section>
      </Layout>
    </div>
  )
}

export default business;