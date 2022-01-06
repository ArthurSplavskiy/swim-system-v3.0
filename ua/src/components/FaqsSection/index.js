import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import FaqSpoller from '../../elements/FaqSpoller'
import { faqData } from '../../data/faqData'
import { Container } from '../../globalStyle'
import SectionHead from '../../elements/SectionHeading'

import swimLogo from '../../img/icons/swim-faq.svg'
import './index.scss'



const FaqsSection = () => {
    const blurLogo = useRef()
    const sectionRef = useRef()

    useEffect(() => {

        ScrollTrigger.matchMedia({
            // "(max-width: 992px)": function() {
            //     const tl = gsap.timeline({
            //         scrollTrigger: {
            //             trigger: blurLogo.current,
            //             start: '-=500',
            //             end: '+=800',
            //             scrub: true,
            //             pin: true,
            //             pinSpacing: true
            //         }
            //     })
            //     tl.to(blurLogo.current.children[0], {
            //         filter: `blur(${40}px)`,
            //         opacity: 0.6,
            //         duration: 1
            //     }, 0) 
            //     tl.to(blurLogo.current.children[0], {
            //         filter: `blur(${0}px)`,
            //         opacity: 1,
            //         duration: 0.2
            //     }, '+=0.1')
            // }, 
            "(min-width: 993px)": function() {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: blurLogo.current,
                        start: 'top 300px',
                        end: '+=1300',
                        scrub: true,
                        pin: true,
                        pinSpacing: true
                    }
                })
                tl.to(blurLogo.current.children[0], {
                    filter: `blur(${40}px)`,
                    opacity: 0.6,
                    duration: 1
                }, 0) 
                tl.to(blurLogo.current.children[0], {
                    filter: `blur(${0}px)`,
                    opacity: 1,
                    duration: 0.2
                }, '+=0.1')
            },
        })
        
    })

    return (
        <div ref={sectionRef} className="faq-section">
            <Container>
                <SectionHead>
                    У вас є питання, у нас є відповіді! З питань, що стосуються нашої програми.
                </SectionHead>
                <div ref={blurLogo} className="faq-logo">
                    <div className="img-wrapper">
                        <img src={swimLogo} alt="Swim System" />
                    </div>
                </div>
                <div className="faq-spollers" data-spollers data-one-spoller>
                    {faqData.map((data, _, arr) => <FaqSpoller key={data.id} data={data} arr={arr} />)}
                </div>
                <div className="faq-logo__mobile">
                    <img src={swimLogo} alt="Swim System" />
                </div>
            </Container>
        </div>
    )
}



export default FaqsSection
