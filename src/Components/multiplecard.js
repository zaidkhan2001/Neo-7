import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MultipleCard = () => {
  return (
    <div className="container py-4 px-4">
      <div className="row no-gutters">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <img 
                src="/Assets/mission.png" 
                className="img-fluid" 
                alt="Placeholder" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <h5 className="card-title text-center">Our Misson</h5>
              <p className="card-text">
              To provide a complete service package tailored to our customers' needs, ensuring high-quality products, and consistent supply from product development to logistics.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Documentary About Sialkot</h5>
              <iframe
                width="100%"
                height="250px"
                src="https://www.youtube.com/embed/ROILwfLzfYg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <img 
                src="/Assets/vision.jpg" 
                className="img-fluid" 
                alt="Placeholder" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <h5 className="card-title text-center">Our Vision</h5>
              <p className="card-text">
              To simplify the manufacturing process for buyers by offering flexible, honest, and responsible solutions that make a positive impact through our attention to detail and dedication to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleCard;