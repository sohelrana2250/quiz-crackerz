import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDisplay from '../QuizDisplay/QuizDisplay';


const QuizDetails = () => {
    const quizTopic = useLoaderData();

    const questionData = quizTopic.data.questions;
    console.log(questionData);


    return (
        <div>
            <h1 className='fs-2'>Quiz-Question</h1>
            {

                questionData.map((v, index) => <QuizDisplay key={index} questionInfo={v} unique={index}></QuizDisplay>)

            }

        </div>
    );
};

export default QuizDetails;