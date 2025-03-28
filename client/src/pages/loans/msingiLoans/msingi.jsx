import React, {useEffect} from 'react'
import "./msingi.css"
import { Layout } from 'antd'
//import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Msingi = () => {

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
                <h2 className="animate-hover animate__animated animate__rollIn animate__delay-1s">Group Loans</h2>
                <ul>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Benefits</h4>
                  <ol>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Provides a client with the needed capital to start a business and grow an income as means to support themselves and their family. </li>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Allows members of the community to take initiative, empower themselves to become self-reliant. </li>
                  </ol><br></br>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Purpose</h4>
                  <ul>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">A loan to start a new business for a client without an existing business but has the desire to develop their business skills to support themselves and/or their family. </li>
                  </ul>
                </ul>
                </div>
            </div>
            <div class=".g-col-2 p-2 m-2">
              <section className='form-section'>
                <h4>Interested in this product??</h4>
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

export default Msingi;