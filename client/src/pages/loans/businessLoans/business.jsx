import React, {useEffect} from 'react'
import "./business.css"
import {Layout} from "antd"
import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Business = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForms()); 
  }, [dispatch]
  );

  return (
    <Layout>
      <div class="container">
        <div className=" business-container ">
              <div className="col-md-6" id='business'>
                  <img />
                  <h2 className="text-center">Business Loans</h2>
                  <ul>
                    <h4>Benefits</h4>
                    <ol>
                      <li>Provides a client with the needed capital to stabilize and/or expand an existing business and grow an income as means to support themselves and their family. </li>
                      <li>Allows members of the community to take initiative, empower themselves, become self-reliant and improve their quality of life.</li>
                    </ol><br></br>
                    <h4>Purpose</h4>
                    <ul>
                      <li>Would include loans to acquire a tangible asset such as a jiko, refrigerator, or furniture that would be used within the business context </li>
                    </ul>
                  </ul>
                  </div>
              <div className="col-md-6">
                <section className='form-section'>
                  <h4>Interested in this product??</h4>
                  <b>Fill the form below</b>
                    <div>
                      <BenevolentForm/>
                    </div>
                </section>
                </div>
        </div>
      </div>
    </Layout>
  )
};

export default Business;