import React, { useState } from 'react'

function BottomNavbar() {
  const [isActive, setIsActive] = useState(1)
  const [showNavbar, setShowNavbar] = useState(false)
  const showNavbarFunc = () => setShowNavbar(!showNavbar);



  return (
    <div className="bottom-navbar-container">
      <div className="menu-list-wrapper">
        <a href="#" className={`${isActive === 1 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(1)}>
          Home
          <div className={`${isActive === 1 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>
        </a>
        <a href="#project" className={`${isActive === 2 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(2)}  >
          The Project
          <div className={`${isActive === 2 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>

        </a>
        <a href="#perks" className={`${isActive === 3 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(3)}  >
          Mint Perks
          <div className={`${isActive === 3 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>


        </a>
        <a href="#nfts" className={`${isActive === 4 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(4)}  >
          NFTs
          <div className={`${isActive === 4 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>


        </a>

        <a href="#mint" className={`${isActive === 5 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(5)}  >
          Mint
          <div className={`${isActive === 5 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>


        </a>
        <a href="#faqs" className={`${isActive === 6 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(6)}  >
          FAQS

        </a>
      </div>

      {/* mobile bottom navbar */}
      <div className="mobile-menu-list-container">
        <div className="menu-icon-wrapper" onClick={showNavbarFunc}>
          <div className="label">
            Home
          </div>
          <div className="menu-icon">
            <img src="/svg/menu.svg" alt="" />
          </div>
        </div>

        <div className={showNavbar ? "mobile-menu-list-wrapper active" : "mobile-menu-list-wrapper"}>

          {/* <div className="menu-icon">
            <img src="/svg/menu.svg" alt="" />
          </div> */}
          <div className={`${isActive === 1 ? 'active menu-items menu-icon-wrapper' : 'menu-items menu-icon-wrapper'}`}>
            <a href="#" className="label" onClick={() => setIsActive(1)} >
              Home
            </a>
            <div className="menu-icon" onClick={showNavbarFunc}>
              <img src="/svg/close-circle.svg" alt="" />
            </div>
          </div>
          <a href="#project" className={`${isActive === 2 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(2)}  >
            The Project
            <div className={`${isActive === 2 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>

          </a>
          <a href="#perks" className={`${isActive === 3 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(3)}  >
            Mint Perks
            <div className={`${isActive === 3 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>


          </a>
          <a href="#nfts" className={`${isActive === 4 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(4)}  >
            NFTs
            <div className={`${isActive === 4 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>


          </a>

          <a href="#mint" className={`${isActive === 5 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(5)}  >
            Mint
            <div className={`${isActive === 5 ? 'border-right-line border-line-active ' : 'border-right-line '}`}></div>


          </a>
          <a href="#faqs" className={`${isActive === 6 ? 'active menu-items ' : 'menu-items '}`} onClick={() => setIsActive(6)}  >
            FAQS

          </a>
        </div>
      </div>
    </div>
  )
}

export default BottomNavbar