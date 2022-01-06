import React, { useEffect, useContext } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { modalContext } from '../../utils/context'

import infoIcon from '../../img/icons/info.svg'
import './index.scss'



const SectionDescription = ({ column1, column2, column3, column4 = false, section }) => {
    const modalWindowContext = useContext(modalContext);

    const columnLinkHandler = () => {
        setTimeout(() => {
            modalWindowContext.setTimetableModalActive(false)
        }, 300)
        
        gsap.to('.page-transition', {duration: 0.3, scaleX: 1, transformOrigin: 'top left'})
        gsap.to('.page-transition', {duration: 0.4, scaleX: 0, delay: 0.8, transformOrigin: 'top right'})
    }

    useEffect(() => {

        ScrollTrigger.matchMedia({

            "(min-width: 993px)": function() {
        
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: `${section} .section-description`,
                        start: '100px bottom'
                    }
                })

                timeline.to(`${section} .column-1`, {
                    duration: 0.2,
                    opacity: 1
                })
                timeline.to(`${section} .column-2`, {
                    duration: 0.2,
                    opacity: 1
                })
                timeline.to(`${section} .column-3`, {
                    duration: 0.2,
                    opacity: 1
                })

                if(column4) {
                    timeline.to(`${section} .column-4`, {
                        duration: 0.2,
                        opacity: 1
                    })
                }
                
            }
        })

    }, [section, column4])

    return (
        <div className="section-description">
            <div className="column-1">{column1}</div>
            <div className="column-2">{column2}</div>
            <div className="column-3">{column3}</div>

            {column4 &&
            <div className="column-4">
                <button onClick={() => columnLinkHandler()}><img src={infoIcon} alt="Swim System" />ДЕТАЛЬНИЙ РОЗКЛАД</button>
            </div>} 
            <div className="_line-on-scroll"></div>
        </div>
    )
}



export default SectionDescription