import React from 'react';
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const TopicCard = (props) => {
    const { id, logo, name, total } = props.cart;

    //console.log(id);


    // <Link to={`/rest/${name.common}`}> <Button variant="outline-primary">Danger</Button></Link>
    return (
        <Col className='card-marige' xs={12} lg={3} md={6}  >
            <Card>
                <Card.Img variant="top" className="rounded img-fluid mx-auto d-block" src={logo ? logo : 'logo not exist'} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='d-flex'>

                        Total Quiz :   {total}


                    </Card.Text>


                    <Link to={`/${id}`}> <Button className='btn btn-outline-secondary btn-lg text-white'>Started Quiz</Button></Link>


                </Card.Body>


            </Card>
        </Col>
    );
};

export default TopicCard;