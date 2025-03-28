import React, {useEffect} from 'react'
import "./group.css"
import { Layout  } from 'antd'
//import { getForms} from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'
import BenevolentForm from '../../../components/form/formLoans'

const Group = () => {
 
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
                <h2 className="animate-hover animate__animated animate__rollIn animate__delay-1s">Group Loans</h2>
                <ul>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Benefits</h4>
                  <ol>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Managed by group.  </li><br></br>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Group gets their own interest from loans</li><br></br>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">Trainings done on table banking management.</li>
                  </ol><br></br>
                  <h4 className="animate-hover animate__animated animate__zoomIn animate__delay-2s">Purpose</h4>
                  <ul>
                    <li className="animate-hover animate__animated animate__zoomInDown animate__delay-3s">The product is for groups running successful table banking and requires money to meet its members demand. </li>
                  </ul>
                </ul>
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

export default Group;