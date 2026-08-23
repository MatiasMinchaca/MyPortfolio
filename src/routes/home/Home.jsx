/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
    Container,
    ExperienceCard,
    ExperienceSection,
    ProjectTag,
    ProyectsSection,
    ServiceCard,
    ServicesSection,
    SelectedProjectCard,
    TagsContainer,
    TechCategoryCard,
    TechStackSection,
} from "./Home elements";
import ImMatias from "../../components/I'mMatias";
import { ExperienceDB, SelectedProjectsDB, ServicesDB, TechCategoriesDB } from "./HomeDB";
import FormContact from '../../components/formContact/FormContact';

const Home = () => {
    return (
        <Container>
            <ImMatias />
            <ServicesSection>
                <h1 className="titleProyects">Qué hago</h1>
                <p className="sectionIntro">
                    Resuelvo problemas tecnicos que cruzan codigo, CMS, APIs, automatizacion e infraestructura.
                </p>
                {ServicesDB.map((service) => (
                    <ServiceCard key={service.title}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </ServiceCard>
                ))}
            </ServicesSection>
            <ExperienceSection id="experience">
                <h1 className="titleProyects">Experiencia Profesional</h1>
                <p className="sectionIntro">
                    Perfil tecnico hibrido: desarrollo web, WordPress/WooCommerce, integraciones, automatizacion y soporte de sistemas en produccion.
                </p>
                {ExperienceDB.map((experience) => (
                    <ExperienceCard key={experience.company}>
                        <span>{experience.period}</span>
                        <h2>{experience.company}</h2>
                        <h3>{experience.role}</h3>
                        <p>{experience.description}</p>
                        <ul>
                            {experience.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </ExperienceCard>
                ))}
            </ExperienceSection>
            <ProyectsSection>
                <h1 className="titleProyects">Proyectos Seleccionados</h1>
                <p className="sectionIntro">
                    Casos reales donde combine desarrollo, infraestructura, APIs, automatizacion y resolucion tecnica.
                </p>
                {SelectedProjectsDB.map((project) => (
                    <SelectedProjectCard key={project.title}>
                        <h2>{project.title}</h2>
                        <h3>{project.subtitle}</h3>
                        <dl>
                            <div>
                                <dt>Rol</dt>
                                <dd>{project.role}</dd>
                            </div>
                            <div>
                                <dt>Problema</dt>
                                <dd>{project.problem}</dd>
                            </div>
                            <div>
                                <dt>Solución</dt>
                                <dd>{project.solution}</dd>
                            </div>
                        </dl>
                        <TagsContainer>
                            {project.tags.map((tag) => (
                                <ProjectTag key={tag}>{tag}</ProjectTag>
                            ))}
                        </TagsContainer>
                    </SelectedProjectCard>
                ))}
            </ProyectsSection>
            <TechStackSection>
                <h1 className="titleProyects">Stack Técnico</h1>
                <p className="sectionIntro">
                    Tecnologias agrupadas por uso real en proyectos, integraciones, soporte e infraestructura.
                </p>
                {TechCategoriesDB.map((category) => (
                    <TechCategoryCard key={category.title}>
                        <h2>{category.title}</h2>
                        <TagsContainer>
                            {category.items.map((item) => (
                                <ProjectTag key={item}>{item}</ProjectTag>
                            ))}
                        </TagsContainer>
                    </TechCategoryCard>
                ))}
            </TechStackSection>
            <FormContact />
        </Container>
    );
};

export default Home;
