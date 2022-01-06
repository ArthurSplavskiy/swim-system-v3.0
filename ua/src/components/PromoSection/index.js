import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Container } from '../../globalStyle'

import BackgroundImg from '../../img/main-banner.png'
import BackgroundImgWebp from '../../img/webp/main-banner.webp'
import './index.scss'



const PromoSection = () => {

    useEffect(() => {
        
        ScrollTrigger.matchMedia({
            "(min-width: 993px)": function() {
                // STEP TO SECOND SECTION
                gsap.utils.toArray('.panel').forEach((panel, i) => {
                    ScrollTrigger.create({
                        trigger: panel,
                        start: 'bottom bottom',
                        pin: true,
                        pinSpacing: false
                    }) 
                })
                // ===
                // MOVE TO TOP IMAGE
                gsap.to('.promo-img', {
                    yPercent: -40,
                    scrollTrigger: {
                        trigger: '.beams-section',
                        start: '-=500',
                        scrub: true
                    }
                })
                // ===
                // SCALE IMAGE
                let t1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.navbar',
                        start: '+=1',
                        end: '+=3000',
                        scrub: true,
                    }
                })

                t1.to('.promo-img', {scale: 1.5})
                // ===
                // TITLE TEXT ANIMATION
                gsap.to('.promo-title .back', {
                    height: '100%',
                    scrollTrigger: {
                        trigger: '.promo-title .back',
                        start: '-=140',
                        end: '+=300',
                        scrub: true
                    }
                })
                // ===
            }
        })

    }, [])
    
    return (
        <section className="promo-section panel">
            <div className="promo-headcon__mobile">
                <Container>
                    <h1 className="promo-heading">
                        <div className="promo-title">
                            <p className="_text-on-load">Swim System це сила та енергія рухів</p>
                        </div>
                    </h1>
                </Container>
            </div>
            <picture>
                <source srcSet={BackgroundImgWebp} type="image/webp" />
                <img className="promo-img" src={BackgroundImg} alt="Swim System" />
            </picture>
            <div className="promo-section__wrapper">
                <Container className="container">
                    <div className="promo-section__content">
                        <div className="promo-headcon">
                            <h1 className="promo-heading">
                                <div className="promo-title">
                                    <p className="front _text-on-load">Swim System це сила та енергія рухів</p>
                                    <p className="back _text-on-load">Swim System це сила та енергія рухів</p>
                                </div>
                            </h1>
                        </div>
                        <div className="promo-description">
                            <p className="_text-on-load">
                                Swim System - ми молода, та амбіційна команда з плавання. Результати якої складаються з цікавого і послідовного тренувального процесу, помножена на здорову атмосферу і захопленість людей. Це допомагає досягати цілей і робити себе краще.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="promo-description__mobile">
                <Container>
                    <p className="_text-on-load">
                        Swim System - ми молода, та амбіційна команда з плавання. Результати якої складаються з цікавого і послідовного тренувального процесу, помножена на здорову атмосферу і захопленість людей. Це допомагає досягати цілей і робити себе краще.
                    </p>
                </Container>
            </div>
        </section>
    )
}



export default PromoSection