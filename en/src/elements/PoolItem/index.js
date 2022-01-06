import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const ParallaxItem = ({ 
    image, 
    imageWebp, 
    description, 
    parallaxTrigger, 
    startAction, 
    elementTrigger, 
    endAction, 
    modifier, 
    toAnimation 
}) => {

    const classes = ['pool-item']

    if(elementTrigger) {
        classes.push(elementTrigger) 
    }

    if(modifier) {
        classes.push(modifier)
    }

    useEffect(() => {

        // gsap.from(`.${elementTrigger} .linebar .line`, {
        //     scaleX: 0,
        //     scrollTrigger: {
        //         start: '-=500',
        //         end: '+=200',
        //         trigger: `${parallaxTrigger}`,
        //         scrub: 1,
        //     }
        // });

        ScrollTrigger.matchMedia({

            "(min-width: 992px)": function() {
                gsap.set(`.${elementTrigger}`, {opacity: 0.5});
                gsap.to(`.${elementTrigger}`, {
                    yPercent: `${toAnimation}`,
                    opacity: 1,
                    scrollTrigger: {
                        start: `${startAction}`,
                        end: `${endAction}`,
                        trigger: `${parallaxTrigger}`,
                        scrub: 1,
                    }
                });
            }

        })

    }, [parallaxTrigger, startAction, elementTrigger, endAction, toAnimation])


    return (
        <div className={classes.join(' ')}>
            <div className="line-side">
                <div className="linebar">
                    <div className="descrption">{description}</div>
                    <div className="_line-on-scroll"></div>
                </div>
            </div>
            <div className="image-side">
                <picture>
                    <source srcSet={imageWebp} type="image/webp" />
                    <img src={image} alt="Swim System" />
                </picture>
            </div>
        </div>
    )
}

export default ParallaxItem