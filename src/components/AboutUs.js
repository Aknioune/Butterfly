import React, { useState } from 'react';
import './AboutUs.css';

function AboutUs() {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        We are dedicated to raising awareness about breast cancer. Our mission is to educate and empower individuals to take proactive steps in their health journey.
      </p>
      {expanded && (
        <p>
          Here you can add a large paragraph or detailed content that will be revealed when "Read More" is clicked. This could include more information about the team, the project's goals, and how people can get involved or support the cause.
        </p>
      )}
      <button onClick={handleReadMore} className="read-more-button">
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default AboutUs;
