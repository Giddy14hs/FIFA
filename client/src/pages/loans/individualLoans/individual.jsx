import React, {useEffect} from 'react'
import "./individual.css"
import { Layout } from 'antd'
//import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Individual = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  //  dispatch(getForms()); 
  }, [dispatch]
  );


  return (
    <Layout>
    <div class="container">
      <div className="business-container row">
            <div className=".g-col-2" id='business'>
                <h2 className="animate-hover animate__animated animate__rollIn animate__delay-1s">Individual Loans</h2>
                <ul>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Features</h4>
                  <ol>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Raise the value of pledges to 200% of loan amount. </li>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">The applicant must have two guarantors.</li>
                  </ol><br></br>
                </ul>
            </div>
            <div class=".g-col-2">
              <section className='form-section'>
                <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Interested in this product??</h4>
                <b className="animate-hover animate__animated animate__heartBeat animate__delay-3s">Fill the form below</b>
                <div>
                  <BenevolentForm />
                </div>
              </section>
            </div>
      </div>
    </div>
  </Layout>
  )
}

export default Individual;