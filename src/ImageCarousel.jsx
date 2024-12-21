import React, { useState } from "react";
import { Carousel, Button, ButtonGroup } from "react-bootstrap";
import '/src/ImageCarousal.css'; // Make sure to include your custom CSS
import founder from  "/src/assets/images (1).jpg";
import slide1 from  "/src/assets/1074_puert_phot_09-1514x1080.jpg"
import slide2 from   "/src/assets/1199_fg_089copy-1440x1080.jpg"
import slide3 from "/src/assets/1229_ega212-1514x1080.jpg"
import slide4 from "/src/assets/1074_puert_phot_09-1514x1080.jpg"
import slide5 from "/src/assets/1199_fg_089copy-1440x1080.jpg"
import slide6 from "/src/assets/1229_ega212-1514x1080.jpg"
import img1 from "/src/assets/dubai-islands-residences-jpg-Dv0SdikO.webp";
import { FiMove } from 'react-icons/fi'; 
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa"; // For icons

const ImageCarousel = () => {
    const images = [slide1, slide2, slide3, slide4, slide5, slide6];

  const [isOverlayHidden, setOverlayHidden] = useState(false);

  const toggleOverlayVisibility = () => {
    setOverlayHidden(!isOverlayHidden);
  };

  const moveOverlayPosition = () => {
    // Logic to change the position of carousel overlay items
    const overlayItems = document.querySelectorAll('.carousel-overlay');
    overlayItems.forEach(item => {
      item.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
    });
  };

  return (
    <Carousel indicators={false}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ height: "100vh", objectFit: "cover" }}
          />
          
          {/* Conditional Rendering: Show overlays only when not hidden */}
          {!isOverlayHidden && (
            <>
              <div className={`carousel-overlay about-us ${!isOverlayHidden ? '' : 'hidden'}`}>
                <h2 className="fs-6">About Us</h2>
                <p>PARADIGM Shaping
                Tomorrow
                We believe in a forward-thinking approach that places the individual first - the employee, the client, the end-user. Our founding senior leadership team has over 70 years of cumulative experience in design and project delivery, providing hands-on consultancy services in the UAE across healthcare, commercial, residential, and urban development sectors.</p>
                <a href="" className="text-light">More</a>
              </div>
              <div className={`carousel-overlay news ${!isOverlayHidden ? '' : 'hidden'}`}>
                <h2 className="fs-6">News</h2>
                <p>Stay updated with the latest news and updates from our team.</p>
                <a href="" className="text-light">More</a>
              </div>
              <div className={`carousel-overlay contact-us ${!isOverlayHidden ? '' : 'hidden'}`}>
                <h2 className="fs-6">Contact Us</h2>
                <p>PARADIGM Engineering Consultant LLC,Office #806,Saheel Tower 1, Al Nahda 1, Dubai,UAE <br />
                <br />
                admin@PARAD-ec.com <br /> 
                P:+971 45850899 <br />
                </p>
                <a href="" className="text-light">More</a>
              </div>
              <div className={`carousel-overlay founder ${!isOverlayHidden ? '' : 'hidden'}`}>
                <img 
                  src={founder} // Replace with the path to your founder image
                  alt="Founder"
                  style={{ width: "100%", height: "auto" }}
                />
                <h2 className="fs-6">Founder</h2>
                <p>Our founder's journey and vision for the future.</p>
              </div>
              <div className={`carousel-overlay founder1 ${!isOverlayHidden ? '' : 'hidden'}`}>
                <img 
                  src={img1} // Replace with the path to your founder image
                  alt="Founder"
                  style={{ width: "100%", height: "auto" }}
                />
                <h2 className="fs-6">PARADIGM Engineering Consultant LLC</h2>
                <p>Designing the Blueprint of the Future</p>
              </div>
              <div className={`carousel-overlay image-gallery ${!isOverlayHidden ? '' : 'hidden'}`}>
                <Carousel indicators={false} controls={false} interval={3000} fade>
                  {images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100 small-gallery-image"
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        style={{ height: "auto", objectFit: "cover" }}
                      />
                      <div className="caption">
                        <p>Caption for Image </p>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className={`carousel-overlay archive-search ${!isOverlayHidden ? '' : 'hidden'}`}>
                <h2 className="fs-6">Archive Search</h2>
                <input 
                  type="text" 
                  placeholder="KeyWord Search" 
                  style={{ width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "rgba(255, 255, 255, 0.7)", border: "none", color: "white" }}
                />
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li><a href="#optionA" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "5px" }}>Architecture</a></li>
                  <li><a href="#optionB" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "5px" }}>Landscape</a></li>
                  <li><a href="#optionC" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "5px" }}>Structural Engineering</a></li>
                  <li><a href="#optionD" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "5px" }}>Interior Architecture</a></li>
                  <li><a href="#optionE" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "5px" }}>Mechanical Engineering</a></li>
                  <li><a href="#optionF" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "5px" }}>Project Management</a></li>
                </ul>
              </div>
            </>
          )}

          <div className="carousel-overlay1 button-group-overlay">
            <ButtonGroup>
              <Button variant="light" className="border border-2 px-5">Enter</Button>
              <Button variant="light" className="border border-2" onClick={moveOverlayPosition}>
                <FaBars /> {/* Menu icon */}
              </Button>
              <Button variant="light" className="border border-2" >
                <FiMove /> {/* Menu icon */}
              </Button>
            </ButtonGroup>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
