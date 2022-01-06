import React, {useContext} from 'react'
import gsap from 'gsap'

import { modalContext } from '../../utils/context'

import './index.scss'



const Button = ({text, status = false, big = false, modal, openModal, closeModal}) => {
    const modalWindowContext = useContext(modalContext);

    const clickHandler = () => {
        setTimeout(() => {
            if(modal === 'timetable') {
                modalWindowContext.setTimetableModalActive(false)
            }
    
            switch(closeModal) {
                case 'timetable': modalWindowContext.setTimetableModalActive(true)
                    break;
                case 'form': modalWindowContext.setFormModalActive(true)
                    break;
                case 'success': modalWindowContext.setSuccessModalActive(true)
                    break;
                default: console.log('default');
            }
            switch(openModal) {
                case 'timetable': modalWindowContext.setTimetableModalActive(false)
                    break;
                case 'form': modalWindowContext.setFormModalActive(false)
                    break;
                case 'success': modalWindowContext.setSuccessModalActive(false)
                    break;
                default: console.log('default');
            }
        }, 300)
        

        gsap.to('.page-transition', {duration: 0.3, scaleX: 1, transformOrigin: 'top left'})
        gsap.to('.page-transition', {duration: 0.4, scaleX: 0, delay: 0.8, transformOrigin: 'top right'})
    }
    

    let classes = ['main-button']

    if(big) {
        classes.push('main-button_big')
    }

    return (
        <button disabled={status} className={classes.join(' ')} onClick={() => clickHandler()}>{text}</button> 
    )
}



export default Button
