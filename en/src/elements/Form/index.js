import React, { useState, useContext } from 'react'
import emailjs from 'emailjs-com'

import { modalContext } from '../../utils/context'

import facebookLogo from '../../img/icons/facebook.svg'
import instaLogo from '../../img/icons/instagram.svg'
import './index.scss'



const Form = ({ animation }) => {
    const modalWindowContext = useContext(modalContext);

    const [userData, setUserData] = useState({ 
        name: '', 
        phoneNumber: '',  
        message: ''
    })

    let disabledStatus = !!(userData.name && userData.phoneNumber && userData.message)

    const sendForm = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_32kwssc', 'template_yurhta7', e.target, 'user_eO2gN2GSK1ynAfE7E7CnS')
          .then((result) => {

            setUserData({
                name: '', 
                phoneNumber: '',  
                message: ''
            })

            modalWindowContext.setSuccessModalActive(false)
            modalWindowContext.setFormModalActive(true)

        }, (error) => {
              alert(error.text);
        });
    }

    return (
        <div className="form-section__wrapper">
            <div className="form-section__content">
                <div className="contacts-wrapper">
                    <div>
                        <p className={animation ? 'desktop-text _text-on-scroll' : 'desktop-text'}>Contacts</p>
                        <p className="mobile-text">Contacts</p>
                        <ul className="contacts-links">
                            <li>
                                <a className={animation ? 'desktop-text _text-on-scroll' : 'desktop-text'} href="tel:+380506789924">+38 050 678 99 24</a>
                                <a className="mobile-text" href="tel:+380506789924">+38 050 678 99 24</a>
                            </li>
                            <li>
                                <a className={animation ? 'desktop-text _text-on-scroll' : 'desktop-text'} href="mailto:swim_system@examle.com">swim_system@examle.com</a>
                                <a className="mobile-text" href="mailto:swim_system@examle.com">swim_system@examle.com</a>
                            </li>
                        </ul>
                    </div>
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
                <div className="form-wrapper">
                    <form onSubmit={sendForm} className="form" action="#">
                        <div className="form__input-group">
                            <input 
                                name="name"
                                autoComplete="off"
                                className="form-input"
                                value={userData.name} 
                                placeholder="Name"
                                onChange={(e) => setUserData({
                                    ...userData,
                                    name: e.target.value
                                })} 
                            />
                            <div className="_line-on-scroll"></div>
                        </div>
                        
                        <div className="form__input-group">
                            <input
                                name="phone"
                                autoComplete="off"
                                className="form-input"
                                value={userData.phoneNumber}
                                placeholder="Phone"
                                onChange={(e) => setUserData({
                                    ...userData,
                                    phoneNumber: e.target.value
                                })} 
                            />
                            <div className="_line-on-scroll"></div>
                        </div>

                        <div className="form__input-group">
                            <input
                                name="message"
                                autoComplete="off"
                                className="form-input"
                                value={userData.message}
                                placeholder="Message"
                                onChange={(e) => setUserData({
                                    ...userData,
                                    message: e.target.value
                                })} 
                            />
                            <div className="_line-on-scroll"></div>
                        </div>

                        <button 
                            className="form-button"
                            type="submit"
                            disabled={!disabledStatus}
                        >
                            <p>Send</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
