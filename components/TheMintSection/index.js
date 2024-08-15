import React from 'react'

const TheMintSection = () => {
  return (
    <div className='the-mint-section'>
        
        <div className='section-title'>
            <h1>Mint Info</h1>
            <div className='border-left'></div>
        </div>


        <div className='main'>

            <div className='mint-info'>
                <main>
                    <div>
                        <img src="/svg/decorative-flower-dark.svg" alt="" />
                        <p>2,000 Tokens</p>
                    </div>
                    <div>
                        <img src="/svg/decorative-flower-lite.svg" alt="" />
                        <p>Only 2,000 NFTs are served for the pre-sale</p>
                    </div>
                    <div>
                        <img src="/svg/decorative-flower-dark.svg" alt="" />
                        <p>Price: $300</p>
                    </div>
                </main>

                <footer>
                    <h4>PRE-SALE </h4>
                    <p> August 11th 2023 </p>
                </footer>
            </div>

            <div className='mint-info'>
                <main>
                    <div>
                        <img src="/svg/decorative-flower-dark.svg" alt="" />
                        <p>Remaining 8,000 NFTs - $375 each</p>
                    </div>
                    <div>
                        <img src="/svg/decorative-flower-lite.svg" alt="" />
                        <p>Referral Bonuses for Presale Minters</p>
                    </div>
                </main>

                <footer>
                    <h4>PUBLIC MINT</h4>
                    <p> September 11th 2023</p>
                </footer>
            </div>
        </div>

    </div>
  )
}

export default TheMintSection