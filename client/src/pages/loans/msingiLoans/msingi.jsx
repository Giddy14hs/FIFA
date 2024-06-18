import React, {useEffect} from 'react'
import "./msingi.css"
import { Layout } from 'antd'
import { getForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans.jsx'

const Msingi = () => {

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
                <h2 className="text-center">Group Loans</h2>
                <ul>
                  <h4>Benefits</h4>
                  <ol>
                    <li>Provides a client with the needed capital to start a business and grow an income as means to support themselves and their family. </li>
                    <li>Allows members of the community to take initiative, empower themselves to become self-reliant. </li>
                  </ol><br></br>
                  <h4>Purpose</h4>
                  <ul>
                    <li>A loan to start a new business for a client without an existing business but has the desire to develop their business skills to support themselves and/or their family. </li>
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
            <BenevolentForm />
            </div>
        </section>
      </div>
    </div>
  </Layout>
  )
}

export default Msingi;