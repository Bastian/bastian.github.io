module.exports = {
  title: 'Javacord',
  description: 'The Javacord website',
  head: [
    ['link', { rel: 'icon', href: '/favicon-96x96.png' }]
  ],
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: 'JavaDocs', link: 'https://docs.javacord.org/', target:'_self', rel:'' },
      { text: 'Discord Server', link: 'https://discord.gg/0qJ2jjyneLEgG7y3', target:'_self', rel:'' },
    ],
    sidebar: {
      '/wiki/': [
        {
          title: 'Getting Started',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['getting-started/', 'Intro'],
            'getting-started/download-installation',
            'getting-started/creating-a-bot-account',
            'getting-started/writing-your-first-bot',
            {
              title: 'Beginner IDE Setup',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                'getting-started/setup/intellij-gradle',
                'getting-started/setup/intellij-maven',
                'getting-started/setup/eclipse-maven',
              ]
            }
          ]
        },
        {
          title: 'Basic Tutorials',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'basic-tutorials/listeners',
            'basic-tutorials/embeds',
            'basic-tutorials/emojis-and-reactions',
            'basic-tutorials/message-builder',
            'basic-tutorials/creating-entities',
            'basic-tutorials/logger-config',
            'basic-tutorials/glossary',
          ]
        },
        {
          title: 'Advanced Topics',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'advanced-topics/bot-lifecycle',
            'advanced-topics/entity-cache',
            'advanced-topics/ratelimits',
            'advanced-topics/sharding',
            'advanced-topics/performance-tweaks',
            'advanced-topics/proxies',
          ]
        },
        {
          title: 'Essential Knowledge',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'essential-knowledge/lambdas',
            'essential-knowledge/optionals',
            'essential-knowledge/completable-futures',
          ]
        }
      ]
    }	
  }
};