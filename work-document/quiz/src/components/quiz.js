import React, { useState } from 'react'
import { QuizData } from '../data/QuizData'
import QuizResult from './QuizResult';
import { useNavigate } from 'react-router-dom';
import Navbar from './nav';

function Quiz() {
    const [showanswers, setShowAnswers] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [res, setRes] = useState([])
    const [data, setData] = useState([])
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        if (clickedOption === 0) {
            alert('selection  required')
        } else {
            updateScore();
            if (currentQuestion < QuizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setClickedOption(0);
            } else {
                setShowResult(true)
            }
        }
    }
    const prev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }


    const updateScore = () => {

        var currentQue = QuizData[currentQuestion];
        if (clickedOption === currentQue.answer) {
            setScore(score + 1);
        }
        // setQuestion(currentQue)
        setRes(currentQue.options[currentQue.answer - 1])
        setData(olddata => {
            return [...olddata, QuizData[currentQuestion].options[clickedOption - 1]]
        })
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    const close = () => {
        setShowAnswers(false);
        document.querySelector('.main').style.display = 'block';
    }
    const result = () => {
        setShowAnswers(true);
        document.querySelector('.main').style.display = 'none';
    }
    return (
        <div>
            <Navbar/><br/><br/>
            <p className="heading-txt">Quiz APP</p>

            <br />

            <div className="container">
                {showResult ? (
                    <QuizResult score={score} answer={data} canswer={res} handleclick={result} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <h2>{currentQuestion + 1}/{QuizData.length}</h2><br />
                            {/* <span id="question-number">{currentQuestion+1}. </span> */}
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        // className="option-btn"
                                        className={`option-btn ${clickedOption === i + 1 ? "checked" : null
                                            }`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        {
                            currentQuestion > 0 && (
                                <input type="button" value="Pre" id="pre" onClick={prev} />
                            )
                        }

                        {
                            currentQuestion < QuizData.length - 1 && (
                                <input type="button" value="Next" id="next" onClick={changeQuestion} />

                            )
                        }{
                            currentQuestion === QuizData.length - 1 && (
                                <input type="button" value="submit" id="next" onClick={changeQuestion} />

                            )
                        }

                    </>)}
                {
                    showanswers && (
                        <div className='results'>
                            <button className='close' onClick={close}>x</button>
                            <center><h1>Your Results</h1></center>
                            <h5>Questions</h5>

                            {
                                QuizData.map((question, i) => (
                                    <>
                                        <p key={i} className='qust'>Q.{question.question}</p>
                                        <p className='correct'>Correct Answers:- {question.options[question.answer - 1]}</p>
                                        <p className='wrong'> Your Answer:- {data[i]}</p>
                                    </>
                                ))
                            }
                        </div>
                    )
                }


            </div>
            <div >
            </div>
        </div>
    )
}


export default Quiz;