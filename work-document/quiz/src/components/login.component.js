import React,{useState} from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from './nav';

const Login=()=>{
  const [values, setValues] = useState({
    email: '',
    password: ''
})
const history = useNavigate();

const handleInput = (event) => {
  setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  localStorage.setItem('email', values.email)
}
const handleSubmit = (event) => {
  event.preventDefault();
  // setErrors(Validation(values));
  if (values.email !== "" && values.password !== "") {
      axios.post('http://localhost:8081/login', values)
          // console.log(values)
          .then(res => {
              if (res.data === "Success") {
                  history('/instructions')
              } else {
                  alert("No record existed");
              }

          })
          .catch(err => console.log(err));
  }
}



    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
          <Navbar/>
      <form onSubmit={handleSubmit}>
    
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            id="username" name="email"
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password" name="password"
                    onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className="btn1">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href='/'>password?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
export default Login;
