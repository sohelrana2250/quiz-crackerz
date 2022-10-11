
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Error from './components/DeafultPage/Error';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/BLOG/Blog';


function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }
        },
        { path: '/blog', element: <Blog></Blog> },

        {
          path: '/:ID',
          element: <QuizDetails></QuizDetails>,
          loader: async (props) => {

            return fetch(`https://openapi.programming-hero.com/api/quiz/${props.params.ID}`)

          }


        }
      ]
    },
    { path: '*', element: <Error></Error> }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
