import React from 'react';
import ResumeLink from './ResumeLink';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate()
  const handleClick = (event) =>{
    event.preventDefault();
    navigate('/addresume')

  }
  const id = 12; 

  return (
   <div className="main-page">
  

  <div className="container" style={{marginTop:"50px"}}>
        <h1 style={{color:"white"}}>Imagine a place...</h1>
        <p style={{color:"white"}}>...where you can see your resume, can create and edit them. This application will provide you with the best way to store your resume and edit them to make recruiters friendly. Its a better way to save your resume in a place which is accessible to all so that looking at various resumes can give aspirants the idea about the way of making it. </p>

        <button className=" btn btn-primary" style={{marginTop:"200"}} onClick={handleClick}>Add Resume</button>

        <h3  style={{color: "white", marginTop:"70px"}}>List of Resumes : </h3>
        <ResumeLink resumeId={id} />
  </div>
    </div>
  );
};

export default MainPage;
