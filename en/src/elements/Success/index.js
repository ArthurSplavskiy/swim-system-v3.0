import React from 'react'
import facebookLogo from '../../img/icons/facebook.svg'
import instaLogo from '../../img/icons/instagram.svg'

const Success = () => {

    return (
        <div className="success-modal">
            <div className="success-modal__wrapper">
                <div className="modal__row modal__message">
                    <div className="modal__culumn1">
                        {/* <div className="back-button back-button_offset">
                            <span>Повернутися на сайт</span>
                        </div> */}
                    </div>
                    <div className="modal__culumn2">
                        <h1>Thank you for contacting us</h1>
                        <p>Our manager will contact you shortly. 😉</p>
                    </div>
                </div>

                <div className="modal__row modal__contacts">
                    <div className="modal__culumn1 modal__contacts-social">
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
                    <div className="modal__culumn2">
                        <div className="modal__info">
                            <div className="title">
                                <div className="column">phone</div>
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
    )
}

export default Success
