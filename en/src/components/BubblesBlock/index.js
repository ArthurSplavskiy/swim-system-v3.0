import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bubbles1 from '../../img/icons/drops-1.png'
import bubbles2 from '../../img/icons/drops-2.png'
import bubbles3 from '../../img/icons/drops-3.png'
import swimLogo from '../../img/icons/swim-circle.svg'
import './index.scss'

const BubblesBlock = () => {
    const bubblesBlockRef = useRef()
    const strLineRef1 = useRef()
    const strLineRef2 = useRef()
    const swimLogoRef = useRef()
    const bubblesRef3 = useRef()
    const bubblesRef2 = useRef()
    const bubblesRef1 = useRef()
    
    useEffect(() => {

        ScrollTrigger.matchMedia({
            "(min-width: 993px)": function() {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: bubblesBlockRef.current,
                        start: 'top top',
                        end: '+=3000',
                        scrub: 1,
                        pin: true
                    }
                })
        
                tl.to(bubblesRef1.current, { opacity: 1, duration: 0.1 }, '-=1')
                tl.to(bubblesRef2.current, { opacity: 1, duration: 0.3 }, '-=0.3')
                tl.to(bubblesRef3.current, { opacity: 1, duration: 0.4 }, '>+=0.2')
                tl.to(strLineRef1.current, { xPercent: -60, duration: 3 }, 0)
                tl.to(strLineRef2.current, { xPercent: -60, duration: 3 }, 0)
                tl.to(swimLogoRef.current, { scale: 1, duration: 3, delay: 0.1 }, 0)
                tl.to(bubblesRef3.current, { opacity: 0, duration: 0.4 }, '>-=0.2')
                tl.to(bubblesRef2.current, { opacity: 0, duration: 0.3 }, '>-=0.2')
                tl.to(bubblesRef1.current, { opacity: 0, duration: 0.3 }, '>-=0.2')
            }
        })

    }, [])

    return (
        <div ref={bubblesBlockRef} className="bubbles-block">
            <div className="bubbles-block__wrapper">
                <div className="bubbles-block__swim-logo">
                    <div className="img-wrapper" ref={swimLogoRef}>
                        <img src={swimLogo} alt="Swim System" />
                    </div>
                </div>
                <div className="bubbles-block__bubbles">
                    <img ref={bubblesRef1} className="bubbles" src={bubbles3} alt="Swim System" />
                    <img ref={bubblesRef2} className="bubbles" src={bubbles2} alt="Swim System" />
                    <img ref={bubblesRef3} className="bubbles" src={bubbles1} alt="Swim System" />
                </div>
                <div ref={strLineRef1} className="bubbles-block__str bubbles-block__string-line">
                    <span>swim system - swim system - swim system - swim system</span>
                </div>
                <div ref={strLineRef2} className="bubbles-block__str bubbles-block__string-mask">
                    <span>swim system - swim system - swim system - swim system</span>
                </div>
            </div>
        </div>
    )
}

export default BubblesBlock
