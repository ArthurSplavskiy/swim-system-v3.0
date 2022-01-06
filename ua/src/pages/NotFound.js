import React, { useRef } from 'react'
import { Container } from '../globalStyle'
import facebookLogo from '../img/icons/facebook.svg'
import instaLogo from '../img/icons/instagram.svg'
import Logo from '../img/logo.svg'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'

const NotFound = ({ setLoading }) => {
    const cursor = useRef()

    const mouseMoveHandler = (e) => {
        gsap.to(cursor.current, 0.45, {
            css: {
                left: e.clientX,
                top: e.clientY
            }
        });
    }

    const backHandler = () => {
        setLoading(false)
    }

    return (
        <div onMouseMove={(e) => mouseMoveHandler(e)} className="modal not-found-page">
            <div className="page-transition"></div>
            <div ref={cursor} className="cursor"></div>
            <Container>
                <div className="page__navbar">
                    <img src={Logo} alt="Swim System" />
                </div>
                <div className="page__wrapper">
                    <div className="page__content">

                        <div className="page__row page__message">
                            <div className="page__culumn1">
                                <NavLink to={'/'} onClick={() => backHandler()} className="back-button back-button_offset">
                                    <span>Повернутися на сайт</span>
                                </NavLink>
                            </div>
                            <div className="page__culumn2">
                                <h1>Помилка 404</h1>
                                <p>Сторінка яку ви шукаєте не знайдена. Можливо вона застаріла або була видалена. 😬</p>
                            </div>
                        </div>

                        <div className="page__row page__contacts">
                            <div className="page__culumn1 page__contacts-social">
                                <ul className="contacts-social">
                                    <li>
                                        <a href="http:facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src={facebookLogo} alt="Swim System" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http:insta.com" target="_blank" rel="noopener noreferrer">
                                            <img src={instaLogo} alt="Swim System" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="page__culumn2">
                                <div className="page__info">
                                    <div className="title">
                                        <div className="column">ТЕЛЕФОН ДЛЯ ЗВ’ЯЗКУ</div>
                                        <div className="column">EMAIL</div>
                                    </div>
                                    <div className="description">
                                        <div className="column"><a href="tel:+380506789924">+38 050 678 99 24</a></div>
                                        <div className="column"><a href="mailto:swim_system@examle.com">swim_system@examle.com</a></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NotFound
