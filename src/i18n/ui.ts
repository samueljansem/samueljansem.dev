export const languages = {
  en: 'English',
  'pt-br': 'Portugues',
} as const

export type Locale = keyof typeof languages

export const defaultLocale: Locale = 'en'

export const ui = {
  en: {
    // Nav
    'nav.home': 'home',
    'nav.projects': 'projects',
    'nav.blog': 'blog',
    'nav.about': 'about',
    'nav.experiences': 'experiences',
    'nav.contact': 'contact',

    // Page titles
    'page.about.title': 'About Me',
    'page.experiences.title': 'Experiences',
    'page.contact.title': 'Contact',
    'page.projects.title': 'Projects',
    'page.blog.title': 'Blog',

    // About page
    'about.bio.title': 'Who I am',
    'about.bio.content':
      "I'm Samuel Jansem, a Software Engineer based in Brazil. I build web applications and open-source tools with a focus on clean architecture and developer experience.",
    'about.skills.title': 'Skills & Technologies',
    'about.philosophy.title': 'Engineering Philosophy',
    'about.philosophy.content':
      'I believe in writing simple, maintainable code that solves real problems. I value simplicity over complexity, collaboration over ego, and delivering over perfection.',

    // Experiences page
    'experiences.empty': 'No experiences listed yet.',

    // Contact page
    'contact.intro':
      'Want to get in touch? Feel free to reach out via email or connect on social media.',
    'contact.cta': 'Send me an email',
    'contact.subject': 'Contact from samueljansem.dev',
    'contact.social': 'Or find me on',

    // Hero
    'hero.subtitle': 'Software Engineer',

    // Sections
    'section.articles': 'Posts',
    'section.projects': 'Projects',
    'section.viewAll': 'View All',
    'section.noArticles': 'No posts found.',
    'section.noProjects': 'No projects found.',

    // Footer
    'footer.rights': 'All rights reserved.',
  },
  'pt-br': {
    // Nav
    'nav.home': 'inicio',
    'nav.projects': 'projetos',
    'nav.blog': 'blog',
    'nav.about': 'sobre',
    'nav.experiences': 'experiencias',
    'nav.contact': 'contato',

    // Page titles
    'page.about.title': 'Sobre Mim',
    'page.experiences.title': 'Experiencias',
    'page.contact.title': 'Contato',
    'page.projects.title': 'Projetos',
    'page.blog.title': 'Blog',

    // About page
    'about.bio.title': 'Quem sou eu',
    'about.bio.content':
      'Sou Samuel Jansem, Engenheiro de Software no Brasil. Construo aplicacoes web e ferramentas open-source com foco em arquitetura limpa e experiencia do desenvolvedor.',
    'about.skills.title': 'Habilidades & Tecnologias',
    'about.philosophy.title': 'Filosofia de Engenharia',
    'about.philosophy.content':
      'Acredito em escrever codigo simples e facil de manter que resolve problemas reais. Valorizo simplicidade acima de complexidade, colaboracao acima de ego, e entregar acima de perfeicao.',

    // Experiences page
    'experiences.empty': 'Nenhuma experiencia listada ainda.',

    // Contact page
    'contact.intro':
      'Quer entrar em contato? Fique a vontade para me enviar um email ou conectar nas redes sociais.',
    'contact.cta': 'Envie-me um email',
    'contact.subject': 'Contato via samueljansem.dev',
    'contact.social': 'Ou me encontre no',

    // Hero
    'hero.subtitle': 'Desenvolvedor de Software',

    // Sections
    'section.articles': 'Posts',
    'section.projects': 'Projetos',
    'section.viewAll': 'Ver Todos',
    'section.noArticles': 'Nenhum post encontrado.',
    'section.noProjects': 'Nenhum projeto encontrado.',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
  },
} as const
