import React, {useState} from 'react';
import { 
    Container, 
    LineS, 
    DownloadCV, 
    MenuBurguer, 
    MenuClose, 
    MenuD,
    Block,
    Options } from './Header elements';
import {
    NavLink,
    Link
} from "react-router-dom";

const Header = () => {
    const [toDeployMenu, setToDeployMenu] = useState(false);
    return (
        <>
        {/* <AbstractGoldRed src="/images/AbstractGoldRed.jpg" alt="back" /> */}
        <Container>
            <MenuBurguer className={toDeployMenu ? 'press' : ''} onClick={() => setToDeployMenu(!toDeployMenu)}>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </MenuBurguer>
            <MenuD deploy={toDeployMenu}>
                <Options>
                    <Link to='/'>
                        Home
                    </Link>
                </Options>
                <Options>
                    <NavLink to='/aboutMe'>
                        Sobre mí
                    </NavLink>
                </Options>
                <Options>
                    <NavLink to='/technologies' >
                        Tecnologias
                    </NavLink>
                </Options>
                <Options>
                    <NavLink to='/contact'>
                        Contacto
                    </NavLink>
                </Options>
            </MenuD>
            <MenuClose deploy={toDeployMenu} onClick={() => setToDeployMenu(!toDeployMenu)}>
            </MenuClose>
            <DownloadCV>
                <a href="/cv/Matias Minchaca CV.pdf" download="Curriculum Matias Minchaca">
                    Descargar CV
                </a>
            </DownloadCV>
            <LineS>
            </LineS>
        </Container>
        <Block></Block>
        </>
    );
};

export default Header;