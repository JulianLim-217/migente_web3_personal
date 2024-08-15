import React, { useState, useEffect } from 'react'


const UtilityEarningSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 6;

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalCards - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - 1 : prevIndex - 1));
  };

  const images = [
    "/image/utilities/laptop2.svg",
    "/image/utilities/car.svg",
    "/image/utilities/ETH 1.svg",
  ]

  const interval = 2000;

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [interval]);



  return (
    <div className='utility-earning-section' id='perks'>


      <div className='heading'>
        <div className='seperator-left'></div>
        <div className='main-text'>
          <h1>MINT PERKS</h1>
          {/* <p>
            <br />
          </p> */}
        </div>
        <div className="seperator-right"></div>
      </div>


      <div className='card-slider-main'>

        <div className='left-points'>

          <div className="arrow left-arrow" onClick={goToPreviousCard}>
            <img src="/image/arrow-right.svg" alt="" />
          </div>
          <div className="arrow right-arrow" onClick={goToNextCard}>
            <img src="/image/arrow-right.svg" alt="" />
          </div>

          <div className={`card ${currentIndex === 0 ? 'active' : ''}`}>
            <div className='elipse-container'>
              <div></div>
            </div>

            <p> Mint Rewards will feature 5 winners of $5,000 USDT </p>
          </div>

          <div className={`card ${currentIndex === 1 ? 'active' : ''}`}>
            <div className='elipse-container'>
              <div></div>
            </div>

            <p> Everyone participating in the pre-sale will receive an exclusive opportunity to earn a percentage of every NFT sold during the public sale using their unique referral link. Links will only be available for pre-sale participants.  </p>
          </div>

          <div className={`card ${currentIndex === 2 ? 'active' : ''}`}>
            <div className='elipse-container'>
              <div></div>
            </div>

            <p> Presale Purchasers are eligible to winning 10 Mac books and 1 Jeep Cherokee </p>
          </div>
        </div>


        <div className='centered-img'>
          <img src={images[currentImageIndex]} interval={interval} alt="Earning" />
        </div>
        <div className='left-points right-points'>
          <div className={`card ${currentIndex === 3 ? 'active' : ''}`}>
            <div className='elipse-container'>
              <div></div>
            </div>

            <p> The Presale will feature 2,000 NFTs, each presale mint makes the wallet holder eligible to increasing referral rewards </p>
          </div>

          <div className={`card ${currentIndex === 4 ? 'active' : ''}`}>
            <div className='elipse-container'>
              <div></div>
            </div>

           
            <p>A number of free NFTs will be awarded to the highest referrers  </p>
          </div>

          <div className={`card ${currentIndex === 5 ? 'active' : ''}`}>
            <div className='elipse-container'>
              <div></div>
            </div>

            <p> Referral rewards increase according to how many tokens you acquire during the presale. Buying 1, earns you 2%. Buying 2-4, earns you 5%. Buying 5 or more earns you 10%  </p>
          </div>


        </div>

        <div className='nav-slider' >
          <div className={`slider ${currentIndex === 0 ? 'active-slider' : ''}`}></div>
          <div className={`slider ${currentIndex === 1 ? 'active-slider' : ''}`}></div>
          <div className={`slider ${currentIndex === 2 ? 'active-slider' : ''}`}></div>
          <div className={`slider ${currentIndex === 3 ? 'active-slider' : ''}`}></div>
          <div className={`slider ${currentIndex === 4 ? 'active-slider' : ''}`}></div>
          <div className={`slider ${currentIndex === 5 ? 'active-slider' : ''}`}></div>
        </div>

      </div>
    </div>
  )
}

export default UtilityEarningSection