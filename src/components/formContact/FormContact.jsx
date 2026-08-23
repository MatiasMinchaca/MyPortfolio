import React from 'react';
import { ContactCard, ContactLink, ContactLinks, Container } from './FormContact elements';
import translations from '../../i18n/translations';

const formContact = ({ lang = 'es' }) => {
    const t = translations[lang].contact;

    return (
        <Container id="contact">
            <ContactCard>
                <span>{t.label}</span>
                <h2>{t.title}</h2>
                <p>
                    {t.description}
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
