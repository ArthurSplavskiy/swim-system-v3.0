import React, { useRef } from 'react'
import { Container } from '../../globalStyle'
import Logo from '../../img/logo.svg'
import { Form } from '../index'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'

const FormPage = ({ setLoading }) => {
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
        <div onMouseMove={(e) => mouseMoveHandler(e)} className="page not-found-page">
            <div ref={cursor} className="cursor"></div>
            <Container>
                <div className="page__navbar">
                    <img src={Logo} alt="Swim System" />
                    <NavLink to={'/'} className="back-button" onClick={() => backHandler()} >
                        <span></span>
                    </NavLink>
                </div>
                <div className="page__wrapper">
                    <div className="page__content">

                        <Form />

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FormPage
