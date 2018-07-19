/* eslint-disable */
export const PERSON = {
  name: {
    first: 'Vadym',
    middle: '',
    last: 'Ovcharenko',
  },
  image: '../assets/person.jpg',
  position: 'Chief Technical Officer',
  birth: {
    year: 1995,
    location: 'Kyiv, Ukraine'
  },
  summary : 'Hacker, dreamer, leader. Seek to create & perfect.',
  experience: [
    {
      company: 'App Development Shop',
      position: 'CTO, Co-Founder',
      timeperiod: 'Oct 2017 - Present',
      bullets: [
        'Scaled from a cluster of freelancers to an international software development agency with multiple offices in less than a year',
        'Assembled and trained several development and analytical teams from scratch',
        'Managed successful delivery of multiple mobile and web releases for millions of users',
        'Established agile processes and continuous integration environments allowing frequent releases within continuously changed requirements and priorities'
      ]
    },
    {
      company: 'AppSmithy',
      position: 'Project Technical Lead',
      timeperiod: 'Nov 2016 - Oct 2017 (1 yr)',
      bullets: [
        'Guided and coordinated distributed and offline development teams',
      ]
    },
    {
      company: 'Depositphotos, Inc.',
      position: 'Software Engineer',
      timeperiod: 'Mar 2016 - Nov 2016 (9 mos)',
      bullets: [
        'Collaborated inside a Scrum team',
        'Integrated reactive design patterns',
        'Conducted workshops on RxJava',
        'Contributed to 4 successful releases'
      ]
    },
    {
      company: 'Mobile Hero, Inc.',
      position: 'Android Team Lead',
      timeperiod: 'Nov 2015 - Feb 2016 (4 mos)',
      bullets: [
        'Leaded a small team in creation of private beta release',
        'Used innovative development methodologies for quick and lossless reactions to requirements change',
        'Successfully delivered MVP in the shortest term'
      ]
    },
    // {
    //   company: 'Freelance',
    //   position: 'Web/Android Developer',
    //   timeperiod: 'Dec 2014 - Nov 2015 (1 year)',
    //   bullets: [
    //     'Gained hands-on experience in real projects',
    //     'Mastered OOP and Web development (Java, JavaScript)'
    //   ]
    // }
  ],
  education: [
    {
      degree: 'Master of Science in Data Science',
      timeperiod: 'Aug 2017 - Dec 2018',
      description: 'Illinois Institute of Technology, IL, USA.',
      grad_year: '2018',
      gpa: '4.0/4.0'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      timeperiod: 'Sep 2013 - Jun 2017',
      description: 'Kyiv Polytechnic Institute, Kyiv, Ukraine.',
      grad_year: '2017',
      gpa: '3.6/4.0'
    }
  ],
  // skill level goes 0 to 100
  skills: [
    {
      name: 'Data Science',
      skills: [
        {
          name: 'Languages',
          description: 'Python, R'
        },
        {
          name: 'Techniques',
          description: 'Clustering, Regression, Classification, Time series analysis'
        },
        {
          name: 'Machine Learning',
          description: 'Computer Vision, NLP, Reinforcement Learning'
        },
        {
          name: 'Tools',
          description: 'RStudio, Jupyter Notebook, Keras, TFLearn, Tensorflow, PyTorch'
        },
        {
          name: 'Visualization',
          description: 'ggplot2, matplotlib'
        },
        {
          name: 'Big Data',
          description: 'SQL, NoSQL (MongoDB, Firebase)'
        }
      ]
    },
    {
      name: 'Software Engineering',
      skills: [
        {
          name: 'Android',
          description: 'Java/Kotlin, Support Library, Data Binding, RxJava/RxAndroid, Gradle DSL, JNI, NDK, Square Libs (Retrofit, Dagger2, Picasso), Glide, Google Services, Analytics'
        },
        {
          name: 'Web',
          description: 'JavaScript ES6/CSS3/HTML5, Node.js, Express, Impress, JSON, XML'
        },
        {
          name: 'Tools',
          description: 'Intellij Idea, Git, Jira, Trello'
        }
      ]
    }
  ],
  achievements: [
    {
      year: '2015',
      description: 'Team leader of the UA Mobile Challenge finalist-team'
    },
    {
      year: '2014',
      description: 'Winner of the Open Mobile Hackathon KPI'
    }
  ],
  contact: {
    email: 'vadym@theappshop.eu',
    phone: '559 921 9595',
    street: '3349 S Wabash Ave',
    city: 'Chicago',
    website: 'theappshop.eu',
    github: 'bolein',
    linkedin: 'vadymovcharenko'
  },
  lang: 'en' // en, de, fr
};
