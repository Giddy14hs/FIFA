import React, {useEffect} from 'react'
import "./individual.css"
import { Layout } from 'antd'
import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Individual = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForms()); 
  }, [dispatch]
  );


  return (
    <Layout>
    <div class="container">
      <div className="business-container row">
            <div className="" id='business'>
                <div class="col">
                <img />
                <h2 className="text-center">Individual Loans</h2>
                <ul>
                  <h4>Features</h4>
                  <ol>
                    <li>Raise the value of pledges to 200% of loan amount. </li>
                    <li>The applicant must have two guarantors.</li>
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
            <BenevolentForm />
            </div>
        </section>
      </div>
    </div>
  </Layout>
  )
}

export default Individual;