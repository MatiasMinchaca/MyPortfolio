import React, {useEffect, useState} from 'react';
import { 
    Container, 
    LineS, 
    DownloadCV, 
    MenuBurguer, 
    MenuClose, 
    MenuD,
    Block,
    ThemeToggle,
    Options } from './Header elements';
import {
    NavLink,
    Link,
    useLocation
} from "react-router-dom";
import translations from '../../i18n/translations';

const Header = () => {
    const [toDeployMenu, setToDeployMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const { pathname } = useLocation();
    const lang = pathname.startsWith('/en') ? 'en' : 'es';
    const t = translations[lang].nav;
    const homePath = lang === 'en' ? '/en' : '/';
    const aboutPath = lang === 'en' ? '/en/about' : '/aboutMe';
    const experiencePath = `${homePath}#experience`;
    const contactPath = `${homePath}#contact`;

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

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
                    <Link to={homePath}>
                        {t.home}
                    </Link>
                </Options>
                <Options>
                    <NavLink to={aboutPath}>
                        {t.about}
                    </NavLink>
                </Options>
                <Options>
                    <a href={experiencePath}>
                        {t.experience}
                    </a>
                </Options>
                <Options>
                    <a href={contactPath}>
                        {t.contact}
                    </a>
                </Options>
                <Options>
                    <Link to={lang === 'en' ? '/' : '/en'}>
                        {lang === 'en' ? 'ES' : 'EN'}
                    </Link>
                </Options>
            </MenuD>
            <MenuClose deploy={toDeployMenu} onClick={() => setToDeployMenu(!toDeployMenu)}>
            </MenuClose>
            <DownloadCV>
                <a href="/cv/Matias Minchaca CV.pdf" download="Curriculum Matias Minchaca">
                    {t.resume}
                </a>
                <ThemeToggle
                    type="button"
                    isDark={isDarkMode}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={isDarkMode ? 'Light mode' : 'Dark mode'}
                >
                    {isDarkMode ? '☀' : '☾'}
                </ThemeToggle>
            </DownloadCV>
            <LineS>
            </LineS>
        </Container>
        <Block></Block>
        </>
    );
};

export default Header;
