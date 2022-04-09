import React, { useState } from "react";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,

  items: 6,
  autoplay: true,
  nav: true,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>",
  ],

  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};
const Carousel = () => {
  const [state] = useState([
    {
      id: 1,
      customer_name: "John",
      testimonial_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever",
      rating: 4,
    },
    {
      id: 1,
      customer_name: "John Doe",
      testimonial_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever",
      rating: 4,
    },
    {
      id: 1,
      customer_name: "Lama",
      testimonial_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever",
      rating: 4.5,
    },
    {
      id: 1,
      customer_name: "Dev",
      testimonial_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever",
      rating: 3,
    },
    {
      id: 1,
      customer_name: "Thapa",
      testimonial_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever",
      rating: 5,
    },
    {
      id: 1,
      customer_name: "John Doe",
      testimonial_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever",
      rating: 4,
    },
  ]);

  return (
    <div>
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        {state.map((item) => (
          <div className="item" key={`testimonial_${item.id}`}>
            <div className="card text-center">
              <img
                className="card-img-top"
                src="https://webtoolfeed.files.wordpress.com/2011/12/1.jpg"
                alt=""
              />

              <div className="card-body">
                <h5>
                  {item.customer_name} <br />
                </h5>
                <p className="card-text">“{item.testimonial_text}” </p>

                {/* <Rater total={5} rating={2} /> */}
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
