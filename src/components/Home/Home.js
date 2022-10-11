import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../QuizTopic/TopicCard';
import './Home.css'
import quiz from './quiz.png'
const Home = () => {

    const quizData = useLoaderData();

    const data = quizData.data;
    //console.log(data);

    return (

        <div>
            <div className='home-bg-image quiz-box '>

                <h1 className='point'><b>WelCome to  <b>Kahoot-Quiz-Zone</b></b></h1>
                <hr className='border' />
                <div className='row'>

                    <div className='col-lg-6 col-md-6 col-sm-12' >
                        <p className='text-white fs-4'>Websites feature online quizzes on many subjects. One popular type of online quiz is a personality quiz or relationship quiz which is similar to what can be found in many women's or teen magazines. Websites hosting quizzes include Quizilla, FunTrivia, OkCupid, Sporcle, and Quizlet.</p>

                        <h4 className='text-center fs-2 text-primary'><b>How our quiz maker works</b></h4>
                        <div className='text-white fs-4'>
                            <li> our free online quiz templates, or select “Start from scratch.”</li>
                            <li>Log into SurveyMonkey and choose one of. Add quiz questions to your survey.</li>
                            <li>Select “Score this question (enable quiz mode)” for each quiz question.</li>
                            <li>Assign your answer options points with the plus or minus signs.
                                More items...</li>
                        </div>

                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img src={quiz} className="rounded mx-auto d-block w-50" alt="" />

                    </div>

                </div>


            </div>

            <br />
            <h1>Quiz-Zone</h1>
            <hr className='border' />

            <div className='card-handel'>

                <Row>
                    {data.map((v, index) => <TopicCard key={index} cart={v}></TopicCard>)}
                </Row>

            </div>




        </div>


    );
};

export default Home;