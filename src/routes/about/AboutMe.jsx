import React from 'react';
import {
    ContainerAbout,
    BlobAbout,
    BlobAbout2,
    ContainerTextAbout,
    FirstSectionAbout,
    SecondSectionAbout,
    PhotoOne,
    SkillCard,
    ThirdSectionAbout,
    TrianglesContainer,
    HistoryTitle,
    HistoryContainer
} from './AboutMe elements';
import YogaIcon from '../../components/icons/YogaIcon';
import PuzzleIcon from '../../components/icons/PuzzleIcon';
import LightOnIcon from '../../components/icons/LightOnIcon';
import InternetIcon from '../../components/icons/InternetIcon';
import ReportIcon from '../../components/icons/ReportIcon';
import DoubleCheckIcon from '../../components/icons/DoubleCheckIcon';
import HandIcon from '../../components/icons/HandIcon';
import Triangle from '../../components/icons/Triangle';
import { NavLink } from 'react-router-dom';
import getAge from '../../utils/getAge';

const birthDate = new Date(2001, 8, 12);

const AboutMe = () => {
    const age = getAge(birthDate);

    return (
        <ContainerAbout>
            <BlobAbout viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                </mask>
                <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    <image className='myPhoto' x='0' href="/images/myPhoto.png" />
                </g>
            </BlobAbout>
            <ContainerTextAbout>
                <BlobAbout2 id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="#8b0000" offset="0%"></stop>
                            <stop id="stop2" stop-color="#8b0000" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient)"
                        d="M18.5,-31.8C24.2,-28.8,29.1,-24.2,32.9,-18.6C36.7,-13.1,39.5,-6.5,38.8,-0.4C38.1,5.7,33.9,11.5,29.7,16.3C25.4,21.1,21.1,25.1,16.1,29.5C11.2,33.9,5.6,38.8,-0.3,39.3C-6.2,39.8,-12.4,36,-17.6,31.7C-22.8,27.4,-27.1,22.8,-31.8,17.4C-36.6,12.1,-41.9,6,-42.4,-0.3C-42.9,-6.6,-38.5,-13.1,-34.3,-19.5C-30.1,-25.9,-26.2,-32.2,-20.5,-35.1C-14.8,-38.1,-7.4,-37.9,-0.5,-37C6.4,-36.2,12.8,-34.8,18.5,-31.8Z"
                        width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
                        stroke="url(#sw-gradient)"></path>
                </BlobAbout2>
                <h1>
                    Matías Minchaca
                </h1>
                <h2>
                    Full-Stack Technical Developer
                </h2>
                <p>
                    WordPress, WooCommerce, APIs, automatizacion y backend.
                </p>
                <h3>
                    {age} años
                    <br />
                    Argentino · Sevilla, España
                </h3>
                <div className="heroActions">
                    <NavLink to='/' className={'back'}>
                        Inicio
                    </NavLink>
                    <a href='/#contact' className="back secondary">
                        Contacto
                    </a>
                </div>
            </ContainerTextAbout>
            <FirstSectionAbout>
                <PhotoOne src='/images/photoThree.png' />
                <h2>
                    Sobre Mí
                </h2>
                <p>
                    Soy Full-Stack Technical Developer con foco en WordPress, WooCommerce, integraciones, automatizacion y soporte tecnico avanzado. Me especializo en resolver problemas que mezclan codigo, CMS, APIs, servidores, hosting, DNS y herramientas de negocio.
                </p>
                <p>
                    Desde octubre de 2024 trabajo en Bululu Agency participando en proyectos para clientes como Polestar Pilates, T-ROC Global e ISECO. Mi trabajo incluye desarrollo y mantenimiento WordPress/WooCommerce, integraciones con APIs, automatizaciones con n8n, soporte de sitios en produccion, migraciones, seguridad y configuracion de entornos.
                </p>
                <p>
                    Mi diferencial es tomar una incidencia ambigua y seguir el rastro hasta encontrar la causa: puede estar en un plugin, una API, una base de datos, permisos Linux, PHP-FPM, .htaccess, SSL, DNS o una automatizacion mal conectada.
                </p>
                <p>
                    Tambien estoy desarrollando proyectos propios con Python, FastAPI, SQLite y Raspberry Pi, explorando monitoreo, self-hosting, procesos persistentes y arquitectura backend ligera.
                </p>
                <p>
                    Me interesa construir soluciones que funcionen en produccion, sean mantenibles y conecten bien las necesidades del negocio con la implementacion tecnica.
                </p>

            </FirstSectionAbout>
            <SecondSectionAbout>
                <h2>
                    Habilidades
                </h2>
                <SkillCard>
                    <YogaIcon width='40px' height='40px' fill='#f2f2f2' />
                    <p>
                        Paciente
                    </p>
                </SkillCard>
                <SkillCard>
                    <PuzzleIcon width='40px' height='40px' fill='#f2f2f2' />
                    <p>
                        Creativo
                    </p>
                </SkillCard>
                <SkillCard>
                    <LightOnIcon width='40px' height='40px' fill='#f2f2f2' />
                    <p>
                        Ingenioso
                    </p>
                </SkillCard>
                <SkillCard>
                    <InternetIcon width='40px' height='40px' fill='#f2f2f2' />
                    <p>
                        Autodidacta
                    </p>
                </SkillCard>
                <SkillCard>
                    <ReportIcon width='40px' height='40px' fill='#f2f2f2' />
                    <p>
                        Responsable
                    </p>
                </SkillCard>
                <SkillCard>
                    <DoubleCheckIcon width='40px' height='40px' fill='#f2f2f2' />
                    <p>
                        Resolutivo
                    </p>
                </SkillCard>
                <SkillCard>
                    <HandIcon width='40px' height='40px' fill='#f2f2f2' />
                    <p>
                        Determinado
                    </p>
                </SkillCard>
            </SecondSectionAbout>
            <ThirdSectionAbout>
                <TrianglesContainer>
                    <Triangle left='0' />
                    <Triangle left='10%' />
                    <Triangle left='20%' />
                    <Triangle left='30%' />
                    <Triangle left='40%' />
                    <Triangle left='50%' />
                    <Triangle left='60%' />
                    <Triangle left='70%' />
                    <Triangle left='80%' />
                    <Triangle left='90%' />
                    <Triangle left='100%' />
                    <Triangle left='110%' />
                    <Triangle left='120%' />
                </TrianglesContainer>
                <HistoryTitle>
                    Perfil técnico actual
                </HistoryTitle>
                <HistoryContainer>
                    <h3>
                        Desarrollo, integraciones, automatizacion e infraestructura tecnica.
                    </h3>
                    <p>
                        Actualmente mi perfil combina desarrollo web, soporte tecnico e integraciones. Trabajo principalmente con WordPress, WooCommerce, PHP, JavaScript, APIs REST, automatizaciones con n8n y herramientas de marketing/CRM.
                        <br />
                        Tambien tengo experiencia practica en hosting, migraciones, DNS, SSL, Linux, permisos, .htaccess, PHP-FPM, seguridad WordPress y resolucion de problemas en entornos productivos.
                        <br />
                        En paralelo, estoy fortaleciendo backend con Python, FastAPI, SQLite, testing y despliegues simples en Raspberry Pi, usando Git/GitHub y SSH como parte de mi flujo de trabajo.
                        <br />
                        Busco seguir creciendo como desarrollador tecnico capaz de diagnosticar, implementar y mantener soluciones completas, desde la funcionalidad visible hasta la infraestructura que la sostiene.
                    </p>
                </HistoryContainer>
            </ThirdSectionAbout>
        </ContainerAbout>
    );
};

export default AboutMe;
