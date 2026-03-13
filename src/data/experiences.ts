import type { Locale } from '../i18n/ui'

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  url?: string
}

export const experiences: Record<Locale, Experience[]> = {
  en: [
    {
      company: 'The SilverLogic',
      role: 'Software Engineer',
      period: '2023 - Present',
      description:
        'Building web applications and backend services for clients across diverse industries. Working with modern tech stacks and agile methodologies.',
      technologies: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL'],
      url: 'https://tsl.io',
    },
    {
      company: 'Pense Open',
      role: 'Software Engineer',
      period: '2020 - 2022',
      description:
        'As a Backend Software Engineer, I was responsible for implementing the backend layer of solutions for clients. I used .NET as a base for development and SQL Server as a database. Additionally, I worked with microservices and messaging to ensure scalability and performance of solutions.',
      technologies: ['.NET', 'SQL Server', 'RabbitMQ'],
    },
    {
      company: 'Sinqia',
      role: 'Software Engineer',
      period: '2020 - 2020',
      description:
        'As a Software Engineer, I had the responsibility of participating in the implementation of complete solutions for clients, working with both the frontend and backend layers. I used .NET as a base for developing applications and AngularJS for the user interface. Additionally, I used Docker to ensure the delivery of solutions in an agile manner and SQL Server as a database, working with microservices.',
      technologies: ['.NET', 'SQL Server', 'AngularJS', 'Docker'],
    },
    {
      company: 'Jabil',
      role: 'Software Engineer Intern',
      period: '2019 - 2020',
      description:
        'As a software engineer intern, I had the responsibility of participating in the implementation of solutions for clients. I used .NET as a base for developing applications and worked with frontend technologies like jQuery, HTML, CSS, JavaScript, and Bootstrap. Additionally, I used SQL Server as a database and worked with REST APIs to ensure integration between systems.',
      technologies: ['.NET', 'SQL Server', 'jQuery', 'JavaScript', 'Bootstrap'],
    },
  ],
  'pt-br': [
    {
      company: 'The SilverLogic',
      role: 'Engenheiro de Software',
      period: '2023 - Presente',
      description:
        'Construindo aplicacoes web e servicos backend para clientes de diversas industrias. Trabalhando com stacks modernas e metodologias ageis.',
      technologies: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL'],
      url: 'https://tsl.io',
    },
    {
      company: 'Pense Open',
      role: 'Engenheiro de Software',
      period: '2020 - 2022',
      description:
        'Como Engenheiro de Software Backend, fui responsável pela implementação da camada backend de soluções para clientes. Utilizei .NET como base para o desenvolvimento e SQL Server como banco de dados. Além disso, trabalhei com microsserviços e mensageria para garantir a escalabilidade e performance das soluções.',
      technologies: ['.NET', 'SQL Server', 'RabbitMQ'],
    },
    {
      company: 'Sinqia',
      role: 'Engenheiro de Software',
      period: '2020 - 2020',
      description:
        'Como Engenheiro de Software, tive a responsabilidade de participar da implementação de soluções completas para clientes, trabalhando tanto com a camada frontend quanto backend. Utilizei .NET como base para o desenvolvimento de aplicações e AngularJS para a interface do usuário. Além disso, utilizei Docker para garantir a entrega de soluções de forma ágil e SQL Server como banco de dados, trabalhando com microsserviços.',
      technologies: ['.NET', 'SQL Server', 'AngularJS', 'Docker'],
    },
    {
      company: 'Jabil',
      role: 'Estagiário de Engenharia de Software',
      period: '2019 - 2020',
      description:
        'Como estagiário de engenharia de software, tive a responsabilidade de participar da implementação de soluções para clientes. Utilizei .NET como base para o desenvolvimento de aplicações e trabalhei com tecnologias frontend como jQuery, HTML, CSS, JavaScript e Bootstrap. Além disso, utilizei SQL Server como banco de dados e trabalhei com APIs REST para garantir a integração entre sistemas.',
      technologies: ['.NET', 'SQL Server', 'jQuery', 'JavaScript', 'Bootstrap'],
    },
  ],
}
