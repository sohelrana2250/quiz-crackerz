import React, { useState } from 'react';
//import { Card, CardGroup } from 'react-bootstrap';
import './QuizDisplay.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const QuizDisplay = (props) => {
    const { question, options, correctAnswer } = props.questionInfo;
    const { unique } = props;

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
            <div className="form-check col-12 d-flex" >


                <div className='col-3'>
                    <button className='click-option btn btn-outline-danger' type="button" onClick={() => AnswerHandelClick(v)}> <i className="fa-regular fa-circle-check"></i></button>
                </div>

                <label className="form-check-label fs-3 handel-margine">{v}</label>


                <ToastContainer />
            </div>
        </div>


    })
    return (
        <div className='card-section'>
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title fs-5"><b className='fs-4'>Quiz No:{unique + 1}</b> {questionSection}
                        <button className='eye-button' onClick={HandelCorrectAnswer}><i className="fa-solid fa-eye fs-5"></i></button>

                    </h5>
                    <p> {questionOption}</p>

                </div>
            </div>


        </div>

    );
};

export default QuizDisplay;