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
                    column1="тренування на відкритій воді"
                    column2='ВИХІДНІ' 
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
                            <h2 className="_text-on-scroll"><span>Тренування на </span> відкритій воді</h2>
                        </div>
                        <div className="content-side">
                            <div className="text _text-opacity">
                                <p className="_text-on-scroll">Окремою дисципліною в світі плавання- є старти на відкритий воді.</p>
                                <p className="_text-on-scroll">Ми з превеликим задоволенням подорожуємо, та збираємо медалі у будь-яких куточках світу, де є вода та змагання. Витривалість, стратегія, швидкість, орієнтування та злиття в одну стихію з природою - робить цей вид плавання наймасштабнішим тай найцікавішим серед аматорів у країні.</p>
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