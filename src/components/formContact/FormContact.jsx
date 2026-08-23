import React from 'react';
import { ContactCard, ContactLink, ContactLinks, Container } from './FormContact elements';

const formContact = () => {
    return (
        <Container id="contact">
            <ContactCard>
                <span>Contacto</span>
                <h2>¿Trabajamos juntos?</h2>
                <p>
                    Si necesitás desarrollo WordPress/WooCommerce, integraciones, automatización o soporte técnico, escribime y lo vemos.
                </p>
                <ContactLinks>
                    <ContactLink href="mailto:matiasminchaca1@gmail.com">
                        Email
                    </ContactLink>
                    <ContactLink href="https://api.whatsapp.com/send?phone=+5493873693495" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </ContactLink>
                    <ContactLink href="https://www.linkedin.com/in/matiasminchaca" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </ContactLink>
                    <ContactLink href="https://github.com/MatiasMinchaca" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </ContactLink>
                </ContactLinks>
            </ContactCard>
        </Container>
    );
};

export default formContact;
