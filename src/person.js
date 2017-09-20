/* eslint-disable */
export const PERSON = {
  name: {
    first: 'Vadym',
    middle: '',
    last: 'Ovcharenko',
  },
  image: '../assets/person.jpg',
  position: 'Machine Learning Engineer',
  birth: {
    year: 1995,
    location: 'Kyiv, Ukraine'
  },
  summary : 'Overall over 4 years of academic and work experience in software engineering. Solid experience in Mobile Applications Development. Interest for Data Science. Love for software architecture and design. Strong level of Java, JavaScript. Basic level of Python, R, Kotlin, C/C++.',
  experience: [
    {
      company: 'Jutiful, Ltd.',
      position: 'Software Engineer (Part-time)',
      timeperiod: 'May 2017 - Current',
      bullets: [
        'Designing workflows for continuous delivery',
        'Writing flexible build scripts with Gradle DSL',
        'Adopting native code to Android platform using JNI'
      ]
    },
    {
      company: 'Depositphotos, Inc.',
      position: 'Middle Android Developer',
      timeperiod: 'Mar 2016 - Nov 2016 (9 mos)',
      bullets: [
        'Collaborated inside a Scrum team',
        'Integrated reactive design patterns',
        'Conducted workshops on RxJava',
        'Delivered 4 successful releases'
      ]
    },
    {
      company: 'Mobile Hero, Inc.',
      position: 'Android Team Lead',
      timeperiod: 'Nov 2015 - Feb 2016 (4 mos)',
      bullets: [
        'Leaded a small team in creation of private beta',
        'Used innovative development methodologies for quick and lossless reactions to requirements change'
      ]
    },
    {
      company: 'Freelance',
      position: 'Web/Android Developer',
      timeperiod: 'Dec 2014 - Nov 2015 (1 year)',
      bullets: [
        'Gained hands-on experience in Web and Android projects',
        'Mastered OOP and Web development (Java, JavaScript)'
      ]
    }
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
      gpa: '4.0/4.0'
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
          name: 'Machine Learning',
          description: 'Regression, Classification, Clustering, Time series analysis, Computer Vision, NLP'
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
          description: 'Java/Kotlin, Support Library, Data Binding, RxJava/RxAndroid, Gradle DSL, Square Libs (Retrofit, Dagger2, Picasso), Glide, Google Services, Analytics'
        },
        {
          name: 'Web',
          description: 'ES6, Node.js, Express, Impress, CSS3/HTML5, JSON, XML'
        }
      ]
    }
  ],
  skillDescription: 'Also proficient with Android Development.',
  contact: {
    email: 'vadym@appsmithy.com',
    phone: '312 619 9022',
    street: '3201 S State Street',
    city: 'Chicago',
    website: 'appsmithy.com',
    github: 'bolein'
  },
  lang: 'en' // en, de, fr
};
