import React from 'react'

function ScrollToSeeMore(scrollRef) {
    // KEEP SCROLLING for section
    const startScroll = () => {
        const element = document.getElementById(scrollRef.scrollRef);
        element.scrollIntoView();
    }
    return (
        <div className='scroll-btn' onClick={() => startScroll()}>
            <div className='icon'>
                <img src="/svg/click_to_scroll.svg" alt="Scroll to see more" />
            </div>
            <div className='content' >
                Scroll to see more
            </div>
        </div>
    )
}

export default ScrollToSeeMore