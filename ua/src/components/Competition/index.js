import React from 'react'

import SectionHead from '../../elements/SectionHeading'
import { Container } from '../../globalStyle'

import img1 from '../../img/competitions/1.png'
import img2 from '../../img/competitions/2.png'
import img3 from '../../img/competitions/3.png'
import img4 from '../../img/competitions/4.png'
import img5 from '../../img/competitions/5.svg'
import img6 from '../../img/competitions/6.svg'
import img7 from '../../img/competitions/7.png'
import img8 from '../../img/competitions/8.svg'
import './index.scss'



const Competition = () => {

    const images = [img7, img3, img5, img4, img8, img1, img2, img6]

    return (
        <div className="competition-section">
            <Container>
                <SectionHead>
                    Ми готуємось та приймаємо участь в наступних стартах:
                </SectionHead>
                <div className="competition-section__body">
                    <div className="grid-layout">
                        {images.map((img, i) => (
                            <div className="item" key={i}>
                                <img src={img} alt="Swim System" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}



export default Competition
