import React,{useEffect} from 'react'
import "./special.css"
import { Layout, Form, Input, Radio, Checkbox, Button  } from 'antd'
import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Special = () => {

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
            < BenevolentForm/>
            </div>
        </section>
      </div>
    </div>
  </Layout>
  )
}

export default Special;