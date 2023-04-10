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


const router = createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path:'/card/:cardid',
        element: <JobDetail></JobDetail>,
        loader: async({params}) => {
          return fetch(`jobs.json/${params.cardid}`)
        },

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
      },
      {
       path: '/about',
       element:<AboutUs></AboutUs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
