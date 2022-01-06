import React from 'react'

import { Container } from '../../globalStyle'
import PoolItem from '../../elements/PoolItem'
import SectionDescription from '../../elements/SectionDescription'
import SectionHead from '../../elements/SectionHeading'

import img5 from '../../img/5.png'
import img5Webp from '../../img/webp/5.webp'
import img6 from '../../img/6.png'
import img6Webp from '../../img/webp/6.webp'
import img7 from '../../img/7.png'
import img7Webp from '../../img/webp/7.webp'
import img8 from '../../img/8.png'
import img8Webp from '../../img/webp/8.webp'
import './index.scss'



const PoolSection = () => {

    return(
        <section id="traning_mobile" className="pool-section section">
            <Container>
                <SectionHead>
                    Cool thing is that you can combine it with your professional activity or family leisure.
                </SectionHead>
                <SectionDescription 
                    column1="виїзні Кемпи (спортивні кемпи)"
                    section=".pool-section"
                />

                <div className="article-block">
                    <div className="content">
                        <div className="image-side">
                            <picture>
                                <source srcSet={img5Webp} type="image/webp" />
                                <img src={img5} alt="Swim System" />
                            </picture>
                        </div>
                        <div className="content-side">
                            <div className="text _text-opacity">
                                <p className="_text-on-scroll">Traditionally, a few times a year, we intensively train in the best pools and conditions to reach our goal. Reticulous technique improvement, underwater shooting, sports lectures help us push the limits.</p>
                                <p className="_text-on-scroll">Cool thing is that you can combine it with your professional activity or family leisure.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pool-items">
                    <PoolItem
                        image={img6}
                        imageWebp={img6Webp}
                        description="Egypt"
                        parallaxTrigger=".pool-section .parallax-item-1" 
                        startAction="top bottom"
                        endAction="+=400"
                        elementTrigger="parallax-item-1"
                        toAnimation="-10"
                    />
                    <PoolItem
                        image={img7}
                        imageWebp={img7Webp}
                        description="Georgia"
                        parallaxTrigger=".pool-section .parallax-item-2" 
                        startAction="top bottom"
                        endAction="+=400"
                        elementTrigger="parallax-item-2"
                        modifier="small"
                        toAnimation="-30"
                    />
                    <PoolItem
                        image={img8}
                        imageWebp={img8Webp}
                        description="Cyprus"
                        parallaxTrigger=".pool-section .parallax-item-3" 
                        startAction="top bottom"
                        endAction="+=400"
                        elementTrigger="parallax-item-3"
                        toAnimation="-40"
                    />
                </div>

            </Container>
        </section>
    )
}



export default PoolSection