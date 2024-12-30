import React, { useState } from "react";
import { Carousel, Button, ButtonGroup } from "react-bootstrap";
import "/src/ImageCarousal.css"; // Include your custom CSS
import founder from "/src/assets/images (1).jpg";
import slide1 from "/src/assets/pexels-nextvoyage-1470405.jpg";
import slide2 from "/src/assets/oriental-peal-tower-shanghai.jpg";
import slide3 from "/src/assets/pexels-photo-442579.jpeg";
import slide4 from "/src/assets/skyscrapers-palm-trees-dubai-uae.jpg";
import slide5 from "/src/assets/pexels-photo-4471199.jpeg";
import slide6 from "/src/assets/pexels-photo-10549876.jpeg";
import img1 from "/src/assets/dubai-islands-residences-jpg-Dv0SdikO.webp";
import { FiMove } from "react-icons/fi";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa";

const ImageCarousel = () => {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [isOverlayHidden, setOverlayHidden] = useState(false);

  const toggleOverlayVisibility = () => {
    setOverlayHidden(!isOverlayHidden);
  };

  const moveOverlayPositions = () => {
    // Logic to change the position of carousel overlay items
    const overlayItems = document.querySelectorAll(".carousel-overlay");
    overlayItems.forEach((item) => {
      item.style.transform = `translate(${Math.random() * 50}px, ${Math.random() * -30}px)`;
    });
  };
  const moveOverlayPosition = (event) => {
    const overlayItems = document.querySelectorAll(".carousel-overlay,.carousel-overlay1");
    const item = event.target.closest('.carousel-overlay,.carousel-overlay1');

    if (item) {
      let shiftX = event.clientX;
      let shiftY = event.clientY;

      const onMouseMove = (moveEvent) => {
        moveEvent.preventDefault();

        const newX = moveEvent.clientX - shiftX;
        const newY = moveEvent.clientY - shiftY;

        item.style.transform = `translate(${newX}px, ${newY}px)`;
      }; 

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  }; 
  return (
    <div className="Carousel-container">
    <Carousel indicators={false} interval={3000}>
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
              <div className="carousel-overlay active about-us" >
                <h2 className="pt-2 pb-1" >ABOUT US</h2>
                <p>PARADIGM Shaping Tomorrow with a forward-thinking approach that prioritizes the individual — employee, client, and end-user. Our senior leadership team brings over 70 years of experience.


                </p>
                <a href="" className="text-dark fw-bold">
                  More
                </a>
              </div>
              <div className="carousel-overlay active news" >
                <h2 className="pt-2 pb-1">NEWS</h2>
                <p>Stay updated with the latest news and updates from our team.</p>
                <p>
Follow us for more insights and updates!</p>
                <a href="" className="text-dark fw-bold">
                  More
                </a>
              </div>
              <div className="carousel-overlay active contact-us"  >
                <h2 className="pt-2 pb-1">CONTACT US</h2>
                <p>
                  PARADIGM Engineering Consultant LLC, Office #806, Saheel Tower 1, Al Nahda 1,
                  Dubai, UAE <br />
                  <br />
                  admin@PARAD-ec.com <br />
                  P: +971 45850899 <br />
                </p>
                <a href="" className="text-dark fw-bold">
                  More
                </a>
              </div>
              <div className="carousel-overlay active founder">
                <img
                  src={founder}
                  alt="Founder"
             
                />
                <h2 className="pt-1"  >FOUNDER</h2>
                <p className="px-1">Our founder's journey and vision for the future.</p>
              </div>
              <div className="carousel-overlay active founder1" >
                <img
                  src={img1}
                  alt="Founder"
                  className="img-fluid"
                 
                />
                <h2 className="pt-1">PARADIGM</h2>
                <p className="px-1">Designing the Blueprint of the Future With Us</p>
              </div>
              <div className="carousel-overlay active image-gallery" >
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
                        <p>OUR PROJECTS</p>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="carousel-overlay active archive-search"  >
  <h2 className="pt-2 pb-1">SERVICES</h2>
  

  <ul>
    <li>
      <a href="#optionA">Architecture</a>
    </li>
    <li>
      <a href="#optionB">Landscape</a>
    </li>
    <li>
      <a href="#optionC">Structural Engineering</a>
    </li>
    <li>
      <a href="#optionD">Interior Architecture</a>
    </li>
    <li>
      <a href="#optionE">Mechanical Engineering</a>
    </li>
    <li>
      <a href="#optionF">Project Management</a>
    </li>
  </ul>
</div>

            </>
          )}

          <div className="carousel-overlay1 active button-group-overlay" onMouseDown={moveOverlayPosition}  >
            <ButtonGroup>
              <Button 
         
                className="border border-2 px-5 "
         
              >
              Explore
              </Button>
              <Button 
               
                className="border border-2 px-3"
                onClick={moveOverlayPositions}
              >
                <FaBars /> {/* Menu icon */}
              </Button>
              <Button 
               
                className="border border-2 px-3"
                onClick={toggleOverlayVisibility} // Toggle overlay visibility
              >
                <FiMove /> {/* Move icon */}
              </Button>
            </ButtonGroup>
          </div>        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default ImageCarousel;
