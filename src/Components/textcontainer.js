import React from 'react';

const containerStyles = {
  display: 'inline-block', // Make the container fit around the text only
  backgroundColor: '#f0f0f0',
  padding: '5px',
  border: "8px ridge #000000",
  fontSize: '35px',
  textAlign: 'center',
  verticalAlign: 'middle' // Ensure vertical alignment if necessary
};

const TextContainer = ({ text }) => {
  return (
    <div style={{ textAlign: 'center' }}> {/* Center the container itself */}
      <div style={containerStyles}>
        {text}
      </div>
    </div>
  );
};

export default TextContainer;