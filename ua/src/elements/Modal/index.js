import React, {useRef} from 'react'
import gsap from 'gsap'

import { Container } from '../../globalStyle'

import Logo from '../../img/logo.svg'
import cross from '../../img/icons/cross.svg'
import './index.scss'



const Modal = ({modalActive, setModalActive, children, modalId}) => {
    const cursor = useRef()

    const mouseMoveHandler = (e) => {
        gsap.to(cursor.current, 0.45, {
            css: {
                left: e.clientX,
                top: e.clientY
            }
        });
    }

    const closeModalHandler = () => {
        gsap.to('.page-transition', {duration: 0.3, scaleX: 1, transformOrigin: 'top left'})
        gsap.to('.page-transition', {duration: 0.4, scaleX: 0, delay: 0.8, transformOrigin: 'top right'})

        setTimeout(() => {
            setModalActive(true)
        }, 300)
    }

    return (
        <div id={modalId} onMouseMove={(e) => mouseMoveHandler(e)} className={modalActive ? 'modal' : 'modal _active'}>
            <div ref={cursor} className="cursor"></div>
            <Container className="container">
                <div className="modal__navbar">
                    <div className="logo">
                        <img src={Logo} alt="Swim System" />
                    </div>
                    <div className="close" onClick={() => closeModalHandler()}>
                        <img src={cross} alt="Swim System" />
                    </div>
                </div>
                <div className="modal__wrapper">
                    <div className="modal__content">

                        {children}

                    </div>
                </div>
            </Container>
        </div>
    )
}



export default Modal
