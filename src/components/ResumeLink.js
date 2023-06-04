import React from 'react';

const ResumeLink = (props) => {
let{resumeId} = props;

  const resumeUrl = `/api/${resumeId}`; 

  return (
    <div>
      <span>1</span> <a href={resumeUrl}>Narendra Kumar Chawda</a>
    </div>
  );
};

export default ResumeLink;
