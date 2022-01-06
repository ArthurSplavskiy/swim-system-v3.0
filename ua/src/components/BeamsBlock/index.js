import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import table1 from '../../img/table-1.svg'
import table2 from '../../img/table-2.svg'
import table3 from '../../img/table-3.svg'
import parallaxSwimmer from '../../img/swim-swimmer.png'
import parallaxSwimmerWebp from '../../img/webp/swim-swimmer.webp'
import drops from '../../img/drops.png'
import dropsWebp from '../../img/webp/drops.webp'
import './index.scss'

const BeamsBlock = () => {

    let tablesItem = useRef(null)
    let dropsItem = useRef(null)
    let swimmerImage = useRef(null)
    
    useEffect(() => {
        let swimmerHeight

        swimmerImage.current.onload = () => {
            swimmerHeight = swimmerImage.current.offsetHeight
            tablesItem.current.style.bottom = (swimmerHeight / 3.1) + 'px';
            dropsItem.current.style.bottom = - (swimmerHeight / 1.2) + 'px';
        }

        ScrollTrigger.matchMedia({

            "(min-width: 993px)": function() {
                let beamsTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.beams-section',
                        start: 'top top',
                        end: '+=5000', // 1300
                        scrub: 2,
                        pin: true,
                        //pinSpacing: false
                    }
                })

                beamsTimeline.to('.beam-top', {scaleX: 1500, duration: 3}, 0)
                beamsTimeline.to('.beam', {scaleY: 40, duration: 3}, 0)
                beamsTimeline.to('.parallax-swimmer', {yPercent: -80, scale: 1.2, duration: 2}, 1)
                beamsTimeline.to('.drops', {yPercent: -125, duration: 2}, '<')
        
                beamsTimeline.to('.tables', {xPercent: -170, duration: 8})
        
                // parallax scale
                beamsTimeline.to('.table-1', {scale: 1.7, duration: 4})
                beamsTimeline.to('.table-2', {xPercent: -100, duration: 4}, '<')
                beamsTimeline.to('.parallax-swimmer', {yPercent: -84, scale: 1.2, duration: 4}, '<')
                beamsTimeline.to('.drops', {yPercent: -135, duration: 4}, '<')
                beamsTimeline.to('.drops', {opacity: 0.9, delay: 1.5})
    
                beamsTimeline.scrollTrigger.refresh();
            },
        });

    }, [])

    return (
        <section className="beams-section">

            <div className="beams">
                <div className="beam lateral-left"></div>
                <div className="beam center-left"></div>
                {/* <Beam className="beam-top center-top"/> */}
                <div className="beam center-right"></div>
                <div className="beam lateral-right"></div>
            </div>

            <div ref={tablesItem} className="tables">
                <div className="tables-wrapper">
                    <div className="table-con first-con">
                        <img className="table table-3" src={table3} alt="Swim System" />
                    </div>
                    <div className="table-con second-con">
                        <img className="table table-2" src={table2} alt="Swim System" />
                    </div>
                    <div className="table-con third-con">
                        <img className="table table-1" src={table1} alt="Swim System" />
                    </div>
                </div>
            </div>

            <div className="parallax-swimmer">
                <picture>
                    <source srcSet={parallaxSwimmerWebp} type="image/webp" />
                    <img ref={swimmerImage} src={parallaxSwimmer} alt="Swim System" />
                </picture>
            </div>
            
            <div ref={dropsItem} className="drops">
                <picture>
                    <source srcSet={dropsWebp} type="image/webp" />
                    <img src={drops} alt="Swim System" />
                </picture>
            </div>

        </section>
    )
}

export default BeamsBlock