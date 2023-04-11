import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Main from './components/Layout/Main';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import AboutUs from './components/AboutUs/AboutUs';
import JobDetail from './components/JobDetail';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path:'/card/:Id',
        element: <JobDetail></JobDetail>,
        loader: ({params}) => fetch('/jobs.json')
       

      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>,
      },
      {
        path:'/job',
        element:<AppliedJobs></AppliedJobs>,
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)