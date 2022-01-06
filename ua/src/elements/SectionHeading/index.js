import React from 'react'

import './index.scss'



const SectionHead = ({ children }) => {

    return(
        <h2 className="section-head _text-on-scroll">
            { children }
        </h2>
    )
}



export default SectionHead