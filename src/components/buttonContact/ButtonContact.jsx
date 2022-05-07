import React, { useState } from 'react';
import { 
    ButtonEmail, 
    ButtonGitHub, 
    ButtonLink, 
    ButtonWpp, 
    LateralButtons, 
    OpenClose } from './ButtonContact elements';

import GmailIcon from '../icons/GmailIcon'
import WhatsAppIcon from '../icons/WhatsAppIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import GitHubIcon from '../icons/GitHubIcon'
import IdCardIcon from '../icons/IdCardIcon';
import CloseIcon from '../icons/CloseIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const ButtonContact = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <OpenClose onClick={() => setShow(!show)}>
                {
                    !show ? <IdCardIcon width='30' height='30' /> : <CloseIcon width='30' height='30' />
                }
            </OpenClose>
            <LateralButtons onClick={() => setShow(!show)} show={show}>
                <ArrowRightIcon show={show} />
            </LateralButtons>
            <ButtonEmail show={show} href="mailto:matiasminchaca1@gmail.com" title='E-mail'>
                <GmailIcon width='30' height='30' />
            </ButtonEmail>
            <ButtonWpp show={show} href="https://api.whatsapp.com/send?phone=+5493873693495" target='whatsapp' title='WhatsApp'>
                <WhatsAppIcon width='30' height='30' />
            </ButtonWpp>
            <ButtonLink show={show} href="https://www.linkedin.com/in/matiasminchaca" target='linkedin' title='Linkedin'>
                <LinkedInIcon width='30' height='30' />
            </ButtonLink>
            <ButtonGitHub show={show} href='https://github.com/MatiasMinchaca' target='github' title='GitHub'>
                <GitHubIcon width='30' height='30' />
            </ButtonGitHub>
        </>
    );
};

export default ButtonContact;