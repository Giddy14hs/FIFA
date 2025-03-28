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
                <h1 className="animate-hover animate__animated animate__rollIn animate__delay-1s">Special Loans</h1>
                <ul>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">All special loans will be serviced for a maximum of 3 months and should have a separate savings from business loans</h4>
                  <ol><h6>
                    <h4 className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Clients will have serviced 1st loans. </h4><br></br>
                    <h4 className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">All special loans should have a separate savings from business loans.</h4><br></br>
                    <h4 className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Be of good standing with the group.</h4></h6>
                  </ol><br></br>

                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">There are various types of special loans: <ul>
                    <li>✓ Tender Loans</li>
                    <li>✓ Emergency Loans i.e <ul>
                      <li>
                        Okoa Janga loans- Loans given to individual who want to sort some business emergencies or meet urgent order</li>
                        <li>Jisort Loans- Loans given to assist a business owner to recover from the adverse effects of a fire/theft/urgent situation</li>
                        <li>Education Loans- Loans that allows a client to pay for their children's school fees</li>
                        <li>NHIF Loans- Caters for clients who have not managed to contribute to NHIF cover</li>
                        <li>Soko Loans- Loan product for individual client who needs money to buy goods for the market</li></ul></li>
                    </ul>
                    </h4>
                 
                  </ul>
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
    </div>
  </Layout>
  )
}

export default Special;