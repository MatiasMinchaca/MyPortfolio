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
import FormContact from '../../components/formContact/FormContact';
import translations from '../../i18n/translations';

const Home = ({ lang = 'es' }) => {
    const t = translations[lang];

    return (
        <Container>
            <ImMatias lang={lang} />
            <ServicesSection>
                <h2 className="titleProyects">{t.home.servicesTitle}</h2>
                <p className="sectionIntro">
                    {t.home.servicesIntro}
                </p>
                {t.services.map((service) => (
                    <ServiceCard key={service.title}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </ServiceCard>
                ))}
            </ServicesSection>
            <ExperienceSection id="experience">
                <h2 className="titleProyects">{t.home.experienceTitle}</h2>
                <p className="sectionIntro">
                    {t.home.experienceIntro}
                </p>
                {t.experience.map((experience, index) => (
                    <ExperienceCard className={index === 0 ? 'featured-experience' : ''} key={experience.company}>
                        <span>{experience.period}</span>
                        <h2>{experience.company}</h2>
                        <h3>{experience.role}</h3>
                        {experience.companyDetails && <p>{experience.companyDetails}</p>}
                        {experience.location && <p>{experience.location}</p>}
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
                <h2 className="titleProyects">{t.home.projectsTitle}</h2>
                <p className="sectionIntro">
                    {t.home.projectsIntro}
                </p>
                {t.projects.map((project) => (
                    <SelectedProjectCard className="selected-project-card" key={project.title}>
                        <h2>{project.title}</h2>
                        <h3>{project.subtitle}</h3>
                        <dl>
                            <div>
                                <dt>{t.home.role}</dt>
                                <dd>{project.role}</dd>
                            </div>
                            <div>
                                <dt>{t.home.problem}</dt>
                                <dd>{project.problem}</dd>
                            </div>
                            <div>
                                <dt>{t.home.solution}</dt>
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
                <h2 className="titleProyects">{t.home.stackTitle}</h2>
                <p className="sectionIntro">
                    {t.home.stackIntro}
                </p>
                {t.stack.map((category) => (
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
            <FormContact lang={lang} />
        </Container>
    );
};

export default Home;
