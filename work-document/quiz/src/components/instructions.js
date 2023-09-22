import React from "react";
import Navbar from "./nav";


const Instructionpage=()=>{
    return(
        <>
        <Navbar/>
      <br/>
        <div className="inst-info">
            <div>
            <h1>Guidelines for the  Quiz :-</h1>
           <p>1. The first step is to log on to you need sign in this site and and login for start test.</p>
           <p>2.The quiz will be of half an 5 minutes duration. </p>
           <p>3.You can attempt the quiz only once.</p>
            <p>4.There are a total 50 questions.</p> 
            <p>5. Each question carries one mark. No negative marking for wrong answers.</p>
            <p>6. Questions are of Multiple Choice. </p>
            </div>
            <div>
            <p>1. Click the Available test button.</p>      
            <p>2. Click javascript Quiz under Test Name.</p>    
            <p>3. Click Start Test to attempt the quiz.</p>    
            <p>4. The time will start the moment you click the Start Test button. </p>
            <p>5. Click on Next button to move next question. Please note that you will be able to go back to any of the previous question after clicking Next button.</p>
            <p>6. Click on Submit Test button on completion of the quiz. </p>
            </div>
        </div>
        <button type="button" id="next" >Start</button>

        </>
    )
}

export default Instructionpage;