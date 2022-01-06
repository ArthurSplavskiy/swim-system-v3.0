import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Container } from '../../globalStyle'
import SectionHead from '../../elements/SectionHeading'
import SectionDescription from '../../elements/SectionDescription'

import pool1 from '../../img/pool-1.png'
import pool1Webp from '../../img/webp/pool-1.webp'
import pool2 from '../../img/pool-2.png'
import pool2Webp from '../../img/webp/pool-2.webp'
import './index.scss'



const LocationSection = () => {

    useEffect(() => {

        ScrollTrigger.matchMedia({
            "(min-width: 993px)": function() {
                gsap.from('.location-cart__anim-1 .image-wrapper', {
                    yPercent: -20, 
                    opacity: 0.5, 
                    scale: 0.5, 
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.location-cart__anim-1 .image-wrapper',
                        start: 'top bottom',
                        end: '+=500', // +=800
                    }
                })
                gsap.from('.location-cart__anim-2 .image-wrapper', {
                    yPercent: -20, 
                    opacity: 0.5, 
                    scale: 0.6, 
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.location-cart__anim-2 .image-wrapper',
                        start: 'top bottom',
                        end: '+=500', // +=800
                    }
                })
            }
        })

    }, [])

    return(
        <section id="locations_mobile" className="location-section section">
            <Container>
                <SectionHead>
                    We selected 2 convenient locations for pool training in Kyiv.
                </SectionHead>
                <SectionDescription 
                    column1='2 swimming pools' 
                    column2='25m' 
                    column3='6/8 lanes' 
                    column4={true} 
                    section=".location-section"
                />

                <div className="location-section__body">
                        <div className="side-1">
                            <div className="location-cart location-cart__anim-1">
                                <div className="image-wrapper">
                                    <picture>
                                        <source srcSet={pool1Webp} type="image/webp" />
                                        <img src={pool1} alt="Swimming pool at National Technical University of Ukraine - Igor Sikorsky Kyiv Polytechnic Institute sports complex" />
                                    </picture>
                                </div>
                                
                                <div className="text-content">
                                    <p className="_text-on-scroll">Swimming pool at National Technical University of Ukraine - Igor Sikorsky Kyiv Polytechnic Institute sports complex</p>
                                    <p className="_text-on-scroll">Area - 25x50m. Depth - 1.8 to 7.5m. 24 lanes. American sodium hypochlorite water purification system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="side-2">
                            <div className="location-cart location-cart__anim-2">
                                <div className="image-wrapper">
                                    <picture>
                                        <source srcSet={pool2Webp} type="image/webp" />
                                        <img src={pool2} alt="Swimming pool at Drahomanov National Pedagogical University sports complex" />
                                    </picture>
                                </div>
                                <div className="text-content">
                                    <p className="_text-on-scroll">Swimming pool at Drahomanov National Pedagogical University sports complex</p>
                                    <p className="_text-on-scroll">A big swimming pool 25x12m (6 lanes), depth - 2m. American sodium hypochlorite water purification system.</p>
                                </div>
                            </div>
                        </div>
                </div>

            </Container>
        </section>
    )
}



export default LocationSection