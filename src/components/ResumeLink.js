import React from 'react';

const ResumeLink = (props) => {
let{resumeId, name} = props;

if(!resumeId){
  console.log('resumeId is not available')
}


return(
  <>
 {resumeId.map((id, index)=>
  (
    <div key={index}>
      <span style={{color:"white"}}>{index+1} {"  "}</span><a className="list"href={`/api/${id}`}>{name[index]}</a>
    </div>
  )
)}


 
 </>
)
}
export default ResumeLink;
