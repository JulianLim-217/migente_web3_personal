import React from 'react'
import Slider from "react-slick";
import LeftArrow from "../../public/svg/left-arrow.svg"
import RightArrow from "../../public/svg/arrow-right.svg"
import ScrollToSeeMore from '../ScrollToSeeMore';

function TeamSection() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src="/svg/left-arrow.svg" className="left-arrow" alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src="/svg/arrow-right.svg" alt="nextArrow" {...props} />
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="team-section" id="team">
      <div className="team-section-inner">

        <div className="heading-text">
          <div className="left-text">
            The
          </div>
          <div className="right-text">
            TEAM
          </div>
        </div>
        <div className="team-inner-container">
          <div className="top-border-line"></div>
          <Slider {...settings}>
            <div className="team-card-wrapper">
              <div className="team-card">
                <div className="img-wrapper">
                  <img src="/image/Team_image/team-avatar.png" alt="" />
                </div>
                <div className="avatar-info">
                  <div className="name">Dvn the designeer</div>
                  <div className="role">Head designer</div>
                </div>
              </div>
            </div>
            <div className="team-card-wrapper">
              <div className="team-card">
                <div className="img-wrapper">
                  <img src="/image/Team_image/team-avatar.png" alt="" />
                </div>
                <div className="avatar-info">
                  <div className="name">Dvn the designeer</div>
                  <div className="role">Head designer</div>
                </div>
              </div>
            </div>
            <div className="team-card-wrapper">
              <div className="team-card">
                <div className="img-wrapper">
                  <img src="/image/Team_image/team-avatar.png" alt="" />
                </div>
                <div className="avatar-info">
                  <div className="name">Dvn the designeer</div>
                  <div className="role">Head designer</div>
                </div>
              </div>
            </div>
            <div className="team-card-wrapper">
              <div className="team-card">
                <div className="img-wrapper">
                  <img src="/image/Team_image/team-avatar.png" alt="" />
                </div>
                <div className="avatar-info">
                  <div className="name">Dvn the designeer</div>
                  <div className="role">Head designer</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="scroll-to-see-more">
          <ScrollToSeeMore scrollRef="nfts" />

        </div>
      </div>
    </div>
  )
}

export default TeamSection