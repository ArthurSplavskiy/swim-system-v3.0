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
                    Ми обрали зручні локації для проведення тренувань у басейнах Києва
                </SectionHead>
                <SectionDescription 
                    column1='2 спортивні  басейна' 
                    column2='25м' 
                    column3='6/8 доріжок' 
                    column4={true} 
                    section=".location-section"
                />

                <div className="location-section__body">
                        <div className="side-1">
                            <div className="location-cart location-cart__anim-1">
                                <div className="image-wrapper">
                                    <picture>
                                        <source srcSet={pool1Webp} type="image/webp" />
                                        <img src={pool1} alt="Басейн спорткомплексу НТУУ КПІ" />
                                    </picture>
                                </div>
                                
                                <div className="text-content">
                                    <p className="_text-on-scroll">Басейн спорткомплексу НТУУ КПІ</p>
                                    <p className="_text-on-scroll">Площа - 25 х 50 м. Глибина - від 1,8 м. До 7,5 м. 24 доріжки. Очищення води басейну відбувається гіпохлоритом натрію через високоякісне обладнання американського виробника.</p>
                                </div>
                            </div>
                        </div>
                        <div className="side-2">
                            <div className="location-cart location-cart__anim-2">
                                <div className="image-wrapper">
                                    <picture>
                                        <source srcSet={pool2Webp} type="image/webp" />
                                        <img src={pool2} alt="Басейн спорткомплексу НПУ ім. М. Драгоманова" />
                                    </picture>
                                </div>
                                <div className="text-content">
                                    <p className="_text-on-scroll">Басейн "Спорткомплекс НПУ ім. М. Драгоманова"</p>
                                    <p className="_text-on-scroll">Великий басейн 25 м х 12 м (6 доріжок), глибина 2 м. Очищення води басейну відбувається гіпохлоритом натрію через високоякісне обладнання американського виробника.</p>
                                </div>
                            </div>
                        </div>
                </div>

            </Container>
        </section>
    )
}



export default LocationSection