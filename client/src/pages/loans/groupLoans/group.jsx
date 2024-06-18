import React, {useEffect} from 'react'
import "./group.css"
import { Layout  } from 'antd'
import { getForms} from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans'

const Group = () => {
 
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
                    <li>Managed by group.  </li>
                    <li>Group gets their own interest from loans</li>
                    <li>Trainings done on table banking management.</li>
                  </ol><br></br>
                  <h4>Purpose</h4>
                  <ul>
                    <li>The product is for groups running successful table banking and requires money to meet its members demand. </li>
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

export default Group;