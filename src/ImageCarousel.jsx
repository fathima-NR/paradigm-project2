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
      item.style.transform = `translate(${Math.random() * -100}px, ${Math.random() * 100}px)`;
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
              <div className="carousel-overlay about-us"  onMouseDown={moveOverlayPosition} >
                <h2 className="pt-2 pb-1" >ABOUT US</h2>
                <p>
                  PARADIGM Shaping Tomorrow. We believe in a forward-thinking approach that places the
                  individual first - the employee, the client, the end-user. Our founding senior
                  leadership team has over 70 years of cumulative experience in design and project
                  delivery, providing hands-on consultancy services in the UAE across healthcare,
                  commercial, residential, and urban development sectors.
                </p>
                <a href="" className="text-dark fw-bold">
                  More
                </a>
              </div>
              <div className="carousel-overlay news" onMouseDown={moveOverlayPosition}>
                <h2 className="pt-2 pb-1">NEWS</h2>
                <p>Stay updated with the latest news and updates from our team.</p>
                <a href="" className="text-dark fw-bold">
                  More
                </a>
              </div>
              <div className="carousel-overlay contact-us"  onMouseDown={moveOverlayPosition}>
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
              <div className="carousel-overlay founder" onMouseDown={moveOverlayPosition}>
                <img
                  src={founder}
                  alt="Founder"
             
                />
                <h2 className="pt-2"  >FOUNDER</h2>
                <p className="px-1">Our founder's journey and vision for the future.</p>
              </div>
              <div className="carousel-overlay founder1"  onMouseDown={moveOverlayPosition}>
                <img
                  src={img1}
                  alt="Founder"
                  className="img-fluid"
                 
                />
                <h2 className="pt-2">PARADIGM</h2>
                <p className="px-1">Designing the Blueprint of the Future With Us</p>
              </div>
              <div className="carousel-overlay image-gallery"  onMouseDown={moveOverlayPosition}>
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
              <div className="carousel-overlay archive-search"  onMouseDown={moveOverlayPosition}>
  <h2 className="pt-2 pb-1">ARCHIVE SEARCH</h2>
  <input
    type="text"
    placeholder="KeyWord Search"
    style={{
      width: "100%",
      padding: "10px",
      marginTop: "10px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      border: "none",
      color: "white",
    }}
  />
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

          <div className="carousel-overlay1 button-group-overlay" onMouseDown={moveOverlayPosition}  >
            <ButtonGroup>
              <Button 
         
                className="border border-2 px-5 "
         
              >
              Explore Now
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
