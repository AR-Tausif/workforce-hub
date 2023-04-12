import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import JobList from './components/jobList/JobList';
import FeatureJob from './components/featuredJob/FeatureJob';
import Footer from './components/footer/Footer';
import {useLoaderData} from 'react-router-dom'

const App = () => {
  const availableJobs = useLoaderData()
  // console.log(availableJobs);
  return (
    <>
    <header className="bg-light">
      <Navbar></Navbar>
      <Header></Header>
    </header>
    <main>
      <JobList></JobList>
      <FeatureJob jobs={availableJobs}></FeatureJob>
    </main>
    <footer className="bg-dark">
      <Footer></Footer>
    </footer>
    </>
  );
};

export default App;