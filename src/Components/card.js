import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
  margin: '20px',
  transition: 'transform 0.3s',
  width: '200px',
};

const cardHoverStyle = {
  transform: 'scale(1.05)',
};

const imgStyle = {
  width: '100%',
  height: '250px', // Adjust the height as needed
  objectFit: 'cover',
};

const CardComponent = ({ imageUrl, title, text }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Card
      style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card.Img variant="top" src={imageUrl} alt="Card image cap" style={imgStyle} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;