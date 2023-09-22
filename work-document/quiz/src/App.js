import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Quiz from './components/quiz'
import Instructionpage from './components/instructions'

function App() {
  return (
    <Router>
      <div className="App">
      
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/instructions" element={<Instructionpage/>} />
              <Route path="/quiz" element={<Quiz />} />

            </Routes>
          </div>
    </Router>
  )
}

export default App
