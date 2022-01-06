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
                Додай краплю хлору в свій звичний графік! Та віднови баланс тіла, духу та рухів!
                </SectionHead>
                <SectionDescription 
                    column1="Групові тренування у басейні"
                    column2='ВТ/ЧТ/сб — пн/ср/пт' 
                    column3='7:00 — 8:00' 
                    column4={true} 
                    section=".info-section"
                />
                <div className="big-text _text-fill">
                    ГРУПОВІ
                    <span className="back">
                        <span>ГРУПОВІ</span>
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
                                    тренування у басейні
                                    <span className="back">
                                        <span>тренування у басейні</span>
                                    </span>
                                </div>
                                
                                <div className="content-side__body">
                                    <div className="_line-on-scroll"></div>
                                    <div className="text">
                                        <p className="_text-on-scroll">Саме системні та цікаві тренування з командою - дозволять тобі покращити техніку рухів, з користю та наснагою провести час й звісно досягти своєї мети! Мета у всіх різна- у когось це швидкість, у когось здоров'я, у інших медалі, саме з командою ти розділиш успіхи.</p>
                                        <Button text="ДЕТАЛЬНИЙ РОЗКЛАД" big={true} modal="timetable" />
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