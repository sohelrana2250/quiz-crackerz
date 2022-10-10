import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizTopic = useLoaderData();
    console.log(quizTopic)
    return (
        <div>
            <h1>Quiz-Details Component</h1>
        </div>
    );
};

export default QuizDetails;