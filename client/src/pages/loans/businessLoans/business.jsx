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
        <div class="grid text-center">
          <div className="row business-container">
                <div className=".g-col-2" id='business'>
                    <img />
                    <h2 className="animate-hover animate__animated animate__rollIn animate__delay-1s">Business Loans</h2>
                    <ul>
                      <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Benefits</h4>
                      <ol>
                        <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Provides a client with the needed capital to stabilize and/or expand an existing business and grow an income as means to support themselves and their family. </li>
                        <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Allows members of the community to take initiative, empower themselves, become self-reliant and improve their quality of life.</li>
                      </ol><br></br>
                      <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Purpose</h4>
                      <ul>
                        <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Would include loans to acquire a tangible asset such as a jiko, refrigerator, or furniture that would be used within the business context </li>
                      </ul>
                    </ul><br></br><br></br>
                </div>
                <div class=".g-col-2">
                  <section className='form-section'>
                    <h4 className="animate-hover animate__animated animate__flash animate__delay-2s">Interested in this product??</h4>
                    <b className="animate-hover animate__animated animate__heartBeat animate__delay-3s">Fill the form below</b>
                      <div>
                        <BenevolentForm/>
                      </div>
                  </section>
                  </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Business;