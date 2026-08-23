const translations = {
    es: {
        nav: {
            home: 'Home',
            about: 'Sobre mí',
            experience: 'Experiencia',
            contact: 'Contacto',
            resume: 'Descargar CV'
        },
        hero: {
            title: 'Full-Stack Technical Developer',
            subtitle: 'WordPress, WooCommerce, APIs, automatizacion y backend.',
            location: 'Argentino · Sevilla, España',
            ageSuffix: 'años',
            experience: 'Ver experiencia',
            contact: 'Contactarme',
            home: 'Inicio'
        },
        home: {
            servicesTitle: 'Qué hago',
            servicesIntro: 'Resuelvo problemas tecnicos que cruzan codigo, CMS, APIs, automatizacion e infraestructura.',
            experienceTitle: 'Experiencia Profesional',
            experienceIntro: 'Perfil tecnico hibrido: desarrollo web, WordPress/WooCommerce, integraciones, automatizacion y soporte de sistemas en produccion.',
            projectsTitle: 'Proyectos Seleccionados',
            projectsIntro: 'Casos reales donde combine desarrollo, infraestructura, APIs, automatizacion y resolucion tecnica.',
            stackTitle: 'Stack Técnico',
            stackIntro: 'Tecnologias agrupadas por uso real en proyectos, integraciones, soporte e infraestructura.',
            role: 'Rol',
            problem: 'Problema',
            solution: 'Solución'
        },
        services: [
            { title: 'WordPress & WooCommerce', description: 'Desarrollo, mantenimiento, plugins, performance, seguridad y soporte de plataformas en produccion.' },
            { title: 'Integraciones & APIs', description: 'Conexion entre sistemas externos, CRMs, plataformas educativas, pasarelas de pago y servicios REST.' },
            { title: 'Automatizacion', description: 'Flujos con n8n, subworkflows, HTTP requests, procesos internos y sincronizacion entre herramientas.' },
            { title: 'Backend & Soporte Tecnico', description: 'PHP, Python, FastAPI, SQL, Linux, hosting, DNS, SSL, migraciones y diagnostico de incidencias.' }
        ],
        experience: [
            {
                company: 'Bululu Agency',
                period: 'Octubre 2024 - Actualidad',
                role: 'Technical Developer',
                description: 'Participacion en proyectos para clientes como Polestar Pilates, T-ROC Global e ISECO, trabajando en desarrollo, mantenimiento, integraciones, automatizaciones, infraestructura y soporte tecnico.',
                highlights: ['WordPress, WooCommerce, PHP y desarrollo de funcionalidades.', 'Integraciones con APIs REST, D2L Brightspace, Stripe, PayPal y CRMs.', 'Automatizaciones con n8n y flujos entre plataformas externas.', 'Migraciones, DNS, SSL, hosting, permisos Linux, .htaccess y PHP-FPM.', 'Analisis de seguridad, actualizaciones y resolucion de incidencias en produccion.']
            },
            {
                company: 'Tuxdi',
                period: '2024',
                role: 'Web Developer',
                description: 'Experiencia en desarrollo web, mantenimiento de sitios y resolucion de requerimientos tecnicos para proyectos digitales.',
                highlights: ['Desarrollo y mantenimiento web.', 'Trabajo con sitios en produccion.', 'Soporte tecnico y mejora de funcionalidades.']
            },
            {
                company: 'Pukara',
                period: '2022 - 2023',
                role: 'Web Developer',
                description: 'Primeras experiencias profesionales en desarrollo web, soporte y mantenimiento de proyectos.',
                highlights: ['Desarrollo de interfaces y funcionalidades web.', 'Mantenimiento y soporte de sitios.', 'Colaboracion en equipos de trabajo.']
            }
        ],
        projects: [
            { title: 'Polestar Pilates', subtitle: 'Proyecto cliente desde Bululu Agency', role: 'Desarrollo, soporte tecnico e integraciones.', problem: 'Plataformas WordPress/WooCommerce con procesos conectados a sistemas externos, pagos, enrollment y automatizaciones.', solution: 'Mantenimiento de funcionalidades, integraciones API, automatizaciones con n8n, soporte de pagos/suscripciones y mejoras tecnicas del sitio.', tags: ['WordPress', 'WooCommerce', 'APIs', 'n8n', 'D2L', 'Stripe', 'SEO tecnico'] },
            { title: 'T-ROC Global', subtitle: 'Proyecto cliente desde Bululu Agency', role: 'Mantenimiento web y soporte tecnico.', problem: 'Sitios WordPress en produccion con necesidades de actualizacion, formularios, integraciones y resolucion de incidencias.', solution: 'Desarrollo de paginas y funcionalidades, trabajo con Elementor, ajustes de formularios e integraciones y soporte tecnico continuo.', tags: ['WordPress', 'Elementor', 'Formularios', 'Integraciones', 'Soporte'] },
            { title: 'ISECO', subtitle: 'Proyecto cliente desde Bululu Agency', role: 'Migracion, infraestructura y seguridad WordPress.', problem: 'Necesidad de migrar hosting y poner a punto un entorno WordPress con cambios de PHP, DNS, SSL y configuracion de servidor.', solution: 'Revision de permisos, .htaccess, PHP, SSL, DNS, plugins, seguridad y resolucion de problemas del entorno.', tags: ['WordPress', 'Hosting', 'PHP', 'DNS', 'SSL', 'Linux', 'Seguridad'] },
            { title: 'Monitoring Platform', subtitle: 'Proyecto personal', role: 'Backend, infraestructura ligera y self-hosting.', problem: 'Necesidad de monitorear disponibilidad de sitios y servicios con ejecucion continua fuera de la PC principal.', solution: 'Plataforma con Python, FastAPI, SQLite y Raspberry Pi, orientada a monitoreo, logs, ejecucion persistente y futuras notificaciones.', tags: ['Python', 'FastAPI', 'SQLite', 'Raspberry Pi', 'Linux', 'Monitoring'] }
        ],
        stack: [
            { title: 'Core Web', items: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'HTML', 'CSS'] },
            { title: 'Backend', items: ['Python', 'FastAPI', 'SQL', 'APIs REST', 'SQLite', 'PHP-FPM'] },
            { title: 'Automatizacion', items: ['n8n', 'Mautic', 'ActiveCampaign', 'Mailchimp', 'Chatwoot', 'CRM'] },
            { title: 'Infraestructura', items: ['Linux', 'Docker', 'DNS', 'SSL', 'Hosting', 'Raspberry Pi', 'Git/GitHub'] }
        ],
        contact: {
            label: 'Contacto',
            title: '¿Trabajamos juntos?',
            description: 'Si necesitás desarrollo WordPress/WooCommerce, integraciones, automatización o soporte técnico, escribime y lo vemos.'
        },
        about: {
            title: 'Sobre Mí',
            paragraphs: [
                'Soy Full-Stack Technical Developer con foco en WordPress, WooCommerce, integraciones, automatizacion y soporte tecnico avanzado. Me especializo en resolver problemas que mezclan codigo, CMS, APIs, servidores, hosting, DNS y herramientas de negocio.',
                'Desde octubre de 2024 trabajo en Bululu Agency participando en proyectos para clientes como Polestar Pilates, T-ROC Global e ISECO. Mi trabajo incluye desarrollo y mantenimiento WordPress/WooCommerce, integraciones con APIs, automatizaciones con n8n, soporte de sitios en produccion, migraciones, seguridad y configuracion de entornos.',
                'Mi diferencial es tomar una incidencia ambigua y seguir el rastro hasta encontrar la causa: puede estar en un plugin, una API, una base de datos, permisos Linux, PHP-FPM, .htaccess, SSL, DNS o una automatizacion mal conectada.',
                'Tambien estoy desarrollando proyectos propios con Python, FastAPI, SQLite y Raspberry Pi, explorando monitoreo, self-hosting, procesos persistentes y arquitectura backend ligera.',
                'Me interesa construir soluciones que funcionen en produccion, sean mantenibles y conecten bien las necesidades del negocio con la implementacion tecnica.'
            ],
            currentProfileTitle: 'Perfil técnico actual',
            currentProfileSubtitle: 'Desarrollo, integraciones, automatizacion e infraestructura tecnica.',
            currentProfileParagraph: 'Actualmente mi perfil combina desarrollo web, soporte tecnico e integraciones. Trabajo principalmente con WordPress, WooCommerce, PHP, JavaScript, APIs REST, automatizaciones con n8n y herramientas de marketing/CRM.\nTambien tengo experiencia practica en hosting, migraciones, DNS, SSL, Linux, permisos, .htaccess, PHP-FPM, seguridad WordPress y resolucion de problemas en entornos productivos.\nEn paralelo, estoy fortaleciendo backend con Python, FastAPI, SQLite, testing y despliegues simples en Raspberry Pi, usando Git/GitHub y SSH como parte de mi flujo de trabajo.\nBusco seguir creciendo como desarrollador tecnico capaz de diagnosticar, implementar y mantener soluciones completas, desde la funcionalidad visible hasta la infraestructura que la sostiene.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About me',
            experience: 'Experience',
            contact: 'Contact',
            resume: 'Download CV'
        },
        hero: {
            title: 'Full-Stack Technical Developer',
            subtitle: 'WordPress, WooCommerce, APIs, automation and backend.',
            location: 'Argentinian · Seville, Spain',
            ageSuffix: 'years old',
            experience: 'View experience',
            contact: 'Contact me',
            home: 'Home'
        },
        home: {
            servicesTitle: 'What I do',
            servicesIntro: 'I solve technical problems across code, CMS platforms, APIs, automation and infrastructure.',
            experienceTitle: 'Professional Experience',
            experienceIntro: 'Hybrid technical profile: web development, WordPress/WooCommerce, integrations, automation and production support.',
            projectsTitle: 'Selected Projects',
            projectsIntro: 'Real cases where I combined development, infrastructure, APIs, automation and technical troubleshooting.',
            stackTitle: 'Technical Stack',
            stackIntro: 'Technologies grouped by real use in projects, integrations, support and infrastructure.',
            role: 'Role',
            problem: 'Problem',
            solution: 'Solution'
        },
        services: [
            { title: 'WordPress & WooCommerce', description: 'Development, maintenance, plugins, performance, security and support for production platforms.' },
            { title: 'Integrations & APIs', description: 'Connections between external systems, CRMs, learning platforms, payment gateways and REST services.' },
            { title: 'Automation', description: 'n8n workflows, subworkflows, HTTP requests, internal processes and synchronization between tools.' },
            { title: 'Backend & Technical Support', description: 'PHP, Python, FastAPI, SQL, Linux, hosting, DNS, SSL, migrations and incident diagnosis.' }
        ],
        experience: [
            {
                company: 'Bululu Agency',
                period: 'October 2024 - Present',
                role: 'Technical Developer',
                description: 'Participation in client projects such as Polestar Pilates, T-ROC Global and ISECO, working on development, maintenance, integrations, automation, infrastructure and technical support.',
                highlights: ['WordPress, WooCommerce, PHP and feature development.', 'REST API integrations, D2L Brightspace, Stripe, PayPal and CRMs.', 'n8n automations and workflows between external platforms.', 'Migrations, DNS, SSL, hosting, Linux permissions, .htaccess and PHP-FPM.', 'Security analysis, updates and production incident resolution.']
            },
            {
                company: 'Tuxdi',
                period: '2024',
                role: 'Web Developer',
                description: 'Experience in web development, website maintenance and technical requirements for digital projects.',
                highlights: ['Web development and maintenance.', 'Work on production websites.', 'Technical support and feature improvements.']
            },
            {
                company: 'Pukara',
                period: '2022 - 2023',
                role: 'Web Developer',
                description: 'Early professional experience in web development, support and project maintenance.',
                highlights: ['Web interfaces and feature development.', 'Website maintenance and support.', 'Collaboration in work teams.']
            }
        ],
        projects: [
            { title: 'Polestar Pilates', subtitle: 'Client project through Bululu Agency', role: 'Development, technical support and integrations.', problem: 'WordPress/WooCommerce platforms with processes connected to external systems, payments, enrollment and automations.', solution: 'Feature maintenance, API integrations, n8n automations, payment/subscription support and technical site improvements.', tags: ['WordPress', 'WooCommerce', 'APIs', 'n8n', 'D2L', 'Stripe', 'Technical SEO'] },
            { title: 'T-ROC Global', subtitle: 'Client project through Bululu Agency', role: 'Website maintenance and technical support.', problem: 'Production WordPress sites requiring updates, forms, integrations and incident resolution.', solution: 'Page and feature development, Elementor work, form/integration adjustments and ongoing technical support.', tags: ['WordPress', 'Elementor', 'Forms', 'Integrations', 'Support'] },
            { title: 'ISECO', subtitle: 'Client project through Bululu Agency', role: 'Migration, infrastructure and WordPress security.', problem: 'Hosting migration and WordPress environment setup involving PHP changes, DNS, SSL and server configuration.', solution: 'Permissions, .htaccess, PHP, SSL, DNS, plugins, security and environment troubleshooting.', tags: ['WordPress', 'Hosting', 'PHP', 'DNS', 'SSL', 'Linux', 'Security'] },
            { title: 'Monitoring Platform', subtitle: 'Personal project', role: 'Backend, lightweight infrastructure and self-hosting.', problem: 'Need to monitor website and service availability with continuous execution outside the main PC.', solution: 'Platform built with Python, FastAPI, SQLite and Raspberry Pi, focused on monitoring, logs, persistent execution and future notifications.', tags: ['Python', 'FastAPI', 'SQLite', 'Raspberry Pi', 'Linux', 'Monitoring'] }
        ],
        stack: [
            { title: 'Core Web', items: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'HTML', 'CSS'] },
            { title: 'Backend', items: ['Python', 'FastAPI', 'SQL', 'REST APIs', 'SQLite', 'PHP-FPM'] },
            { title: 'Automation', items: ['n8n', 'Mautic', 'ActiveCampaign', 'Mailchimp', 'Chatwoot', 'CRM'] },
            { title: 'Infrastructure', items: ['Linux', 'Docker', 'DNS', 'SSL', 'Hosting', 'Raspberry Pi', 'Git/GitHub'] }
        ],
        contact: {
            label: 'Contact',
            title: 'Shall we work together?',
            description: 'If you need WordPress/WooCommerce development, integrations, automation or technical support, send me a message and let’s talk.'
        },
        about: {
            title: 'About Me',
            paragraphs: [
                'I am a Full-Stack Technical Developer focused on WordPress, WooCommerce, integrations, automation and advanced technical support. I specialize in solving problems across code, CMS platforms, APIs, servers, hosting, DNS and business tools.',
                'Since October 2024 I have been working at Bululu Agency, participating in client projects such as Polestar Pilates, T-ROC Global and ISECO. My work includes WordPress/WooCommerce development and maintenance, API integrations, n8n automations, production support, migrations, security and environment configuration.',
                'My main strength is taking an ambiguous issue and tracing it until the root cause is found: it can be in a plugin, an API, a database, Linux permissions, PHP-FPM, .htaccess, SSL, DNS or a broken automation.',
                'I am also building personal projects with Python, FastAPI, SQLite and Raspberry Pi, exploring monitoring, self-hosting, persistent processes and lightweight backend architecture.',
                'I care about building solutions that work in production, are maintainable and connect business needs with technical implementation.'
            ],
            currentProfileTitle: 'Current technical profile',
            currentProfileSubtitle: 'Development, integrations, automation and technical infrastructure.',
            currentProfileParagraph: 'My current profile combines web development, technical support and integrations. I mainly work with WordPress, WooCommerce, PHP, JavaScript, REST APIs, n8n automations and marketing/CRM tools.\nI also have hands-on experience with hosting, migrations, DNS, SSL, Linux, permissions, .htaccess, PHP-FPM, WordPress security and troubleshooting production environments.\nIn parallel, I am strengthening backend development with Python, FastAPI, SQLite, testing and simple deployments on Raspberry Pi, using Git/GitHub and SSH as part of my workflow.\nI aim to keep growing as a technical developer capable of diagnosing, implementing and maintaining complete solutions, from visible functionality to the infrastructure that supports it.'
        }
    }
};

export default translations;
