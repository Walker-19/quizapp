import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/home';
import Favoris from './pages/Favoris';
import SingleQuiz from './pages/SinglePubQuiz';
import AddQuiz from './pages/AddQuiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
          path: '/addquiz',
          element: <AddQuiz />
      },
      {
        path: '/home',
        element: <HomeRoot />,
        children: [
            {
              path: '',
              element:<Home />
            },
          {
          
            path: 'quiz',
            element: <div className='w-full h-screen bg-cyan-300'> </div>
          }
        ]
      },
      {
        path: '/favoris',
        element: <Favoris />
      },
      {
        path: '/profil',
        element: <div className=''>Profil</div>
      },
    ]
  }
])

function App() {
  return (
    <div className="w-full h-screen bg-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


function Root(){
  return <>
 
        <Outlet />
      
  </>
}

function HomeRoot (){
  return <>
      <Outlet />
  </>
}

export default App;
