module.exports = {
  // Title of your website
  title: 'khanhnguyendev@blog',

  // Description of your website
  description: 'This is my blog',

  // Language of your website
  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  base: '/vuepress-blog/',

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: 'en-US',

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'Nguyen \'Ngo\' Khanh',

      // Introduction of yourself (HTML supported)
      description: 'My Lessions Learned<br/>Since 1997',

      // Email
      email: 'career.khanhnguyen@gmail.com',

      // Your location
      location: 'Ho Chi Minh',

      // Your organization
      organization: 'Van Lang University',

      // Your avatar image
      // Set to external link
      avatar:  '/vuepress-blog/img/avatar.jpg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'khanhnguyendev',
          link: 'https://github.com/khanhnguyendev',
        },

        // Facebook account and link
        facebook: {
          account: 'khanhnguyennnnnn',
          link: 'https://www.facebook.com/khanhnguyennnnnn/',
        },

        // LinkedIn account and link
        linkedin: {
          account: 'khanhnguyendev',
          link: 'http://www.linkedin.com/in/khanhnguyendev',
        },

        // GitLab account and link
        gitlab: {
          account: 'khanhnguyendev',
          link: 'https://gitlab.com/khanhnguyendev',
        },

        // Bitbucket account and link
        bitbucket: {
          account: 'khanhnguyendev',
          link: 'https://bitbucket.org/khanhnguyendev',
        },

        // Docker Hub account and link
        docker: {
          account: 'ngokhanhnguyen97',
          link: 'https://hub.docker.com/u/ngokhanhnguyen97',
        },
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: 'https://cdn.wallpapersafari.com/67/76/qtpSIw.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: true,

      // Add your custom footer (HTML supported)
      custom: 'Copyright 2023-present <a href="https://github.com/khanhnguyendev" target="_blank">khanhnguyendev</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: 'https://i.pinimg.com/originals/83/f1/14/83f114bce56c4051db0e47043e517080.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],

    // Enable smooth scrolling or not
    smoothScroll: true,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}