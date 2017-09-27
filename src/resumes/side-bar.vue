<template>
  <div id="resume2" class="resume">
    <div class="top-row">
          <span class="person-name">
            {{person.name.first}} {{person.name.middle}} {{person.name.last}}
          </span>
      <span class="person-position">
            {{person.position}}
          </span>

      <div class="contact-block">
        <!--<h3>{{ lang.headings.contact }}</h3>-->
        <div class="contacts">
          <div class="contact-item icon">
            <i class="fa email" aria-hidden="true"></i>
          </div>
          <div class="contact-item title">
            <a :href="'mailto:'+person.contact.email">{{person.contact.email}}</a>
          </div>
          <div class="contact-item icon">
            <i class="fa phone" aria-hidden="true"></i>
          </div>
          <div class="contact-item title">
            <a href="'tel:'+person.contact.phone">{{person.contact.phone}}</a>
          </div>
          <!--<div class="contact-row dots">-->
            <!--<i class="fa fa-circle" aria-hidden="true"></i>-->
          <!--</div>-->
          <!--<div class="contact-row">-->
            <!--{{person.contact.street}} <br> {{person.contact.city}}-->
          <!--</div>-->
          <div class="contact-item icon">
            <i class="fa github" aria-hidden="true"></i>
          </div>
          <div class="contact-item title">
            <a :href="'https://github.com/'+person.contact.github">{{person.contact.github}}</a>
          </div>
          <div class="contact-item icon">
            <i class="fa linkin" aria-hidden="true"></i>
          </div>
          <div class="contact-item title">
            <a :href="'https://linkedin.com/'+person.contact.linkedin">{{person.contact.linkedin}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="left-col">
      <div class="person-image">
        <div class="image-centerer">
          <div class="img"></div>
        </div>
      </div>
      <div class="skills-block">
        <h3>{{ lang.headings.skills }}</h3>
        <div class="row" v-for="skillset in person.skills">
          <span class="skillset-name">{{skillset.name}} </span>
          <span class="skills">
            <div class="skill" v-for="skill in skillset.skills">
              <span class="skill-name"> {{skill.name}}: </span>
              <span class="skill-description">{{skill.description}}</span>
            </div>
          </span>
        </div>
        <span class="skills-other"> {{person.skillDescription}} </span>
      </div>
    </div>
    <div class="right-col">
      <div class="summary">
        <h3>{{ lang.headings.summary }}</h3>
        <div class="summary-block">
          <div class="row">
            <span class="summary"> {{person.summary}}</span>
          </div>
        </div>
        <div class="experience">
          <h3>{{ lang.headings.experience }}</h3>
          <div class="experience-block" v-for="experience in person.experience">
            <div class="row">
              <span class="job-title"> {{experience.position}}</span>
              <span class="company"> - {{experience.company}} </span>
            </div>
            <div class="row">
              <span class="time-period"> {{experience.timeperiod}}</span>
            </div>
            <div class="row">
              <span class="job-description"> {{experience.description}} </span>
            </div>
            <div class="row">
              <ul class="bullets">
                <li v-for="bullet in experience.bullets">
                  <span class="bullet"> {{bullet}} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="education">
          <h3>{{ lang.headings.education }}</h3>
          <div class="education-block" v-for="education in person.education">
            <div class="row">
              <div class="degree">{{education.degree}}</div>
              <div class="grad-year">{{education.grad_year}}</div>
            </div>
            <div class="row">
              <span class="degree-description">{{education.description}}</span>
              <div class="gpa">GPA: {{education.gpa}}</div>
            </div>
          </div>
        </div>
        <div class="achievements">
          <h3>{{ lang.headings.achievements }}</h3>
          <ul class="list">
            <li v-for="ach in person.achievements">
              <span class="ach-year"> {{ach.year}}</span>
              <span class="ach-descr"> {{ach.description}} </span>
            </li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { getVueOptions } from './resumes';

  let name = 'side-bar';
  export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  @colorAccent: #83ab2e;

  #resume2 {
    font-family:'Raleway', sans-serif;
    padding-bottom:50px;
    a, a:focus, a:hover, a:visited {
      text-decoration:none;
    }
    h3 {
      text-transform:uppercase;
      padding-top:0;
      margin-top:0;
      letter-spacing:5px;
      font-weight:400;
    }
    .top-row {
      width:100%;
      padding-top:50px;
      padding-bottom:50px;
      span {
        width:100%;
        display:block;
        text-align:center;
        font-weight:normal;
      }
      span.person-name {
        text-transform:uppercase;
        font-size:50px;
        letter-spacing:10px;
      }
      span.person-position {
        font-size: 18px;
        letter-spacing:5px;
      }
    }
    .contacts {
      display:flex;
      justify-content: center;
    }

    .contact-block {
      margin-top: 30px;

      h3 {
        text-align: center;
      }

      .icon {
        margin-right: 5px;
        margin-left: 15px;
      }

      .title {
        margin-top: -3px;
      }

      .contact-item {
        text-align: center;
        font-size: 14px;
        align-self: center;
        a {
          color: black;
        }

        .fa {
          width: 20px;
          height: 20px;
          background-size: 20px 20px;
        }

        .email {
          background-image: url('../assets/mail.png');
        }

        .phone {
          background-image: url('../assets/call.png');
        }

        .github {
          background-image: url('../assets/github.png');
        }

        .linkin {
          background-image: url('../assets/linkin.png');
        }
      }
    }

    .left-col {
      width:30%;
      float:left;
      padding-left:8%;
      .person-image .image-centerer {
        display:flex;
        justify-content:center;
        height:auto;
        overflow:hidden;
        .img {
          flex:none;
          background:url('../assets/me.jpg');
          background-position:center;
          background-size:cover;
          height:250px;
          width:100%;
        }
      }
    }
    .right-col {
      width:48%;
      float:right;
      padding-left:4%;
      padding-right:8%;
      .summary-block {
        margin-bottom: 20px;
        .summary {
          font-size:14px;
        }
      }
      .experience-block {
        margin-bottom: 20px;

        .row {
          /*display: flex;*/
          /*justify-content: space-between;*/
        }
        .row:first-child {
          margin-bottom:3px;
        }
        .row .company {
          /*text-transform:uppercase;*/
          font-size:16px;
        }
        .row .job-title {
          font-size:16px;
          color: @colorAccent;
        }
        .row .job-description {
          font-size:14px;
        }
        .row .time-period {
          font-size: 15px;
        }
        .bullets {
          margin: 0 0;
          padding-left: 20px;
          .bullet{
            font-size:14px;
          }
        }
      }
      .education {
        margin-bottom: 20px;
        .education-block {
          margin-bottom:10px;
          .row {
            display: flex;
            justify-content: space-between;
          }
          .degree {
            font-size:16px;
            color: @colorAccent;
          }
          .degree-description{
            font-size: 14px;
          }
          .grad-year, .gpa {
            font-size: 14px;
          }
        }
      }
    }
    .skills-block {
      margin-top:30px;
      position:relative;
      .skillset-name {
        color: @colorAccent;
        margin-bottom: 10px;
      }
      .row {
        margin-bottom: 20px;
        position: relative;

        .skill-name {
          font-weight:bold;
          font-size:14px;
        }

        .skill-description {
          font-size:14px;
        }

        .skills-other {
          display:inline-block;
          width:100%;
          margin-top:20px;
        }
      }
    }
    .achievements {
      ul {
        margin: 0 0;
        padding-left: 20px;
        li {
          font-size: 14px;
          margin-bottom: 4px;
        }
      }

      .ach-year {
        color: @colorAccent;
      }
    }
  }
</style>
