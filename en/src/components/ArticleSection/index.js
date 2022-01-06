import React from 'react'

import { Container } from '../../globalStyle'
import ArticleImage from '../../elements/ArticleImage'
import ParallaxItem from '../../elements/ParallaxItem'
import SectionDescription from '../../elements/SectionDescription'

import img3 from '../../img/3.png'
import img3Webp from '../../img/webp/3.webp'
import img4 from '../../img/4.png'
import img4Webp from '../../img/webp/4.webp'

import './index.scss'



const ArticleSection = () => {

    return(
        <section id="traning_mobile" className="article-section section">
            <Container>
                <SectionDescription 
                    column1="Open water training"
                    column2='weekends' 
                    column3='з 8:00' 
                    section=".article-section"
                />

                <div className="article-block">
                    <div className="content">
                        <div className="image-side">
                            <ArticleImage 
                                image={img3} 
                                imageWebp={img3Webp}
                            />
                            <h2 className="_text-on-scroll"><span>Open water</span>training</h2>
                        </div>
                        <div className="content-side">
                            <div className="text _text-opacity">
                                <p className="_text-on-scroll">Open water training is a separate swimming discipline.</p>
                                <p className="_text-on-scroll">We eagerly travel and collect medals in any corner of the world that has water and competitions. Stamina, strategy, speed, orientation, and being at one with nature is what makes this swimming discipline one of the most popular among amateurs of the country.</p>
                            </div>
                        </div>
                    </div>
                    <ParallaxItem 
                        image={img4}
                        imageWebp={img4Webp}
                        parallaxTrigger=".article-section .parallax-item" 
                        startAction="-=1500"
                        endAction="+=600"
                        elementTrigger="el-2"
                    />
                </div>

            </Container>
        </section>
    )
}



export default ArticleSection