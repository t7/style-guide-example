module.exports = {
  clientName: 'ACME Corp.',
  projectName: 'Skunk Works',
  pages: {
    branding: {
      typography: [
        {
          title: 'Lato',
          fontFamily: 'Lato, sans-serif',
          link: 'https://www.google.com/fonts/specimen/Lato'
        },
        {
          title: 'Roboto',
          fontFamily: 'Roboto, sans-serif',
          link: 'https://www.google.com/fonts/specimen/Roboto'
        },
        {
          title: 'Arial, sans-serif',
          fontFamily: 'Arial, sans-serif',
          link: 'https://en.wikipedia.org/wiki/Arial'
        }
      ],
      colors: [
        {
          title: 'Lighter Gray',
          value: '#F5F5F6',
          description: 'Right rale light gray'
        },
        {
          title: 'Light Gray',
          value: '#D4D8DB',
          description: 'Stroke gray'
        },
        {
          title: 'Middle Gray',
          value: '#7A8C98',
          description: 'Topic header gray'
        },
        {
          title: 'Dark Gray',
          value: '#4C565E',
          description: 'Footer, mega menu, dark gray'
        },
        {
          title: 'Darkest Gray',
          value: '#444F57',
          description: 'Footer, mega menu, body copy, darkest gray'
        },
        {
          title: 'Black',
          value: '#000000',
          description: 'Headlines'
        },
        {
          title: 'White',
          value: '#FFFFFF',
          description: 'Background color'
        },
        {
          title: 'Lighter Blue',
          value: '#EBF3F9',
          description: 'Background color'
        },
        {
          title: 'Light Blue',
          value: '#3A89C3',
          description: 'Text links, button'
        },
        {
          title: 'Blue',
          value: '#44658E',
          description: 'Equities POV dark blue'
        },
        {
          title: 'Dark Blue',
          value: '#304969',
          description: 'Equities POV darkest blue'
        },
        {
          title: 'Green',
          value: '#5C9631',
          description: 'Fixed income POV green'
        },
        {
          title: 'Lime Green',
          value: '#BBCD3A',
          description: 'Chart promo lime green'
        },
        {
          title: 'Light Green',
          value: '#7FB124',
          description: 'Chart promo green'
        },
        {
          title: 'Dark Green',
          value: '#4C7D29',
          description: 'Fixed income POV darkest green'
        },
        {
          title: 'Orange',
          value: '#E38B37',
          description: 'Badges'
        },
        {
          title: 'Red',
          value: '#D8471C',
          description: 'Error text'
        }
      ]
    },
    screens: {
      serverRoot: 'http://localhost:8080/#/',
      imageRoot: './build/isg/screens/shots/',

      // Page paths and names.
      paths: [
        {
          path: '',
          file: 'accounts'
        },
        {
          path: 'profile',
          file: 'profile'
        },
        {
          path: 'page_not_found',
          file: 'page_not_found'
        }
      ],

      // Breakpoint widths and names.
      breakpoints: [
        {
          breakpoint: 'desktop',
          width: 1200
        },
        {
          breakpoint: 'tablet',
          width: 768
        },
        {
          breakpoint: 'mobile',
          width: 480
        }
      ]
    }
  }
}
