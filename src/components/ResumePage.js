import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';

const ResumePage = () => {
  const { resumeId } = useParams();

  return (
    <div className="container resume-container" style={{ color: 'white', padding: '30px' }}>
      <Home resumeId={resumeId} />
    </div>
  );
};

export default ResumePage;
