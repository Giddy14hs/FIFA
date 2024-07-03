import React,{useEffect}from 'react'
import "./savings.css"
import { Layout} from 'antd'
//import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Savings = () => {

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
                <h2 className="animate-hover animate__animated animate__rollIn animate__delay-1s">Savings Plan</h2>
                <ul>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Terms</h4>
                  <ol>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Withdrawal can be done twice a year. </li><br></br>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Opening balance kshs.300</li>
                  </ol><br></br>
                </ul>
                </div>
            </div>
            <div class=".g-col-2 p-2 m-2">
            <section className='form-section'>
            <h4 className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Interested in this product??</h4>
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

export default Savings;