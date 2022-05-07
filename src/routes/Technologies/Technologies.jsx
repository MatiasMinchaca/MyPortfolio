import React from 'react';
import {TechnologiesDB} from './TechnologiesDB'
import {
    Card, 
    ContainerCards, 
    TechnologiesSection, 
    Square1, 
    Square2, 
    TextCard,
    TittleTec} from './Technologies elements';

const Technologies = () => {
    return (
        <TechnologiesSection >
                <TittleTec>
                    Tecnologías
                </TittleTec>
                {
                    TechnologiesDB.map(element => 
                        <ContainerCards key={element.name}>
                        <Card>
                            {element.icon}
                            <h2>
                                {element.name}
                            </h2>
                            <p>
                                {
                                    element.docs.length > 210 ? `${element.docs.slice(0, 210)}...` : element.docs
                                }
                            </p>
                            <a href={element.link} target="blank">
                                Leer más
                            </a>
                            <Square1>
                            </Square1>
                            <Square2>
                            </Square2>
                        </Card>
                        <TextCard>
                        </TextCard>
                    </ContainerCards>
                    )
                }
            </TechnologiesSection>
    );
};

export default Technologies;