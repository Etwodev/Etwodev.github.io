module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    themeConfig: {
        default: 'cupcake'
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        logs: false
    },
    github: {
      username: 'Etwodev', // Your GitHub org/user name. (Required)
      sortBy: 'stars', // stars | updated
      limit: 8, // How many projects to display.
      exclude: {
        forks: false, // Forked projects will not be displayed if set to true.
        projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
      }
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
      }
    ]
}
