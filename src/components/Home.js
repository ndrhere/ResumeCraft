import React, { useEffect, useState } from 'react';
import ResumeLink from './ResumeLink';

const Home = (props) => {
  let {resumeId} = props;
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchResume();
  }, [resumeId]);

  const fetchResume = async () => {
  
      const response = await fetch(`/api/${resumeId}`); 
      const data = await response.json();

      setResume(data);
    
  };

  if (!resume) {
    return <div>Loading...</div>;
  }

  const renderResumeLink = () => {
    if (resume) {
      return <ResumeLink resume={resume} />;
    }
    return null;
  };

  const {
    profile,
    about,
    academics,
    experience,
    projects,
    skills
  } = resume;

  if (!academics) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resume-content">
    <div className="row">
      <div className="column">
        <h2>Profile</h2>
        <p>Name: {profile.name}</p>
        <p>Designation: {profile.designation}</p>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
        <p>Location: {profile.location}</p>
        <p>Website: {profile.website}</p>
      </div>
      <div className="column">
        <h2>Academics</h2>
        <p>School: {academics.school}</p>
        <p>College: {academics.college}</p>
        <p>University: {academics.university}</p>
        <p>Certifications: {academics.certifications}</p>
        <p>Title: {academics.title}</p>
        <p>Year: {academics.year}</p>
        <p>Writeup: {academics.writeup}</p>
      </div>
      <div className="column">
        <h2>Projects</h2>
        <p>Title: {projects.title}</p>
        <p>Tenure: {projects.tenure}</p>
        <p>URL: {projects.url}</p>
        <p>Description: {projects.description}</p>
      </div>
    </div>

    <div>
      <h2>About</h2>
      <p>{about}</p>
    </div>

    <div>
      <h2>Experience</h2>
      <p>Designation: {experience.designation}</p>
      <p>Organisation: {experience.organisation}</p>
      <p>Tenure: {experience.tenure}</p>
      <p>Location: {experience.location}</p>
    </div>

    <div>
      <h2>Skills</h2>
      <p>{skills}</p>
    </div>
    {renderResumeLink()}
  </div>
);
};
export default Home;
