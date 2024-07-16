import ReactIcon from "../../components/icons/ReactIcon";
import ApolloIcon from "../../components/icons/ApolloIcon";
import CSSIcon from "../../components/icons/CSSIcon";
import ExpressIcon from "../../components/icons/ExpresJsIcon";
import FirebaseIcon from "../../components/icons/FirebaseIcon";
import FigmaIcon from "../../components/icons/FigmaIcon";
import GraphQLIcon from "../../components/icons/GraphQLIcon";
import GitHubIcon from "../../components/icons/GitHubIcon";
import GitIcon from "../../components/icons/GitIcon";
import HTMLIcon from "../../components/icons/HTMLIcon";
import JavaScriptIcon from "../../components/icons/JavaScriptIcon";
import JWTIcon from "../../components/icons/JWTIcon";
import MySQLIcon from "../../components/icons/MySQLIcon";
import NextJsIcon from "../../components/icons/NextJsIcon";
import NodeJsIcon from "../../components/icons/NodeJsIcon";
import SequelizeIcon from "../../components/icons/SequelizeIcon";
import TypeScriptIcon from "../../components/icons/TypeScriptIcon";
import TrelloIcon from "../../components/icons/TrelloIcon";
import NPMIcon from "../../components/icons/NPMIcon";
import VueJsIcon from "../../components/icons/VueJsIcon";
import AngularJsIcon from "../../components/icons/AngularJsIcon";
import DockerIcon from "../../components/icons/DockerIcon"
import PHPIcon from "../../components/icons/PHPIcon"
import WordpressIcon from "../../components/icons/WordpressIcon";
import LaravelIcon from "../../components/icons/LaravelIcon";

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
        icon: <CSSIcon width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'JavaScript',
        docs: 'JavaScript (o "JS") es un lenguaje de programación que se usa con mayor frecuencia para scripts dinámicos de lado del cliente en páginas web, pero también se usa a menudo en el lado del servidor (en-US) — usando un entorno de ejecución como Node.js. JavaScript no se debe confundir con el lenguaje de programación Java. Aunque "Java" y "JavaScript" son marcas comerciales (o marcas comerciales registradas) de Oracle en EE. UU. y otros países, los dos lenguajes de programación son significativamente diferentes en su sintaxis, semántica y casos de uso.',
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/JAVASCRIPT',
        icon: <JavaScriptIcon width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'PHP',
        docs: "Lo que distingue a PHP de algo del lado del cliente como Javascript es que el código es ejecutado en el servidor, generando HTML y enviándolo al cliente. El cliente recibirá el resultado de ejecutar el script, aunque no se sabrá el código subyacente que era. El servidor web puede ser configurado incluso para que procese todos los ficheros HTML con PHP, por lo que no hay manera de que los usuarios puedan saber qué se tiene debajo de la manga.",
        link: 'https://www.php.net/manual/es/intro-whatis.php',
        icon: <PHPIcon width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'Laravel',
        docs: "Laravel es un framework PHP gratis y de código abierto que brinda un conjunto de herramientas y recursos para crear aplicaciones modernas. Posee un ecosistema integral que combina funciones integradas y una variedad de paquetes y extensiones compatibles. ",
        link: 'https://laravel.com/docs/11.x#meet-laravel',
        icon: <LaravelIcon width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'TypeScript',
        docs: "TypeScript agrega sintaxis adicional a JavaScript para admitir una integración más estrecha con su editor . Detecte errores temprano en su editor. El código TypeScript se convierte a JavaScript, que se ejecuta en cualquier lugar donde se ejecute JavaScript : en un navegador, en Node.js o Deno y en sus aplicaciones.",
        link: 'https://www.typescriptlang.org/',
        icon: <TypeScriptIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Wordpress',
        docs: "WordPress es un sistema de gestión de contenidos lanzado el 27 de mayo de 2003, enfocado a la creación de cualquier tipo de página web. Originalmente alcanzó una gran popularidad en la creación de blogs, para luego convertirse en una de las principales herramientas para la creación de páginas web comerciales.",
        link: 'https://wordpress.com/es/',
        icon: <WordpressIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'React Js',
        docs: "React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien. Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.",
        link: 'https://reactjs.org/',
        icon: <ReactIcon className='react-animate' width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'Next JS',
        docs: "Next.js le brinda la mejor experiencia de desarrollador con todas las funciones que necesita para la producción: renderizado híbrido estático y de servidor, compatibilidad con TypeScript, agrupación inteligente, búsqueda previa de ruta y más. No se necesita configuración.",
        link: 'https://nextjs.org/',
        icon: <NextJsIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Angular Js',
        docs: "This topic can help you understand Angular: what Angular is, what advantages it provides, and what you might expect as you start to build your applications. With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
        link: 'https://angular.io/guide/what-is-angular',
        icon: <AngularJsIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Vue Js',
        docs: "Vue (pronounced /vju/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries (opens new window).",
        link: 'https://v3.vuejs.org/guide/introduction.html',
        icon: <VueJsIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Node Js',
        docs: "Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables. En el siguiente ejemplo de 'hola mundo', pueden atenderse muchas conexiones simultáneamente. Por cada conexión, se activa la devolución de llamada o callback, pero si no hay trabajo que hacer, Node.js se dormirá.",
        link: 'https://nodejs.org/en/about/',
        icon: <NodeJsIcon width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'Docker',
        docs: "Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos.",
        link: 'https://www.docker.com/',
        icon: <DockerIcon width={'3em'} height={'3em'} fill={'darkred'} />
    },
    {
        name: 'Express Js',
        docs: "Express es un marco de aplicación web de Node.js mínimo y flexible que proporciona un conjunto sólido de funciones para aplicaciones web y móviles. Con una miríada de métodos de utilidad HTTP y middleware a su disposición, crear una API robusta es rápido y fácil.",
        link: 'https://expressjs.com/',
        icon: <ExpressIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Sequelize',
        docs: "Sequelize es una herramienta ORM de Node.js basada en promesas para Postgres , MySQL , MariaDB , SQLite y Microsoft SQL Server . Cuenta con un sólido soporte de transacciones, relaciones, carga ansiosa y diferida, replicación de lectura y más. Sequelize sigue el control de versiones semánticas y es compatible con Node v10 y superior.",
        link: 'https://sequelize.org/',
        icon: <SequelizeIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'MySQL DB',
        docs: "Oracle MySQL HeatWave es un servicio de base de datos completamente administrado, impulsado por el acelerador de consultas en memoria integrado HeatWave . Es el único servicio de base de datos en la nube que permite OLTP, OLAP y el aprendizaje automático directamente dentro de una base de datos MySQL, sin la integración y el movimiento de datos complejos, lentos y costosos con un servicio de análisis o aprendizaje automático independiente.",
        link: 'https://www.oracle.com/mysql/',
        icon: <MySQLIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Firebase ',
        docs: "Firebase es una plataforma de desarrollo de aplicaciones que lo ayuda a crear y desarrollar aplicaciones y juegos que les encantan a los usuarios. Respaldado por Google y en el que confían millones de empresas de todo el mundo.",
        link: 'https://firebase.google.com/?hl=es-419',
        icon: <FirebaseIcon width="3em" height="3em" fill='darkred' />
    },
