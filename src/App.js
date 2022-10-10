
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Error from './components/DeafultPage/Error';


function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> }
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
