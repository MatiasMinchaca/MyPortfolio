/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardProyects,
    Container,
    ContainerCards,
    ContainerTechProyects,
    TechnologiesSection,
    Square1,
    Square2,
    TextCard,
    ProyectsSection,
    TittleTec,
} from "./Home elements";
import ArrowRightIcon from '../../components/icons/ArrowRightIcon';
import ImMatias from "../../components/I'mMatias";
import { TechnologiesDB, ProyectsDB } from "./HomeDB";
import SlideImage from '../../components/SlideImages/SlideImage';
import FormContact from '../../components/formContact/FormContact';

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Container>
            <ImMatias />
            <ProyectsSection>
                <h1 className="titleProyects">Mis Proyectos</h1>
                {ProyectsDB.map((proyect) => (
                    <CardProyects key={proyect.title}>
                        <Square1></Square1>
                        <Square2></Square2>
                        <h2>{proyect.title}</h2>
                        <h3>{proyect.subtitle}</h3>
                        <p>{proyect.description}</p>
                        <SlideImage slideImages={proyect.images} />
                        <h3>Tecnologías usadas:</h3>
                        <ContainerTechProyects>
                            {proyect.technologies.map((tech) => (
                                <article key={tech.name}>{tech.icon}</article>
                            ))}
                        </ContainerTechProyects>
                        <a href={proyect.link} target="github">
                            Enlace al repositorio <ArrowRightIcon />
                        </a>
                    </CardProyects>
                ))}
            </ProyectsSection>
            <TechnologiesSection>
                <TittleTec>
                    Tecnologías
                </TittleTec>
                {TechnologiesDB.map((element) => (
                    <ContainerCards
                        key={element.name}
                    >
                        <Card>
                            {element.icon}
                            <h2>{element.name}</h2>
                            <p>
                                {element.docs.length > 210
                                    ? `${element.docs.slice(0, 210)}...`
                                    : element.docs}
                            </p>
                            <a href={element.link} target="blank">
                                Leer más
                            </a>
                            <Square1></Square1>
                            <Square2></Square2>
                        </Card>
                        <TextCard></TextCard>
                    </ContainerCards>
                ))}
                <Link
                    className="moreTec"
                    to="/technologies"
                    onClick={scrollToTop}
                >
                    Ver más
                </Link>
            </TechnologiesSection>
            <FormContact />
        </Container>
    );
};

export default Home;
