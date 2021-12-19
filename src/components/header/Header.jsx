import React, {useState} from 'react';
import { Container, LineS, 
    LogoContainer, 
    MenuBurguer, 
    MenuClose, 
    MenuD, 
    Options } from './Header elements';
import {
    FaBars,
    FaTimes
} from 'react-icons/fa';
import {
    NavLink,
    Link
} from "react-router-dom";

const Header = () => {
    const [toDeployMenu, setToDeployMenu] = useState(false);
    return (
        <>
        <Container>
            <MenuBurguer onClick={() => setToDeployMenu(!toDeployMenu)}>
                {
                    toDeployMenu ? <FaTimes /> : <FaBars />
                }
            </MenuBurguer>
            <MenuD deploy={toDeployMenu}>
                <Options>
                    <Link to='/'>
                        Home
                    </Link>
                </Options>
                <Options>
                    <NavLink to='/aboutMe'>
                        About Me
                    </NavLink>
                </Options>
                <Options>
                    <NavLink to='/cv' >
                        Curriculum
                    </NavLink>
                </Options>
                <Options>
                    <NavLink to='/proyects'>
                        Proyects
                    </NavLink>
                </Options>
                <Options>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </Options>
            </MenuD>
            <MenuClose deploy={toDeployMenu} onClick={() => setToDeployMenu(!toDeployMenu)}>
            </MenuClose>
            <LogoContainer className='logo'>
                Matias Minchaca
            </LogoContainer>
            <LineS>
            </LineS>
        </Container>
        </>
    );
};

export default Header;