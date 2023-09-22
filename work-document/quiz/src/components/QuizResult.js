import React from 'react'

function QuizResult(props) {


  return (
    <>
    <div className='main'>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total :{props.totalScore}      
    </div>
  
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    <button id='next-button2' onClick={props.handleclick}>Your results</button>
    
    </div>
    </>
    
  )
}

export default QuizResult