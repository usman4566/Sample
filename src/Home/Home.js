import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "font-awesome/css/font-awesome.min.css";

function Home() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleIncrement = (type) => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else {
      setChildren(children + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="home">
        <div className="text-container">
          <div className="paradise">PARADISE</div>
          <div className="hotel">HOTEL</div>
        </div>
        <Button className="purchase-button" variant="contained">
          Purchase Now
        </Button>
        <div className="home-text">Top Sellar and Rated Hotel Template</div>
        <div className="button-container">
          <Button className="demo-button" variant="contained">
            View Main Demo
          </Button>
          <Button className="other-button" variant="contained">
            View Other Demos
          </Button>
        </div>
        <div class="search-form-container" data-aos="fade-up">
          <div class="input-container">
            <DateRangePicker
              startDate={startDate}
              startDateId="start_date_id"
              endDate={endDate}
              endDateId="end_date_id"
              onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
              isOutsideRange={(day) => startDate && day.isBefore(startDate)}
              startDatePlaceholderText="Check In"
              endDatePlaceholderText="Check Out"
            />
            <i class="fas fa-calendar-alt calendar-icon"></i>
          </div>

          <div class="input-container number-input">
            <label className="field-label">Adults</label>
            <button
              class="decrement-button"
              onClick={() => handleDecrement("adults")}
            >
              -
            </button>
            <input
              class="number-field"
              placeholder="Adults"
              value={adults}
              readOnly
            />
            <button
              class="increment-button"
              onClick={() => handleIncrement("adults")}
            >
              +
            </button>
          </div>

          <div class="input-container number-input">
            <label className="field-label">Children</label>
            <button
              class="decrement-button"
              onClick={() => handleDecrement("children")}
            >
              -
            </button>
            <input
              class="number-field"
              placeholder="Children"
              value={children}
              readOnly
            />
            <button
              class="increment-button"
              onClick={() => handleIncrement("children")}
            >
              +
            </button>
          </div>

          <button class="search-button">Search</button>
        </div>
      </div>
      <div className="main_title_2">
        <span>
          <em></em>
        </span>
        <h2>Other Demos</h2>
        <p>Check other default demos, which show some features available</p>
      </div>
      <div className="card-container">
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card1.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Home MP4 Video bg</div>
        </div>
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card2.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Home Carousel</div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card3.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Home FlexSlider</div>
        </div>
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card4.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Home Youtube/Vimeo</div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card5.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Working Booking Request</div>
        </div>
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card6.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Menu Version 2</div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card7.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Menu Version 3</div>
        </div>
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card8.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Menu with submenus</div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card9.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Restaurant Page</div>
        </div>
        <div className="card-set" data-aos="fade-up">
          <div className="card">
            <a href="/">
              <img src="/Card10.png" alt="Card 1" />
            </a>
          </div>
          <div className="card-text">Masonry Gallery</div>
        </div>
      </div>
      <div className="offwhite-div">
        <span>
          <em></em>
        </span>
        <h2>Some Customer Reviews</h2>

        <div className="reviews-container">
          <div className="review-box">
            <div className="review-header">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <h4>Review Title 1</h4>
            </div>
            <div className="review-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="person-info">
              <p>Andy, Designer</p>
            </div>
          </div>
          <div className="review-box">
            <div className="review-header">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <h4>Review Title 1</h4>
            </div>
            <div className="review-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="person-info">
              <p>Andy, Designer</p>
            </div>
          </div>
          <div className="review-box">
            <div className="review-header">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <h4>Review Title 1</h4>
            </div>
            <div className="review-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="person-info">
              <p>Andy, Designer</p>
            </div>
          </div>
        </div>

        <div className="reviews-container">
          <div className="review-box">
            <div className="review-header">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <h4>Review Title 1</h4>
            </div>
            <div className="review-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="person-info">
              <p>Andy, Designer</p>
            </div>
          </div>
          <div className="review-box">
            <div className="review-header">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <h4>Review Title 1</h4>
            </div>
            <div className="review-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="person-info">
              <p>Andy, Designer</p>
            </div>
          </div>
          <div className="review-box">
            <div className="review-header">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <h4>Review Title 1</h4>
            </div>
            <div className="review-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="person-info">
              <p>Andy, Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dark">
        <span>
          <em></em>
        </span>
        <h2>
          Don't miss the item<span className="bold-price"> for only $24</span>
        </h2>
        <Button className="purchase2" variant="contained">
          Purchase Now
        </Button>
      </div>

      <div className="main_title_2">
        <span>
          <em></em>
        </span>
        <h2>Other Premimum Templates</h2>

        <Slider {...settings} className="my-slider">
          <div className="slider-container">
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/Slider1.png)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/Slider2.png)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/Slider3.png)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
          </div>

          <div className="slider-container">
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/5.jpg)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/6.jpg)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/7.jpg)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
          </div>

          <div className="slider-container">
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/Home1.png)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/Home2.png)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
            <div
              className="slider-card"
              style={{ backgroundImage: "url(/Home3.png)" }}
              onClick={() => (window.location.href = "/")}
            ></div>
          </div>
        </Slider>
        <div className="portfolio-button">
          <Button className="portfolio" variant="contained">
            View Portfoloio
          </Button>
        </div>
      </div>
      <div className="footer">
        © 2023. All rights reserved. Created by Usman
      </div>
    </div>
  );
}

export default Home;
