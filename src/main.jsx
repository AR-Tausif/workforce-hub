import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ViewDetails from './components/anotherPage/viewDetails/ViewDetails'
import AppliedJob from './components/appliedJobs/AppliedJob'
import Statistics from './components/statisticsPage/Statistics'
import ErroPage from './components/errorPage/Error'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage/>
  },
  {
    path: "statistics",
    element: <Statistics />
  },
  {
    path: "details",
    element: <ViewDetails />,
    loader: async ()=> {
      const res = await fetch("https://raw.githubusercontent.com/AR-Tausif/needed-images/main/data.json");
      const data = await res.json();
      return data;
    },
  },
  {
    path: "appliedJobs",
    element: <AppliedJob />
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
