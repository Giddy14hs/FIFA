import React,{useEffect} from 'react'
import "./salaried.css"
import { Layout, Form, Input, Radio, Checkbox, Button } from 'antd'
import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Salaried = () => {

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
            <BenevolentForm/>
            </div>
        </section>
      </div>
    </div>
  </Layout>
  )
}

export default Salaried;