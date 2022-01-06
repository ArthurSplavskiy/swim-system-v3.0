import React from 'react'

import { Container } from '../../globalStyle'
import { Form } from '../../elements'

import increate from '../../img/icons/increate-copyright.svg'
import './index.scss'



const FormSection = () => {

    return(
        <section id="contacts_mobile" className="form-section section">
            <Container className="_container">
                <Form animation={false} />
                <div className="footer">
                        <div className="side-1">
                            &copy; 2021 Swim System
                        </div>
                        <div className="side-2">
                            <a href="https://in-create.com/" target="_blank" rel="noopener noreferrer">
                                <img src={increate} alt="Increate" />
                            </a>
                        </div>
                    </div>
            </Container>
        </section>
    )
}



export default FormSection