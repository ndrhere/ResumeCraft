import React from 'react';
import { useState } from 'react';
import CreateContext from './resumeContext'

const ResumeState = (props) => {
const [state, setState] = useState([])

const addingResume = async (profile, about, academics, experience, projects, skills) =>{
const response = await fetch('/api', {
  method: "POST",
  headers:{
  "Content-Type": "application/json",
  },
  body: JSON.stringify({profile, about, academics, experience, projects, skills})

})
const data = await response.json()
setState(state.concat(data))
}






  return (
   
  <CreateContext.Provider value = {{addingResume, state}}>


{props.children}
  </CreateContext.Provider>


    
  )
}

export default ResumeState;