import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import './Blog.css'


const Blog = () => {
    return (
        <div className='accordian-handel'>
            <Card className="text-center card-blog-section">
                <Card.Header className='fs-3'>Question Answer Section</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>what is the purpose of react router?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

                                        At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Router s as it changes, and it also gives you tools to update the location using link s and the history API.

                                        On the basis of the part of URL that the router will use to track the content that the user is trying to view, React Router provides three different kinds of routers: Memory Router. Browser Router. Hash Router.

                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>who does context api work?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

                                        1. Context API is introduced in React 16.3. The Context API is used to share the data with multiple components, without having to pass data through props manually. The React Context API allows us to produce the global data and share it across the application.

                                        2.What is context in React? React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it usually you are only able to pass data from parent to child via props.

                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What is the useRef hook? Why used useRef Hook,and useRef Discuase?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.

                                        useRef returns a mutable ref object whose .current property is initialized to the passed argument  initialValue. The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                                        useRef can be used to store local mutable value in a component. It doesn't participate in rerendering (unline state data). useMemo is used to memoize (like we do in Dynamic Programming, concept wise) and skip recalculation.
                                    </Card.Text>




                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default Blog;