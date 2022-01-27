module.exports = {
    github: {
      username: 'etwodev', // Your GitHub org/user name. (Required)
      sortBy: 'stars', // stars | updated
      limit: 8, // How many projects to display.
      exclude: {
        forks: false, // Forked projects will not be displayed if set to true.
        projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
      }
    },
    social: {
      linkedin: '',
      twitter: 'Etwodev',
      facebook: '',
      dribbble: '',
      behance: '',
      medium: '',
      devto: 'etwodev',
      website: '',
      phone: '',
      email: 'etwodev@protonmail.ch'
    },
    skills: [
      'Python',
      'php',
      'Dart',
      'CSS',
      'JavaScript'
    ],
    experiences: [
      {
        company: 'Fireplace',
        position: 'Backend Software Engineer',
        from: 'January 2022',
        to: 'Present'
      }
    ],
    education: [
      {
        institution: 'King Edwards VI',
        degree: 'Computer Science A-Level',
        from: '2021',
        to: 'Present'
      },
      {
        institution: 'King Edwards VI',
        degree: 'Maths A-Level',
        from: '2021',
        to: 'Present'
      },
      {
        institution: 'King Edwards VI',
        degree: 'Physics A-Level',
        from: '2021',
        to: 'Present'
      },
      {
        institution: 'King Edwards VI',
        degree: 'A* Computer Science GCSE',
        from: '2016',
        to: '2021'
      },
      {
        institution: 'King Edwards VI',
        degree: 'A* English Language GCSE',
        from: '2016',
        to: '2021'
      },
      {
        institution: 'King Edwards VI',
        degree: '9 Maths GCSE',
        from: '2016',
        to: '2021'
      },
      {
        institution: 'King Edwards VI',
        degree: '8 Physics GCSE',
        from: '2016',
        to: '2021'
      },
      {
        institution: 'King Edwards VI',
        degree: '7 Biology GCSE',
        from: '2016',
        to: '2021'
      },
      {
        institution: 'King Edwards VI',
        degree: '7 Chemistry GCSE',
        from: '2015',
        to: '2019'
      },
      {
        institution: 'Institution name 2',
        degree: 'Higher Secondary Certificate (HSC)',
        from: '2012',
        to: '2014',
      }
    ],
    blog: {
      // Display blog posts from your medium or dev.to account. (Optional)
      source: 'dev.to', // medium | dev.to
      username: 'etwodev',
      limit: 5 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
      // GA3 tracking id/GA4 tag id
      id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    hotjar: {
      id: '',
      snippetVersion : 6 
    },
    themeConfig: {
      default: 'light',
  
      // Hides the theme change switch
      // Useful if you want to support a single color mode
      disableSwitch: false,
  
      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded default
      respectPrefersColorScheme: true,
      themeConfig: {
          default: 'cupcake'
      },
    
      // Available themes. To remove any theme, exclude from here.
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula'
      ]
    }
  }
