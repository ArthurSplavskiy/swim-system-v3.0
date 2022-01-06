import gsap from 'gsap/all'
import React, { useRef, useCallback, useEffect, useState } from 'react'

import { splitText, fadeInOnLoad, fadeInScroll, hideLine } from '../../utils/onScrollAnimation'

import './index.scss'



const Preloader = ({ setLoading, loading}) => {
    const preloaderRef = useRef()

    const [animationStart, setAnimationStart] = useState(false)
    const [animationEnd, setAnimationEnd] = useState(false)

    useEffect(() => {
        new splitText()
            hideLine()
    }, [])

    const textLoadAnimation = useCallback(() => {
        new fadeInScroll()
        new fadeInOnLoad()
    }, [])

    const preloaderAnimation = useCallback(() => {
        setAnimationStart(true)
        setTimeout(() => {
            setAnimationEnd(true)
        }, 5000)
    }, [setAnimationStart])
    
    useEffect(() => {

        if(animationEnd) {
            
            const t = gsap.timeline({ defaults: { duration: 2 } })

            t.fromTo(preloaderRef.current, {
                background: 'radial-gradient(circle, rgba(8,142,203,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%)'
            }, {
                background: 'radial-gradient(circle, rgba(8,142,203,0) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)'
            })
            t.to(preloaderRef.current, {
                background: 'radial-gradient(circle, rgba(8,142,203,0) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)'
            })
            gsap.to('.player', {
                scale: 0
            })
            
            textLoadAnimation()

            preloaderRef.current.classList.add('done')
            setLoading(false)
        }

    }, [animationEnd,  setLoading, textLoadAnimation])
    
    const loadPage = useCallback(() => {
        preloaderAnimation()
    }, [preloaderAnimation]) 

    // EVENTS
    window.addEventListener('load', loadPage, false)

    useEffect(() => {
        return () => {
            window.removeEventListener('load', loadPage)
        }
    }, [loadPage])

    useEffect(() => {
        if(!loading) preloaderRef.current.classList.add('done')
    }, [loading])

    return (
        <div ref={preloaderRef} className="preloader">
            <div className="preloader__body">
                <div className="blur-logo">
                    <div className="player">
                        <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_rgau7hdv.json" speed="1" autoplay={animationStart ? true : false} style={{opacity: animationStart ? 1 : 0}}></lottie-player>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Preloader