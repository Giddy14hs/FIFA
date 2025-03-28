import React,{useEffect} from 'react'
import "./salaried.css"
import { Layout } from 'antd'
//import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Salaried = () => {

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
                <div class="col">
                <h1 className="animate-hover animate__animated animate__rollIn animate__delay-1s">Salaried Loans</h1>
                <ul>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Terms</h4>
                  <ul>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Interest rate of 26.4% per year. </li>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Loan application and insurance of 4 %.</li>
                  </ul><br></br>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Purpose</h4>
                  <ul>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s"> The product will give an opportunity to employees to further education, own property and improve their livelihood. The loans under this product will be paid through check off system together with savings.</li>
                  </ul>
                </ul>
                </div>
            </div>
            <div class=".g-col-2 p-2" >
              <section className='form-section'>
              <h4 className="animate-hover animate__animated animate__rubberBand animate__delay-3s">Interested in this product??</h4>
              <b className="animate-hover animate__animated animate__heartBeat animate__delay-3s">Fill the form below</b>
            <div>
            <BenevolentForm/>
            </div>
        </section>
      </div>
      </div>
      
    </div>
  </Layout>
  )
}

export default Salaried;