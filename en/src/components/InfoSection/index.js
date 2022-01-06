import React from 'react'

import { Container } from '../../globalStyle'
import ArticleImage from '../../elements/ArticleImage'
import ParallaxItem from '../../elements/ParallaxItem'
import SectionHead from '../../elements/SectionHeading'
import SectionDescription from '../../elements/SectionDescription'
import Button from '../../elements/Button'

import img1 from '../../img/1.png'
import img1Webp from '../../img/webp/1.webp'
import img2 from '../../img/2.png'
import img2Webp from '../../img/webp/2.webp'
import './index.scss'



const InfoSection = () => {

    return(
        <section id="about_mobile" className="info-section section">
            <Container>
                <SectionHead>
                    Add a drop of chlorine to your schedule. Refresh your body, spirit and motion balance.
                </SectionHead>
                <SectionDescription 
                    column1="Pool group trainings"
                    column2='Tue/Thu/Sat - Mon/Wed/Fri' 
                    column3='7:00 — 8:00' 
                    column4={true} 
                    section=".info-section"
                />
                <div className="big-text _text-fill">
                    GROUP
                    <span className="back">
                        <span>GROUP</span>
                    </span>
                </div>

                <div className="article-block">
                    <div className="content">
                        <div className="image-side">
                            <ArticleImage 
                                image={img1}
                                imageWebp={img1Webp}
                            />
                        </div>
                        <div className="content-side">
                            <div className="content-side__wrapper">
                                <div className="text-overflow _text-fill">
                                    Pool group trainings
                                    <span className="back">
                                        <span>Pool group trainings</span>
                                    </span>
                                </div>
                                
                                <div className="content-side__body">
                                    <div className="_line-on-scroll"></div>
                                    <div className="text">
                                        <p className="_text-on-scroll">Systematic and interesting team training will help you improve your movement technique and reach your goal. Goals differ - speed, health, medals. The team is who you’ll share success with.</p>
                                        <Button text="View full schedule" big={true} modal="timetable" />
                                    </div>
                                    <div className="_line-on-scroll"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ParallaxItem
                        image={img2}
                        imageWebp={img2Webp}
                        parallaxTrigger=".info-section .parallax-item"
                        startAction="-=1450"
                        endAction="+=800"
                        elementTrigger="el-1" />
                </div>
            </Container>
        </section>
    )
}



export default InfoSection