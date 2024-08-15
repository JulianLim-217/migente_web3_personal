import React, { useState } from "react";
import ScrollToSeeMore from "../ScrollToSeeMore";

function ProjectSection() {
  return (
    <div className="project-section" id="project">
      <div className="spot-light"></div>

      <div className="project-section-inner">
        <div className="project-inner-container">
          <div className="left-text-div">
            <div className="heading-wrapper">
              <div className="title">
                 <span>The Project</span>
                {/* <div className="vertical-line"></div>
                <div className="horizontal-line"></div> */}
              </div>
            </div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
              The Mi Gente Project was born from a profound respect for Hispanic and Latin American culture, aiming to empower future change-makers with resources and knowledge to build a lasting legacy of wealth. While focusing on Latino culture, Mi Gente represents the resilience and determination of all individuals.
              </div>
            </div>
            {/* <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                but also by a strong aspiration to equip the upcoming cohort of
                change-makers with the necessary resources and expertise to
                establish a legacy of wealth across generations.
                While emphasizing the Latino culture, Mi Gente embodies the
                tenacity and determination of all individuals.
              </div>
            </div> */}
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                Utility - VIP wealth building community that gives you access to Top Entrepreneurs, and opportunities on a monthly basis. NFT users who register for the monthly VIP classes will receive a monthly reflection of up to 10%. You will earn and learn as long as you hold onto the NFT. 
              </div>
            </div>

            <div className="scroll-to-see-more">
              <ScrollToSeeMore scrollRef="team" />
            </div>
          </div>
          <div className="right-image-div">
            {/* <div className={`spotlight-container ${isSpotlightActive ? 'active' : ''}
            `}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              <div className="spotlight" style={{ left: spotlightPosition.x, top: spotlightPosition.y }} />
            </div> */}
            {/* <img src="http://upload.wikimedia.org/wikipedia/commons/5/51/Fox_Head.jpg" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
