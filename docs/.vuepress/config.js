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
          title: 'Essential Knowledge',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'essential-knowledge/glossary',
            'essential-knowledge/lambdas',
            'essential-knowledge/optionals',
            'essential-knowledge/completable-futures',
          ]
        }
      ]
    }	
  }
};