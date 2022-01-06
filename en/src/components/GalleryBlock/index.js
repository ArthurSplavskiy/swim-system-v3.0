import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

import Scene from './scene'

import GalleryString from '../../data/GalleryString'

import SwimIcon from '../../img/icons/swim-1.svg'
import img1 from '../../img/gellary/1.png'
import img2 from '../../img/gellary/2.png'
import img3 from '../../img/gellary/3.png'
import img4 from '../../img/gellary/4.png'
import img5 from '../../img/gellary/5.png'
import img6 from '../../img/gellary/6.png'
import img7 from '../../img/gellary/7.png'
import img8 from '../../img/gellary/8.png'
import img9 from '../../img/gellary/9.png'
import img10 from '../../img/gellary/10.png'
import img11 from '../../img/gellary/11.png'
import './index.scss'


const GalleryBlock = () => {

    const LongString = styled.div`
        .string-line_left {
            @media(min-width: 993px) {
                transform: ${({ startPosition }) => `translateX(${-startPosition}px);` }
            }
            @media(min-width: 1920px) {
                transform: ${({ startPosition }) => `translateX(${-startPosition - 7500}px)` }
            }
        }   
    `

    const startPositionString = 20000; // 18700


    useEffect(() => {

        ScrollTrigger.matchMedia({
            "(min-width: 993px)": function() {

                // FOTO GaLLeRY
                gsap.to('.image-block__top', {
                    xPercent: -96, // -91
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.fixed-trigger',
                        start: '+=1700',
                        end: '+=12000', // 7000 // 5500
                        scrub: 1,
                        pin: true,
                    }
                })
                gsap.to('.image-block__bottom', {
                    xPercent: -96, // -91
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.fixed-trigger',
                        start: '+=1700',
                        end: '+=12000', // 7000 // 5500
                        scrub: 1,
                        pin: true,
                    }
                })

                // LINE
                const lineTimeline = gsap.timeline({
                    defaults: { delay: 0.1 },
                    scrollTrigger: {
                        trigger: '.gallery-block',
                        start: '-1000 top',
                        end: '+=3000', // 4000
                        scrub: 1,
                    }
                });
                lineTimeline.to('.gallery-block .line-box_first', { width: '140%' }, 0)
                lineTimeline.to('.gallery-block .line-box_second', { width: '120%' }, 0)
                lineTimeline.to('.gallery-block .line-box_third', { width: '100%' }, 0)
                // ====================================================================
                
                // OVERLAY
                gsap.to('.gallery-block__overlay', {
                    opacity: 1,
                    // ease: 'none',
                    scrollTrigger: {
                        trigger: '.gallery-block__overlay',
                        start: '+=7500',
                        end: '+=6500',
                        scrub: 1
                    }
                })
                // ====================================================================

                // THREE IMAGE REVEAL
                let proxy = { skew: 0 },
                    skewSetter = gsap.quickSetter(".image-block__item-inner", "skewX", "deg"),
                    clamp = gsap.utils.clamp(-20, 20); 

                gsap.set(".image-block__item-inner", {transformOrigin: "right center", force3D: true});
                
                ScrollTrigger.create({
                    onUpdate: self => {
                        let skew = clamp(self.getVelocity() / -300);

                        if (Math.abs(skew) > Math.abs(proxy.skew)) {
                            proxy.skew = skew;
                            gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                        }
                    }
                })
                // ====================================================================
            }
        })

    }, [])

    return (
        <div className="gallery-block">
            <div className="gallery-block__wrapper">

                <div className="gallery-block__letters-mobile">
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                </div>

                <div className="gallery-block__letters">
                    <div className="letters-block">
                        <div className="letters-block__string letters-block__string_right">
                            <LongString>
                                <GalleryString direct="right" />
                            </LongString>
                        </div>
                        <div className="letters-block__string letters-block__string_left">
                            <LongString startPosition={startPositionString}>
                                <GalleryString direct="left" />
                            </LongString>
                        </div>
                        <div className="letters-block__string letters-block__string_right">
                            <LongString>
                                <GalleryString direct="right" />
                            </LongString>
                        </div>
                        <div className="letters-block__string letters-block__string_left">
                            <LongString startPosition={startPositionString}>
                                <GalleryString direct="left" />
                            </LongString>
                        </div>
                    </div>
                </div>

                <div className="gallery-block__image">
                    <div className="image-block">
                        <div className="image-block__top">
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img1} />
                                </div>
                            </div>
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img3} />
                                </div>
                            </div>
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img5} />
                                </div>
                            </div>
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img7} />
                                </div>
                            </div>
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img9} />
                                </div>
                            </div>
                        </div>
                        <div className="image-block__bottom">
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img2} />
                                </div>
                            </div>
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img4} />
                                </div>
                            </div>
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img6} />
                                </div>
                            </div>
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img8} />
                                </div>
                            </div>
                            <div className="image-block__item">
                                <div className="image-block__item-inner">
                                    <Scene image={img10} />
                                </div>
                            </div>
                            <div className="image-block__item last-image">
                                <div className="image-block__item-inner">
                                    <Scene image={img11} cameraPosition={[0, 0, 2.7]} geometryPosition={[0.8, 0.5, 16, 16]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gallery-block__overlay"></div>
                <div className="fixed-trigger"></div>
                <div className="fixed-trigger2"></div>
                <div className="line-container">
                    <div className="line-box line-box_first"></div>
                    <div className="line-box line-box_second"></div>
                    <div className="line-box line-box_third"></div>
                </div>

            </div>
        </div>
    )
}



export default GalleryBlock