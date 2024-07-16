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

const AboutMe = () => {

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
                    Web Developer
                </h2>
                <h3>
                    22 años
                    <br />
                    Buenos Aires, Argentina
                </h3>
                <NavLink to='/' className={'back'}>
                    Inicio
                </NavLink>
            </ContainerTextAbout>
            <FirstSectionAbout>
                <PhotoOne src='/images/photoThree.png' />
                <h2>
                    Sobre Mí...
                </h2>
                <p>
                    Desde que inicié en el mundo de la programación, algo en mí cambió. No solo mi manera de pensar, que día a día, gracias a la lógica de crear funciones en JavaScript, me hace razonar en mi vida cotidiana, sino también mi forma de ver todo. Gracias a HTML y CSS, combino elementos para que queden bonitos y simétricos, bloque tras bloque, etiqueta tras etiqueta, div tras div.
                </p>
                <p>
                    Comencé a estudiar programación después de terminar la escuela secundaria, que no estaba para nada relacionada con el mundo IT. Con la ayuda de Fundación Formar, Digital House y el Banco Santander, gané una beca para estudiar programación Full Stack. Armamos un proyecto de E-Commerce en equipo, con clases virtuales de los profesores y la plataforma de DH para seguir el ritmo.
                </p>
                <p>
                    Pero yo no me quedé con eso. Por mi cuenta, estudiaba todo el día, aprendiendo más de lo que nos dictaba el profesor. Utilizaba mi habilidad de "Googlear", que quizás no suene tan profesional, pero hoy todo está ahí. Aprender a usar la gran herramienta de búsqueda es indispensable porque las tecnologías, las librerías, los frameworks se actualizan constantemente. Para ver qué está pasando, se necesita Google. Una palabra, miles de resultados; por eso hay que saber usarla.
                </p>
                <p>
                    Noches sin dormir buscando cómo funciona cada función, cómo implementarla. Las ideas surgían y lo que yo hacía era ver cómo aprender más, llenarme de conocimiento. ¿Sabes por qué? Porque es algo que me apasiona, algo que me encanta y no me da vergüenza decirlo. Si por mí fuera, lo gritaría. Programar no solo es sentarte en la computadora y escribir, es pensar, razonar, ver, divertirte, crear. Son las mejores sensaciones que he podido tener y si no lo entiendes, te invito a que te sumes, aunque sea a echarle un ojo...
                </p>
                <p>
                    ¡No te arrepentirás!
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
                    Una breve historia
                </HistoryTitle>
                <HistoryContainer>
                    <h3>
                        Te contaré la historia de un chico que está pasando por su mejor momento...
                    </h3>
                    <p>
                        Nació al norte de Argentina, en una provincia llamada Salta. Desde pequeño, la tecnología siempre fue algo que le llamó mucho la atención. Para él, era fascinante ver cómo en un dispositivo se podían capturar momentos de la vida. Era un niño con pocos recursos económicos, pero le gustaba desarmar aparatos electrónicos viejos solo por diversión.
                        <br />
                        Siempre encontraba la forma de entretenerse: crear juguetes a base de artículos reciclados, dibujar, pintar, etc. La escuela nunca fue un problema; sacaba buenas notas. Sus padres pensaban que no hacía nada, ya que al llegar a casa se ponía a hacer otras cosas en vez de tarea, lo que no sabían era que él ya tenía todo hecho.
                        <br />
                        Al crecer, se daba cuenta de que no solo él crecía, sino que la tecnología lo acompañaba. A la edad de 12 años, tuvo su primer celular, y fue el boom que necesitaba. Tener tanto conocimiento en la palma de su mano abrió su mente y desde ahí comenzó algo nuevo para él. Aprendía todo lo que veía en internet: tutoriales, PDF, foros, etc. Nada lo detuvo.
                        <br />
                        Matías aprendió mucho y lo sigue haciendo. Sus amigos y familiares acudían a él en busca de soluciones para problemas con sus celulares, laptops o PCs. Si no lograba arreglarlo, dejaba todo para hallar el error. Lo que más le gusta es buscar hasta solucionar cualquier error u obstáculo que se ponga en su camino. No importa cuánto tiempo le tome; al final, usa la frase "todo tiene arreglo".
                        <br />
                        Durante la secundaria, mientras estudiaba en una escuela técnica, descubrió el mundo de la programación, que fue otro boom para él. Aunque no pudo dedicarle el tiempo que quería, ya que no poseía los recursos ni tiempo necesarios, al terminar la secundaria vio una oportunidad para irse a vivir a Buenos Aires. No lo dudó. Una vez allí, tuvo que decidir si entrar a la universidad o empezar a estudiar por su cuenta lo que es programación.
                        <br />
                        Pensó bastante en qué decisión tomar, pero llegó a la conclusión de estudiar por su cuenta o en algún curso corto. Lo que quería era adentrarse plenamente en el mundo IT, y qué mejor manera de hacerlo que dedicarse todo el tiempo a programar. Así es como llegamos aquí: después de estudiar más de un año con cursos y de manera autodidacta, leyendo documentación y viendo videos, ha hecho crecer su conocimiento. Ni se imaginan lo feliz que lo hace cuando escucha o habla de código.
                    </p>
                </HistoryContainer>
            </ThirdSectionAbout>
        </ContainerAbout>
    );
};

export default AboutMe;