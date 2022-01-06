import React from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import { menuData } from '../../data/MenuData'

import './index.scss'

gsap.registerPlugin(ScrollToPlugin)

const MenuWrapper = styled.div`
    overflow-x: hidden;
    position: fixed;
    top: 88px;
    left: 0;
    width: 100%;
    height: calc(100% - 88px);
    background: #010101;
    z-index: 102;
    transition: transform 0.6s ease;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' :  'translateX(-100%)'};
`

const MobileMenu = ({ isOpen, setIsOpen }) => {

    const linkHandler = (anchor) => {
        
        gsap.to('.page-transition', {duration: 0.6, scaleX: 1, transformOrigin: 'top left'})
        gsap.to(window, {duration: 0.6, scrollTo: anchor, delay: 0.6});
        gsap.to('.page-transition', {duration: 0.4, scaleX: 0, delay: 1.2, transformOrigin: 'top right'})

        setTimeout(() => setIsOpen(!isOpen), 600)
        
        window.location.hash = ''
    }

    return (
        <MenuWrapper className="mobile-menu" isOpen={isOpen} >
            <ul className="mobile-menu__list">
                {
                    menuData.map((item, index) => (
                        <li key={index}>
                            <a onClick={() => linkHandler(item.anchor)} href={item.anchor}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="lang-toggle-mobile">
                <span>Укр</span>
                <a href="/en" className="lang-toggle__item" >Eng</a>
            </div>
        </MenuWrapper>
    )
}



export default MobileMenu