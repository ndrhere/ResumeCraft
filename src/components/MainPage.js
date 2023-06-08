import React, { useEffect } from 'react';
import ResumeLink from './ResumeLink';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MainPage = () => {
  const [container, setContainer] = useState([])
  const [name, setName] = useState([])
  const navigate = useNavigate()
  const handleClick = (event) =>{
    event.preventDefault();
    navigate('/addresume')

  }
  
  const fetchId = async () => {
    const response = await fetch('/api')
    const data = await response.json();
    const getId = data.map((item)=>{
      return item.id
   })
    const getName = data.map((item)=>{
      return item.profile.name
      })
   setName(getName)
   setContainer(getId)
    console.log('data' , getId)
    console.log('name', getName)

  };
  
  useEffect(() => {
    fetchId();
  }, []);

  return (
   <div className="main-page">
  

  <div className="container" style={{marginTop:"50px"}}>
        <h1 style={{color:"white"}}>Imagine a place...</h1>
        <p style={{color:"white"}}>...where you can see your resume, can create and edit them. This application will provide you with the best way to store your resume and edit them to make recruiters friendly. Its a better way to save your resume in a place which is accessible to all so that looking at various resumes can give aspirants the idea about the way of making it. </p>

        <button className=" btn btn-primary" style={{marginTop:"200"}} onClick={handleClick}>Add Resume</button>

        <h3  style={{color: "white", marginTop:"70px"}}>List of Resumes : </h3>
        <ResumeLink resumeId={container} name={name}/>
  </div>
    </div>
  );
};

export default MainPage;
