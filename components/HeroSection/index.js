import React from "react";
import Button from "../Button";
import ScrollToSeeMore from "../ScrollToSeeMore";
import { useCountdown } from "@/hooks/useCount";

function HeroSection() {
  
  const targetDate = new Date("August 11, 2023 00:00:00");

  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <section className="hero-section" id="hero">
      <div className="background">
        <div className="mobile-backdrop"></div>
        <img className="actor-1" src="/image/actor-1.png" alt="actor-1" />
        <img className="actor-2" src="/image/actor-2.png" alt="actor-1" />
        <img className="actor-3" src="/image/city.png" alt="actor-1" />
      </div>
      <div className="empty"></div>
      <div className="intro">
        <div className="heading">Migente</div>
        <div className="sub-heading">
          <div className="vertical-bar"></div>
          <div className="content">
            The Genesis -  August 11th 2023
            <br />
            <p>Presale {`${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`}</p>
          </div>
        </div>
        <div className="action-btns">
          <Button variant="fill" value="Mint" href={"/#mint"} />
          <Button
            variant="outline"
            value="Join us"
            href={"https://discord.com/invite/7jNCcNpzPn"}
          />
        </div>
        <ScrollToSeeMore scrollRef="project" />
      </div>
    </section>
  );
}

export default HeroSection;
