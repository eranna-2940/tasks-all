import React ,{useState}from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './nav';


const SignUp=()=>{
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
})
const navigate = useNavigate();
const handleInput = (event) => {
  setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
}
const handleSubmit = (event) => {
  event.preventDefault();
  // setErrors(Validation(values));
  console.log('hl')
  if (values.name !== "" && values.email !== "" && values.password !== "") {
      alert('signup successfully')
      axios.post('http://localhost:8081/signup', values)
          .then(res => {
              navigate('/');
          })
          .catch(err => console.log(err));
  }
}

    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
          <Navbar/>
   
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter name"id="name" name="name"
                        onChange={handleInput} />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
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

        <div className="d-grid">
          <button type="submit" className="btn1">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
  export default SignUp;