/*     {
        name: 'Python',
        docs: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.",
        link: 'https://www.python.org/doc/essays/blurb/',
        icon: <FaPython />
    }, */
    {
        name: 'GraphQL',
        docs: "GraphQL es un lenguaje de consulta para API y un tiempo de ejecución para cumplir con esas consultas con sus datos existentes. GraphQL brinda una descripción completa y comprensible de los datos en su API, brinda a los clientes el poder de solicitar exactamente lo que necesitan y nada más, facilita la evolución de las API con el tiempo y habilita herramientas poderosas para desarrolladores.",
        link: 'https://graphql.org/',
        icon: <GraphQLIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Apollo Server',
        docs: "Apollo Server es un servidor GraphQL de código abierto que cumple con las especificaciones y es compatible con cualquier cliente GraphQL, incluido Apollo Client . Es la mejor manera de crear una API de GraphQL autodocumentada y lista para la producción que puede usar datos de cualquier fuente.",
        link: 'https://www.apollographql.com/docs/apollo-server/',
        icon: <ApolloIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Json Web Token',
        docs: "JSON Web Token (JWT) es un estándar abierto ( RFC 7519 ) que define una forma compacta y autónoma de transmitir información de forma segura entre las partes como un objeto JSON. Esta información se puede verificar y confiar porque está firmada digitalmente. Los JWT se pueden firmar usando un secreto (con el algoritmo HMAC ) o un par de claves pública/privada usando RSA o ECDSA .",
        link: 'https://jwt.io/introduction',
        icon: <JWTIcon width="3em" height="3em" />
    },
    {
        name: 'Npm',
        docs: "npm, Inc. es una empresa fundada en 2014 y fue adquirida por GitHub en 2020. npm es una parte fundamental de la comunidad de JavaScript y ayuda a respaldar uno de los ecosistemas de desarrolladores más grandes del mundo. npm es muchas cosas. npm es el administrador de paquetes de Node.js. Fue creado en 2009 como un proyecto de código abierto para ayudar a los desarrolladores de JavaScript a compartir fácilmente módulos de código empaquetados",
        link: 'https://www.npmjs.com/about',
        icon: <NPMIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Git',
        docs: "Un sistema de control de versiones o VCS (Version Control System, por sus siglas en inglés), rastrea el historial de cambios conforme las personas y los equipos colaboran juntos en los proyectos. Conforme los desarrolladores hacen cambios al proyecto, cualquier versión anterior de este puede recuperarse en cualquier momento.",
        link: 'https://docs.github.com/es/get-started/using-git/about-git',
        icon: <GitIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'GitHub',
        docs: "GitHub es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc. Anteriormente era conocida como Logical Awesome LLC. El código de los proyectos alojados en GitHub se almacena generalmente de forma pública.",
        link: 'https://github.com/about',
        icon: <GitHubIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Figma',
        docs: "Figma es un editor de gráficos vectorial y una herramienta de generación de prototipos, principalmente basada en la web, con características off-line adicionales habilitadas por aplicaciones de escritorio en macOS y Windows. Las aplicaciones Figma Mirror companion para Android y iOS permiten mirar los prototipos de Figma en dispositivos móviles.1​ El conjunto de funciones de Figma, se enfoca en el uso de la interfaz de usuario y el diseño de experiencia de usuario, con énfasis en la colaboración en tiempo real.",
        link: 'https://www.figma.com/about/',
        icon: <FigmaIcon width="3em" height="3em" fill='darkred' />
    },
    {
        name: 'Trello',
        docs: "Trello es la herramienta de gestión de trabajo flexible donde los equipos pueden idear planes, colaborar en proyectos, organizar flujos de trabajo y realizar un seguimiento del progreso de una manera visual, productiva y gratificante. Desde la lluvia de ideas hasta la planificación y la ejecución, Trello gestiona los grandes hitos y las tareas diarias de trabajar juntos y hacer las cosas.",
        link: 'https://trello.com/en/about',
        icon: <TrelloIcon width="3em" height="3em" fill='darkred' />
    },
]

