import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../Components/navbar';
import Footer from '../Components/footer';
import CardComponent from '../Components/card';

const Product = () => {
  const cardData = [
    {
      imageUrl: '/Assets/Hero1.jpeg',
      title: 'Card title 1',
      text: 'This is a wider card with supporting.',
    },
    {
        imageUrl: '/Assets/Hero1.jpeg',
        title: 'Card title 1',
        text: 'This is a wider card with supporting.',
    },
    {
        imageUrl: '/Assets/Hero1.jpeg',
        title: 'Card title 1',
        text: 'This is a wider card with supporting.',
    },
    {
        imageUrl: '/Assets/Hero1.jpeg',
        title: 'Card title 1',
        text: 'This is a wider card with supporting.',
    },
    {
        imageUrl: '/Assets/Hero1.jpeg',
        title: 'Card title 1',
        text: 'This is a wider card with supporting.',
    },
    {
        imageUrl: '/Assets/Hero1.jpeg',
        title: 'Card title 1',
        text: 'This is a wider card with supporting.',
    },
    {
        imageUrl: '/Assets/Hero1.jpeg',
        title: 'Card title 1',
        text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
        imageUrl: '/Assets/Hero1.jpeg',
        title: 'Card title 1',
        text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
      {
          imageUrl: '/Assets/Hero1.jpeg',
          title: 'Card title 1',
          text: 'This is a wider card with supporting.',
      },
  ];
  return (
    <div>
      <CustomNavbar />
      <Container>
        <Row className="d-flex justify-content-center">
          {cardData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <CardComponent
                imageUrl={card.imageUrl}
                title={card.title}
                text={card.text}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Product;