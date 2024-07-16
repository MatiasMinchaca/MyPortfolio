import JavaScriptIcon from '../../components/icons/JavaScriptIcon';
import NodeJsIcon from '../../components/icons/NodeJsIcon';
import ReactIcon from '../../components/icons/ReactIcon';
import HTMLIcon from '../../components/icons/HTMLIcon';
import CSSIcon from '../../components/icons/CSSIcon';
import MySQLIcon from '../../components/icons/MySQLIcon';
import ExpresJsIcon from '../../components/icons/ExpresJsIcon';
import SequelizeIcon from '../../components/icons/SequelizeIcon';
import JWTIcon from '../../components/icons/JWTIcon';
import ApolloIcon from '../../components/icons/ApolloIcon';
import GraphQlIcon from '../../components/icons/GraphQLIcon';
import NextJsIcon from '../../components/icons/NextJsIcon';
import FirebaseIcon from '../../components/icons/FirebaseIcon';

export const TechnologiesDB = [
    {
        name: 'Html5',
        docs: 'La última versión estable de HTML, HTML5 convierte a HTML de un simple formato de marcado para estructurar documentos en una plataforma completa de desarrollo de aplicaciones. Entre otras características, HTML5 incluye nuevos elementos y API de JavaScript para mejorar el almacenamiento, la multimedia y el acceso al hardware.',
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
        icon: <HTMLIcon width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'Css3',
        docs: 'CSS, de las siglas en inglés Cascading Style Sheets (Hojas de Estilo en Cascada), es un lenguaje declarativo que controla el aspecto de las páginas web en el navegador. El navegador aplica declaraciones de estilo CSS a los elementos seleccionados para exhibirlos correctamente. Una declaración de estilos contiene las propiedades y sus respectivos valores, los cuales determinan cómo se verá una página web.',
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS',
        icon: <CSSIcon width={'3em'} height={'3em'} fill={'darkred'} />,
        aos: 'flip-left',
        placement: 'top-center',
        duration: '800'
    },
    {
        name: 'JavaScript',
        docs: 'JavaScript (o "JS") es un lenguaje de programación que se usa con mayor frecuencia para scripts dinámicos de lado del cliente en páginas web, pero también se usa a menudo en el lado del servidor (en-US) — usando un entorno de ejecución como Node.js. JavaScript no se debe confundir con el lenguaje de programación Java. Aunque "Java" y "JavaScript" son marcas comerciales (o marcas comerciales registradas) de Oracle en EE. UU. y otros países, los dos lenguajes de programación son significativamente diferentes en su sintaxis, semántica y casos de uso.',
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/JAVASCRIPT',
        icon: <JavaScriptIcon width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'React Js',
        docs: "React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien. Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.",
        link: 'https://reactjs.org/',
        icon: <ReactIcon className='react-animate' width={'3em'} height={'3em'} fill={'darkred'} />,
        aos: 'flip-left',
        placement: 'top-center',
        duration: '800'
    },
    {
        name: 'Node Js',
        docs: "Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables. En el siguiente ejemplo de 'hola mundo', pueden atenderse muchas conexiones simultáneamente. Por cada conexión, se activa la devolución de llamada o callback, pero si no hay trabajo que hacer, Node.js se dormirá.",
        link: 'https://nodejs.org/en/about/',
        icon: <NodeJsIcon width={'3em'} height={'3em'} fill={'darkred'} />
    }
]

