import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import Jobs from './Components/Jobs/Jobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>  ,
    children: [
      {
        path: '/' ,
        element: <Home></Home> ,
      },
      {
        path: '/applied' ,
        element: <AppliedJobs></AppliedJobs> ,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/blog' ,
        element: <Blog></Blog>
      },
      {
        path: '/statistics' ,
        element: <Statistics></Statistics>
      },
      {
        path: '/jobs' ,
        element: <Jobs></Jobs>
      },
      {
        path: '/job/:id' ,
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
