import React, { useState,useEffect } from 'react';
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SetAccessToken } from "./axiosInstance";
import { newUsersType } from './components/app.type';
import { loadUser } from './components/api';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage'
import SignUp from './pages/SignUp'
// import SignIn from './pages/SignIn'
// import axiosInstance from './axiosInstance'

function App() : JSX.Element {
  const [user, setUser] = useState<newUsersType>(null)

  useEffect(() => {
    loadUser().then((data)=> {
      setUser(data.user)
      SetAccessToken(data.accessToken)
    })
    .catch(console.error)
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user ={user} setUser={setUser}/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <MainPage user = {user} setUser={setUser} />,
        },
        {
          path: 'signup',
          element: <SignUp user={user} setUser={setUser}/>,
        },
        // {
        //   path: 'signin',
        //   element: <SignIn user={user} setUser={setUser}/>,
        // }
      ],
    },
  ])
  return <RouterProvider router={router} />
}
export default App