export const ProyectsDB = [
    {
        title: 'Petyo',
        subtitle: 'Petshop',
        description: 'Petyo nace de una idea propuesta por un colega, que poco a poco fue creciendo, a nivel técnico este proyecto cuenta con: NodeJS(entorno de ejecución), ExpressJS(servidor), EJS(plantillas), MySQL(base de datos), Sequelize(ORM), Estructura MVC y Metodologías Ágiles',
        link: 'https://github.com/MatiasMinchaca/grupo_7_Petyo',
        images: [
            {
                url: '/images/proyects/ProyectPetyo1.jpg',
                caption: '1'
            },
            {
                url: '/images/proyects/ProyectPetyo2.jpg',
                caption: '2'
            },
            {
                url: '/images/proyects/ProyectPetyo3.jpg',
                caption: '3'
            },
            {
                url: '/images/proyects/ProyectPetyo4.jpg',
                caption: '4'
            },
            {
                url: '/images/proyects/ProyectPetyo5.jpg',
                caption: '5'
            },
        ],
        technologies: [
            {
                name: 'Html5',
                icon: <HTMLIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'Css3',
                icon: <CSSIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'JavaScript',
                icon: <JavaScriptIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'NodeJs',
                icon: <NodeJsIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'ExpressJs',
                icon: <ExpresJsIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'MySWQL',
                icon: <MySQLIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'Sequelize',
                icon: <SequelizeIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
        ]
    },
    {
        title: 'API Disney',
        subtitle: 'Challenge BackEnd',
        description: 'Este proyecto se utiliza como una API REST, se basa en el servidor express, con una base de datos relacional MySQL. Uso de JsonWebTokens para acceder a los diferentes puntos finales y el servicio SendGrid para enviar un correo electrónico de bienvenida al usuario al registrarse. Todo está documentado en el repositorio de GitHub.',
        link: 'https://github.com/MatiasMinchaca/Back-End-API-Disney',
        images: [
            {
                url: '/images/proyects/ProyectoAPIDisney1.jpg',
                caption: '1'
            },
            {
                url: '/images/proyects/ProyectoAPIDisney2.jpg',
                caption: '2'
            },
            {
                url: '/images/proyects/ProyectoAPIDisney3.jpg',
                caption: '3'
            },
            {
                url: '/images/proyects/ProyectoAPIDisney4.jpg',
                caption: '4'
            },
            {
                url: '/images/proyects/ProyectoAPIDisney5.jpg',
                caption: '5'
            },
        ],
        technologies: [
            {
                name: 'Html5',
                icon: <HTMLIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'Css3',
                icon: <CSSIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'JavaScript',
                icon: <JavaScriptIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'NodeJs',
                icon: <NodeJsIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'ExpressJs',
                icon: <ExpresJsIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'MySQL',
                icon: <MySQLIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'Sequelize',
                icon: <SequelizeIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'JsonWenTokens',
                icon: <JWTIcon width={'1em'} height={'1em'} className='rotation-animate' />
            }
        ]
    },
    {
        title: 'Star Wars Planets',
        subtitle: 'Challenge FrontEnd',
        description: 'Es un proyecto de React que usando GraphQL y Apollo Server, llamamos a la API de Star Wars y con React construimos una interfaz para consumirla, que muestra todos los planetas de la API. Los cuales podemos ver en las páginas 10 por 10, agregar a una sección de favoritos y buscarlos en tiempo real.',
        link: 'https://github.com/MatiasMinchaca/StartWarPlanetsAppReact',
        images: [
            {
                url: '/images/proyects/ProyectStarWarsPlanets1.jpg',
                caption: '1'
            },
            {
                url: '/images/proyects/ProyectStarWarsPlanets2.jpg',
                caption: '2'
            },
            {
                url: '/images/proyects/ProyectStarWarsPlanets3.jpg',
                caption: '3'
            },
            {
                url: '/images/proyects/ProyectStarWarsPlanets4.jpg',
                caption: '4'
            },
            {
                url: '/images/proyects/ProyectStarWarsPlanets5.jpg',
                caption: '5'
            },
        ],
        technologies: [
            {
                name: 'React JS',
                icon: <ReactIcon width={'1em'} height={'1em'} fill={'darkred'} className='rotation-animate' />
            },
            {
                name: 'JavaScript',
                icon: <JavaScriptIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'GraphQl',
                icon: <GraphQlIcon width={'1em'} height={'1em'} fill={'darkred'} className='rotation-animate' />
            },
            {
                name: 'Apollo Server',
                icon: <ApolloIcon width={'1em'} height={'1em'} fill={'darkred'} className='rotation-animate'/>
            }
        ]
    },
    {
        title: 'Crypto React App',
        subtitle: 'API by Binance',
        description: 'Diseñe una tabla que brinda una vista amigable para el usuario para que pueda ver la lista de criptomonedas con un sistema de paginación de 50 para cada página, encontrará 2 botones en la parte inferior que cambiarán la página ya sea hacia adelante o hacia atrás, tiene un encabezado que tiene una entrada de búsqueda que funciona presionando "Enter".',
        link: 'https://github.com/MatiasMinchaca/CryptoReactAppBinance',
        images: [
            {
                url: '/images/proyects/ProyectCryptoBinance1.jpg',
                caption: '1'
            },
            {
                url: '/images/proyects/ProyectCryptoBinance2.jpg',
                caption: '2'
            },
            {
                url: '/images/proyects/ProyectCryptoBinance3.jpg',
                caption: '3'
            },
            {
                url: '/images/proyects/ProyectCryptoBinance4.jpg',
                caption: '4'
            },
            {
                url: '/images/proyects/ProyectCryptoBinance5.jpg',
                caption: '5'
            },
        ],
        technologies: [
            {
                name: 'React JS',
                icon: <ReactIcon width={'1em'} height={'1em'} fill={'darkred'} className='rotation-animate' />
            },
            {
                name: 'JavaScript',
                icon: <JavaScriptIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
        ]
    },
    /* {
        title: 'LetterApp',
        subtitle: 'App restaurant menu',
        description: 'Una app web sencilla para crear cartas/menus para tu restaurant. Utilizando las tecnologías de NextJs, ReactJs y Firebase cree una amigable app web con la que te puedes registrar, loguear y crear cartas para tu restaurant, una vez creado, se te proporcionara un codigo QR el cual puedes descargar para acceder a cada carta/menu creada.',
        link: 'https://github.com/MatiasMinchaca/CryptoReactAppBinance',
        images: [
            {
                url: '/images/proyects/ProyectLetterApp1.jpg',
                caption: '1'
            },
            {
                url: '/images/proyects/ProyectLetterApp2.jpg',
                caption: '2'
            },
            {
                url: '/images/proyects/ProyectLetterApp3.jpg',
                caption: '3'
            },
            {
                url: '/images/proyects/ProyectLetterApp4.jpg',
                caption: '4'
            },
            {
                url: '/images/proyects/ProyectLetterApp5.jpg',
                caption: '5'
            },
        ],
        technologies: [
            {
                name: 'React JS',
                icon: <ReactIcon width={'1em'} height={'1em'} fill={'darkred'} className='rotation-animate' />
            },
            {
                name: 'JavaScript',
                icon: <JavaScriptIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'NextJs',
                icon: <NextJsIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
            {
                name: 'Firebase',
                icon: <FirebaseIcon width={'1em'} height={'1em'} fill={'darkred'} />
            },
        ]
    }, */
]