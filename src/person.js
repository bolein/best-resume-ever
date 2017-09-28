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
  summary : 'Master of Data Science with over 4 years of academic and work experience in software engineering. Seeking position as machine learning engineer.',
  experience: [
    {
      company: 'Jutiful, Ltd.',
      position: 'Software Engineer (Part-time)',
      timeperiod: 'May 2017 - Aug 2017 (3 mos)',
      bullets: [
        'Designing workflows for continuous delivery',
        'Writing flexible build scripts with Gradle DSL',
        'Adopting native code to Android platform using JNI'
      ]
    },
    {
      company: 'Depositphotos, Inc.',
      position: 'Middle Software Developer',
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
      gpa: 'TBA'
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
    email: 'vovcharenko@hawk.iit.edu',
    phone: '312 619 9022',
    street: '3201 S State Street',
    city: 'Chicago',
    website: 'appsmithy.com',
    github: 'bolein',
    linkedin: 'vadymovcharenko'
  },
  lang: 'en' // en, de, fr
};
