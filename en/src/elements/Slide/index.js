import React from 'react'

import quoteImg from '../../img/icons/quote.svg'
import './index.scss'



const Slide = ({ data, id }) => {

    const classes = ['slide']

    if(id) {
        let str = 'slide-' + id
        classes.push(str)
    }

    return(
        <div className={classes.join(' ')}>
            <div className="slide__content">
                <div className="content-wrapper">
                    <div className="slide__description">
                        <p>{data.description}</p>
                    </div>
                    <div className="_slide-line"></div>
                    <div className="_text-fill-horizontal">
                        <p className="front">{data.name}</p>
                        <p className="back">{data.name}</p>
                    </div>
                    <div className="slide__image slide__image-mobile">
                        <div className="image-wrapper">
                            <img src={data.image} alt={data.name} />
                        </div>
                    </div>
                    <div className="quote-block">
                        <img src={quoteImg} alt="" />
                        <p>{data.quote}</p>
                    </div>
                    <div className="_slide-line"></div>
                </div>
            </div>
            <div className="slide__image slide__image-desktop">
                <div className="image-wrapper">
                    <img src={data.image} alt={data.name} />
                </div>
            </div>
        </div>
    )
}



export default Slide