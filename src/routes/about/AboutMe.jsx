import React from 'react';
import {
    ContainerAbout, 
    BlobAbout,
    ContainerTextAbout,
    FirstSectionAbout,
    SecondSectionAbout,
    PhotoOne,
    SkillCard,
    ThirdSectionAbout,
    TrianglesContainer,
    HistoryTitle,
    HistoryContainer} from './AboutMe elements';
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
                    <h1>
                        Matías Minchaca
                    </h1>
                    <h2>
                        Web Developer
                    </h2>
                    <h3>
                        Edad: 20 años
                        <br />
                        Residencia: Bs As, Argentina
                        <br />
                        Nacionalidad: Argentino
                        <br />
                        Lenguaje mas usado: JavaScript
                    </h3>
                    <NavLink to='/' className={'back'} title='About Me' >
                        Atras
                    </NavLink>
            </ContainerTextAbout>
            <FirstSectionAbout>
                <PhotoOne src='/images/photoThree.png' />
                <h2>
                    Sobre Mí...
                </h2>
                <p>
                    Desde que inicie en el mundo de la programación algo en mi cambio, no solo mi manera de pensar que día a día gracias a la lógica de crear funciones en JavaScript me hace razonar en mi vida cotidiana, sino también mi forma de ver todo, gracias a HTML y CSS combinar para que quede bonito y simétrico, bloque tras bloque, etiqueta tras etiqueta, div tras div.
                </p>
                <p>
                    Comencé a estudiar después de terminar la escuela secundaria que no era para nada relacionado al mundo IT, con la ayuda de Fundación Formar, Digital House y el Banco Santander, gane una beca para estudiar programación Full Stack, armamos un proyecto(E-Commerce) en equipo, con clases virtuales de los profesores y la plataforma para seguir el ritmo de DH.
                </p>
                <p>
                    Pero yo no me quede con eso, por mi cuenta estudiaba todo el día aprendiendo más de lo que nos dictaba el profesor, y si se le puede llamar use mi habilidad "Googlear" que quizás no suene tan profesional, pero hoy todo está ahí, aprender a usar la gran herramienta de búsqueda es indispensable porque las tecnologías, las librerías, los Freshworks se actualizan constantemente y para ver que eso está pasando se necesita Google una palabra miles de resultados, por eso hay que saber usarla.
                </p>
                <p>
                    Noches sin dormir buscando como funciona cada función, como implementarla, las ideas surgían y lo que yo hacía es ver como aprender más, llenarme de conocimiento, ¿Sabes por qué? Porque es algo que me apasiona, algo que me encanta y no me da vergüenza decirlo, si por mí fuera lo gritaría, programar no solo es sentarte en la computadora y escribir, es pensar, razonar, ver, divertirte, crear, son las mejores sensaciones que he podido tener y si no lo entiendes te invito a que te sumes a por lo menos echarle un ojo...
                </p>
                <p>¡No te arrpentiras!</p>
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
                    <Triangle left='0'/>
                    <Triangle left='10%'/>
                    <Triangle left='20%'/>
                    <Triangle left='30%'/>
                    <Triangle left='40%'/>
                    <Triangle left='50%'/>
                    <Triangle left='60%'/>
                    <Triangle left='70%'/>
                    <Triangle left='80%'/>
                    <Triangle left='90%'/>
                    <Triangle left='100%'/>
                    <Triangle left='110%'/>
                    <Triangle left='120%'/>
                </TrianglesContainer>
                <HistoryTitle>
                    Una breve historia
                </HistoryTitle>
                <HistoryContainer>
                    <h3>
                        Te contaré la historia de un chico que está pasando por su mejor momento...
                    </h3>
                    <p>
                        Nació al norte de Argentina en una provincia llamada Salta. Desde pequeño la tecnología siempre fue algo que le llamo mucho la atención. Para él era fascinante mirar como en un dispositivo podías capturar momentos de la vida claro, un niño que no tenía muchos recursos económicos, pero que le gustaba desarmar aparatos electrónicos viejos, solo por diversión.
                        <br />
                        Siempre encontraba la forma de entretenerse, crear juguetes a base de artículos reciclados, dibujar, pintar, etc. La escuela desde su niñez nunca fue problema, siempre sacaba buenas notas, sus padres siempre pensaba que no hacía nada, ya que al llegar a casa se ponía hacer otras cosas en vez de tarea, lo que no sabían era que él ya tenía todo hecho.
                        <br />
                        Al crecer se estaba dando cuenta de como no era el único que crecía, la tecnología lo acompañaba. A la edad de 12 años tuvo su primer celular y fue el boom que necesitaba. Tanto conocimiento en la palma de su mano, ni se imaginan como abrió su mente y desde ahí comenzó algo nuevo para él. Fue aprendiendo todo lo que veía, internet está repleto de información y lo que quería era aprender y seguir aprendiendo. Tutoriales, PDF, foros, etc. nada lo detuvo.
                        <br />
                        Matías aprendió mucho y lo sigue haciendo. Sus amigos y familiares, si tenían un problema o duda con sus celulares, laptops o PC, acuden a él en busca de una solución y si no lograba arreglarlo dejaba todo para hallar el error. Es lo que más le gusta buscar hasta solucionar el cualquier error u obstáculo que se ponga en su camino, no importa cuanto tiempo le tome, al siempre usa la frase 'todo tiene arreglo'.
                        <br />
                        Durante la secundaria, mientras estudiaba en una escuela técnica, descubrió el mundo de la programación que fue otro boom. Si bien no pudo dedicarle el tiempo que él quería, ya que no poseía los recursos ni tiempo necesarios. Al terminar el secundario vio una oportunidad para irse a vivir a Buenos Aires, no lo dudo, una vez ahí tuvo que decidir si entrar a la universidad o empezar a estudiar por su cuenta lo que es programación. 
                        <br />
                        Pensó bastante en que decisión tomar, pero llego a la conclusión de estudiar por su cuenta o en algún curso corto. Porque lo quería era adentrarse plenamente en el mundo IT, que mejor manera de hacerlo que decidirse todo el tiempo a programar. Así es como llegamos aqui, después de estudiar más de un año con cursos y autodidacta, leyendo documentación y viendo videos, hicieron crecer su conocimiento que ni se imaginan lo feliz que lo hace cuando escucha o habla de código.
                    </p>
                </HistoryContainer>
            </ThirdSectionAbout>
        </ContainerAbout>
    );
};

export default AboutMe;