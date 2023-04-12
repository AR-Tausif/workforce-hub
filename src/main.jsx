import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ViewDetails from './components/anotherPage/viewDetails/ViewDetails'
import AppliedJob from './components/appliedJobs/AppliedJob'
import Statistics from './components/statisticsPage/Statistics'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Has no data....</h1>
  },
  {
    path: "/statistics",
    element: <Statistics />
  },
  {
    path: "/details",
    element: <ViewDetails />,
    loader: ()=> fetch("/public/data.json"),
  },
  {
    path: "/appliedJobs",
    element: <AppliedJob />
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
