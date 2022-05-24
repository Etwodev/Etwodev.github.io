// config.js
module.exports = {
    CV: {
        path: '/CV.pdf',
        title: 'My CV'
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
    listings: [
        {
            name: "Everlight",
            description: "A projectile based unity game",
            language: "C#",
            path: "/projects/Everlight"
        },
        {
            name: "Calc",
            description: "An easy to use MacOS Menu-bar calculator",
            language: "Swift",
            path: "/projects/Calc"
        }
    ],
    social: {
        linkedin: '',
        twitter: 'etwodev',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: 'etwodev',
        website: 'https://etwodev.github.io',
        phone: '',
        email: 'etwodev@protonmail.ch'
    },
    skills: [
        'Python',
        'GO'
        'Typescript'
        'PHP',
        'JavaScript',
        'MySQL',
        'Git',
        'CSS',
        'Unity'
    ],
    experiences: [
        { 
            company: 'Fireplace',
            position: 'Backend Engineer',
            from: 'January 2022',
            to: 'March 2022'
        }
    ],
    education: [
        { 
            institution: 'King Edwards VI Secondary School',
            degree: 'General Certificate of Secondary Education (GCSE)',
            from: '2016',
            to: '2021'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'etwodev',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'cupcake',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

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
