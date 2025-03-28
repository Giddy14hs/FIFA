import React,{useEffect} from 'react'
import "./benevolent.css"
import { Layout } from 'antd'
//import { getForms} from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Benevolent = () => {

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
                <h2 className="text-center">Benevolent Fund</h2>
                <ul>
                  <h4>Terms</h4>
                  <ol>
                    <li>The cover will be effective after 3 month of contribution by groups.</li><br></br>
                    <li>Every member contributes 200/at the end of each month and banked under group name </li><br></br>
                    <li>The cover is under the group.</li>
                  </ol><br></br>
                </ul>
                
            </div>
      </div>
      <div class=".g-col-2">
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

export default Benevolent;