import React,{useEffect} from 'react'
import "./special.css"
import { Layout } from 'antd'
//import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Special = () => {

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
                <img />
                <h1 className="animate-hover animate__animated animate__rollIn animate__delay-1s">Special Loans</h1>
                <ul>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">All special loans will be serviced for a maximum of 3 months.</h4>
                  <ol>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Clients will have serviced 1st loans. </li>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">All special loans should have a separate savings from business loans.</li>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Be of good standing with the group.</li>
                  </ol><br></br>
                  </ul>
                </div>
            </div>
            <div class=".g-col-2 p-2">
              <section className='form-section'>
              <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Interested in this product??</h4>
              <b className="animate-hover animate__animated animate__heartBeat animate__delay-3s">Fill the form below</b>
            <div>
            < BenevolentForm/>
            </div>
        </section>
      </div>
      </div>
    </div>
  </Layout>
  )
}

export default Special;