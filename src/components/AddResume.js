import React from 'react';
import { useContext, useState } from 'react';
import resumeContext from '../context/resumeContext';

const AddResume = () => {
  const context = useContext(resumeContext);
  const { addingResume } = context;
  const [details, setDetails] = useState({
    profile: {
      name: '',
      designation: '',
      email: '',
      phone: '',
      location: '',
      website: ''
    },
    about: '',
  
    academics: {
      school: '',
      college: '',
      university: '',
      certifications: '',
      title:'',
      year:'',
      writeup:''
     },

    experience:{
      designation: '',
      organisation: '',
      tenure: '',
      location: ''
    },

    projects: {
      title: '',
      tenure: '',
      url: '',
      description: ''
    },
    skills: ''
  });

  const handleChange = (event) => {
    
    if (event.target.name === 'name' || event.target.name === 'designation' || event.target.name === 'email' || event.target.name === 'phone' || event.target.name === 'location' || event.target.name === 'website') {
      setDetails((prevDetails) => ({
        ...prevDetails,
        profile: {
          ...prevDetails.profile,
          [event.target.name]: event.target.value
        }
      }));
    } else if (event.target.name === 'school' || event.target.name === 'college' || event.target.name === 'university' || event.target.name === 'certifications' || event.target.name === 'title' || event.target.name === 'year' || event.target.name === 'writeup') {
      setDetails((prevDetails) => ({
        ...prevDetails,
        academics: {
          ...prevDetails.academics,
          [event.target.name]: event.target.value
        }
      }));
    } else if (event.target.name === 'designation' || event.target.name === 'organisation' || event.target.name === 'tenure' || event.target.name === 'location') {
      setDetails((prevDetails) => ({
        ...prevDetails,
        experience: {
          ...prevDetails.experience,
          [event.target.name]: event.target.value
        }
      }));
    } else if (event.target.name === 'title' || event.target.name === 'tenure' || event.target.name === 'url' || event.target.name === 'description') {
      setDetails((prevDetails) => ({
        ...prevDetails,
        projects: {
          ...prevDetails.projects,
          [event.target.name]: event.target.value
        }
      }));
    } else {
      setDetails({ ...details, [event.target.name]: event.target.value });
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    addingResume(
      details.profile,
      details.about,
      details.academics,
      details.experience,
      details.projects,
      details.skills
    );
  };

  return (
    <div style={{color:"white"}}>
    
      <div className="resume-page">
        <div className="profile">
          <h3>Profile-</h3>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="designation">Current Designation</label>
            <input type="text" id="designation" name="designation" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" name="phone" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" onChange={handleChange} />
          </div>
        </div>

        <h3>About-</h3>

        <div className="about" onChange={handleChange}>
          <label htmlFor="about">About Me</label>
          <input type="text" id="about" name="about" onChange={handleChange}/>
        </div>

        <h3>Academics-</h3>

        <div className="academics" onChange={handleChange}>
          <div>
            <label htmlFor="school">School</label>
            <input type="text" id="school" name="school" onChange={handleChange}/>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange}/>
            <label htmlFor="year">Year</label>
            <input type="number" id="year" name="year" onChange={handleChange} />
            <label htmlFor="writeup">Write-up</label>
            <input type="text" id="writeup" name="writeup" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="college">College</label>
            <input type="text" id="college" name="college" onChange={handleChange}/>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} />
            <label htmlFor="year">Year</label>
            <input type="number" id="year" name="year" onChange={handleChange} />
            <label htmlFor="writeup">Write-up</label>
            <input type="text" id="writeup" name="writeup" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="university">University</label>
            <input type="text" id="university" name="university" onChange={handleChange} />
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} />
            <label htmlFor="year">Year</label>
            <input type="number" id="year" name="year" onChange={handleChange} />
            <label htmlFor="writeup">Write-up</label>
            <input type="text" id="writeup" name="writeup" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="certifications">Certification</label>
            <input type="text" id="certification" name="certifications" onChange={handleChange} />
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} />
            <label htmlFor="year">Year</label>
            <input type="number" id="year" name="year" onChange={handleChange} />
            <label htmlFor="writeup">Write-up</label>
            <input type="text" id="writeup" name="writeup" onChange={handleChange} />
          </div>
        </div>


        <h3>Experience-</h3>

        <div className="experience" onChange={handleChange}>
        
  <div>
    <label htmlFor="designation">Designation</label>
    <input type="text" id="designation" name="designation" onChange={handleChange} />
    <label htmlFor="organisation">Organisation</label>
    <input type="text" id="organisation" name="organisation" onChange={handleChange} />
    <label htmlFor="tenure">Tenure</label>
    <input type="text" id="tenure" name="tenure" onChange={handleChange} />
    <label htmlFor="location">Location</label>
    <input type="text" id="location" name="location" onChange={handleChange} />
  </div>
  <div>
    <label htmlFor="designation">Designation</label>
    <input type="text" id="designation" name="designation" onChange={handleChange} />
    <label htmlFor="organisation">Organisation</label>
    <input type="text" id="organisation" name="organisation" onChange={handleChange} />
    <label htmlFor="tenure">Tenure</label>
    <input type="text" id="tenure" name="tenure" onChange={handleChange} />
    <label htmlFor="location">Location</label>
    <input type="text" id="location" name="location" onChange={handleChange} />
  </div>
</div>
     
<h3>Projects-</h3>

        <div className="projects" onChange={handleChange}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} />
            <label htmlFor="tenure">Tenure</label>
            <input type="number" id="tenure" name="tenure" onChange={handleChange} />
            <label htmlFor="url">URL</label>
            <input type="text" id="url" name="url" onChange={handleChange} />
            <label htmlFor="description">Description</label>
            <input type="description" id="description" name="description" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} />
            <label htmlFor="tenure">Tenure</label>
            <input type="number" id="tenure" name="tenure" onChange={handleChange} />
            <label htmlFor="url">URL</label>
            <input type="text" id="url" name="url" onChange={handleChange} />
            <label htmlFor="description">Description</label>
            <input type="description" id="description" name="description" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} />
            <label htmlFor="tenure">Tenure</label>
            <input type="number" id="tenure" name="tenure" onChange={handleChange} />
            <label htmlFor="url">URL</label>
            <input type="text" id="url" name="url" onChange={handleChange} />
            <label htmlFor="description">Description</label>
            <input type="description" id="description" name="description" onChange={handleChange} />
          </div>
        </div>

        <h3>Skills-</h3>

        <div className="skills" onChange={handleChange}>
          <label htmlFor="skills">Skills</label>
          <input type="text" id="skills" name="skills" onChange={handleChange} />
        </div>
      </div>
      <button className="btn btn-primary my-4" style={{marginLeft:"595px"}} onClick={handleClick}>Submit</button>
    </div>
  );
};


export default AddResume;
