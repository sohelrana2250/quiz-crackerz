import React, { useState } from 'react';
//import { Card, CardGroup } from 'react-bootstrap';
import './QuizDisplay.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const QuizDisplay = (props) => {
    const { question, options, correctAnswer } = props.questionInfo;

    const [corrent, setCorrect] = useState('');

    //console.log(id, correctAnswer)

    const questionStarting = question.replace('<p>', " ");
    const questionSection = questionStarting.replace('</p>', " ");
    // console.log(correctAnswer)
    const AnswerHandelClick = (click) => {

        if (click.toLowerCase() === correctAnswer.toLowerCase()) {
            //console.log(click.replace(click, click));

            // console.log('corrent Answwer is : ' + click.toLowerCase())
            toast("Wow Your Answer is Correct!");
        }

        else {

            toast("So Sad ! Answer is InCorrect")
            setCorrect('Wrong Answer');

        }


    }

    console.log(corrent);

    const HandelCorrectAnswer = () => {
        const wrongAnswer = 'Wrong Answer';
        if (wrongAnswer.toLowerCase() === corrent.toLowerCase()) {
            toast("Correct-Answer is : " + correctAnswer)
        }
        else {
            toast('Please Answer the Question. If Your Answer is Wrong then Click EYE Button');
        }

    }


    const questionOption = options.map((v, index) => {
        return <div key={index} className='d-flex  quiz-section '>
            <div className="form-check col-12" >

                <label className="form-check-label fs-3">{v}</label>
                <input className="form-check-input fs-3" type="checkbox" value="" id="flexCheckIndeterminate" onClick={() => AnswerHandelClick(v)} />
                <ToastContainer />
            </div>
        </div>


    })
    return (
        <div className='card-section'>
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title fs-5">{questionSection}
                        <button className='eye-button' onClick={HandelCorrectAnswer}><i className="fa-solid fa-eye"></i></button>
                        <ToastContainer />
                    </h5>
                    <p> {questionOption}</p>

                    <button className='btn btn-primary' >Go somewhere</button>
                </div>
            </div>


        </div>

    );
};

export default QuizDisplay;