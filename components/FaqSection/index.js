import React from "react";
import Slider from "react-slick";

function FaqSection() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img
      src="/svg/black-arrow-left.svg"
      className="left-arrow"
      alt="prevArrow"
      {...props}
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src="/svg/black-arrow-right.svg" alt="nextArrow" {...props} />
  );
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="faq-section" id="faqs">
      <div className="faq-section-inner">
        <div className="heading-wrapper">
          <div className="title">
            <div className="left-hat-img">
              {/* <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" /> */}

              <img src="/svg/hat.svg" alt="" />
            </div>
            <div className="right-hat-img">
              <img src="/svg/hat.svg" alt="" />
            </div>
            FAQs
          </div>
        </div>
        <div className="grid-container">
          <div className="first-item-image-container">
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
          </div>
          <div className="faq-section-inner">
            <Slider {...settings}>
              <div className="faq-card-wrapper">
                <div className="faq-card">
                  <div className="title"> How do I purchase a Somos NFT? </div>
                  <div className="desc">
                    1. Fund your wallet with enough ETH to cover the price of
                    the number of NFTs you want to purchase plus the gas fees.
                    <br />
                    2. Connect your wallet to our mint page.
                    <br />
                    3. Click the Mint buWon. 4. Your NFT will appear in your
                    wallet.
                    <a
                      href="https://forbes.com/advisor/invesSng/what-is-cryptocurrency/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Learn More...
                    </a>{" "}
                  </div>
                </div>
                <div className="faq-card">
                  <div className="title">
                    What is a Non-Fungible Token (NFT)?
                  </div>
                  <div className="desc">
                    A non-fungible token is a unique unit of data stored on a
                    digital ledger. NFTs are used to tokenize items such as
                    photos, videos, audio, and other types of digital files as
                    unique items, and use blockchain technology to establish a
                    verified and public proof of ownership.{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="hWps://youtu.be/MjsQMAd7_SA"
                    >
                      Learn More...{" "}
                    </a>{" "}
                  </div>
                </div>
                <div className="faq-card">
                  <div className="title">How do I get a MetaMask account?</div>
                  <div className="desc">
                    Go to MetaMask.io and click the “Download” button, to
                    download the extension or app for your browser and device.
                    NOTE: The MetaMask extension is not compatible with Safari
                    Browser. Supported browsers include: Google Chrome, Firefox,
                    and Brave.
                  </div>
                </div>
              </div>
              <div className="faq-card-wrapper">
                <div className="faq-card">
                  <div className="title">What is the Blockchain?</div>
                  <div className="desc">
                    The Blockchain is a system of recording information in a way
                    that makes it difficult or impossible to change, hack, or
                    cheat the system. A blockchain is essentially a digital
                    ledger of transactions that is duplicated and distributed
                    across the entire network of computer systems on the
                    blockchain.
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.investopedia.com/terms/b/blockchain.asp"
                    >
                      Learn More...{" "}
                    </a>{" "}
                  </div>
                </div>
                <div className="faq-card">
                  <div className="title">How many mintable NFTs are there?</div>
                  <div className="desc">
                    The Somos Collection is a digital collection of 10,000
                    unique NFTs (non-fungible tokens) that will be minted in
                    mulSple releases via the Migente Project.
                  </div>
                </div>
                <div className="faq-card">
                  <div className="title">
                    How many NFTs will be made available for the pre-sale?
                  </div>
                  <div className="desc">
                    Only 2,000 will be released for the pre-sale.
                  </div>
                </div>
              
              </div>
            </Slider>
          </div>
          <div className="last-item-image-container">
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-light.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
