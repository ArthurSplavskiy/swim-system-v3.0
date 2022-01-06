import React, { useEffect } from 'react'
import SwimIcon from '../img/icons/swim-1.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const GalleryString = ({ direct }) => {

    useEffect(() => {

        ScrollTrigger.matchMedia({

            "(min-width: 993px)": function() {
                // LETTERS
                gsap.to('.string-line_left', {
                    xPercent: 300,
                    duration: 4,
                    // ease: 'none',
                    scrollTrigger: {
                        trigger: '.gallery-block',
                        start: 'top top',
                        end: '+=14500', // 8000
                        scrub: 1,
                        pin: true,
                    }
                })

                gsap.to('.string-line_right', {
                    xPercent: -300,
                    duration: 4,
                    // ease: 'none',
                    scrollTrigger: {
                        trigger: '.gallery-block',
                        start: 'top top',
                        end: '+=14500', // 8000
                        scrub: 1,
                        pin: true,
                    }
                })
                // ===
            }
        })
        
    }, [])

    const directValue = 'string-line string-line_'+direct;

    return (
        <div className={directValue}>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
            <span>swim</span><img src={SwimIcon} alt="Swim System" /><span>system</span>
        </div>
    )
}

export default GalleryString