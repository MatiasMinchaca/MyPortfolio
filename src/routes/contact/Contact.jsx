import React from 'react';
import { 
    Container,
    Card } from './Contact elements'
import { Contacts } from './ContactDB'

const Contact = () => {
    return (
        <Container>
            {
                Contacts.map((contact) => (
                    <Card key={contact.name}>
                        {contact.icon}
                        <h2>
                            {contact.name}
                        </h2>
                        <a href={contact.url}>
                            {contact.nickname}
                        </a>
                    </Card>
                ))
            }
        </Container>
    );
};

export default Contact;