<template>
  <NavbarView/>
  <v-app id="home" :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img class="profileImg" contain max-height="500"
                v-bind="props"
                :src="isHovering ? profile.imageSrc : 'images/pcboy.png'"
                title="Profile photo"
                text="..."
              ></v-img>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <h4 class="text-red text-darken-4 top"> Hello I'm {{profile.firstName}}</h4>
          <h1 class="text-white">{{profile.jobTitle}}</h1>
          <p class="text-grey">
            {{profile.message}}
          </p>
          <v-btn :href= profile.cvUrl color="#A7121D" dark download target="_blank">Download CV</v-btn>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12">
                <div class="child bgColor1">
                  <v-icon color="#A7121D" x-large class="ml-3">
                    mdi-palette-swatch
                  </v-icon>
                  <h3 class="text-white ml-3 mt-4"> {{professionInfo.work[0].jobTitle}}</h3>
                  <p class="text-grey ml-3 mt-6 mb-3">
                    Worked with {{professionInfo.work[0].projectName}}:
                    {{professionInfo.work[0].jobDescription}}
                  </p>
                </div>
                <div class="child bgColor2">
                  <v-icon x-large class="ml-3" dark>mdi-shopping</v-icon>
                  <h3 class="text-white ml-3 mt-4">{{professionInfo.work[1].jobTitle}}</h3>
                  <p class="text-grey ml-3 mt-6 mb-3">
                    Worked with {{professionInfo.work[1].projectName}}:
                    {{professionInfo.work[1].jobDescription}}
                  </p>
                </div>
              </v-col>
              <v-col cols="12" class="mt-10">
                <div class="child1">
                  <h1 class="text-red text-darken-4 mt-4 number">{{professionInfo.workingExperience.years}}</h1>
                  <h3 class="text-white mt-4">Years Professional Experience</h3>
                </div>
                <div class="child2 mRight">
                  <v-row>
                     <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h3 class="text-red text--darken-4">Previous Employer</h3>
                        <p class="text-grey">{{professionInfo.workingExperience.employer}}</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mBottom padding bgColor1">
                        <h3 class="text-red text--darken-4">{{professionInfo.education[0].qualificationName}}</h3>
                        <p class="text-grey">{{professionInfo.education[0].Institution}}</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div class="child2">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mBottom padding bgColor1">
                        <h3 class="text-red text--darken-4">{{professionInfo.education[1].qualificationName}}</h3>
                        <p class="text-grey">{{professionInfo.education[1].Institution}}</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h3 class="text-red text--darken-4">{{professionInfo.education[2].qualificationName}}</h3>
                        <p class="text-grey">{{professionInfo.education[1].Institution}}</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col md="3" offset-md="3" id="about">
          <h4 class="text-white"> FEATURED PROJECTS</h4>
          <p class="text-grey">{{projectSummary}}</p>
        </v-col>
        <v-col md="3" class="text-end">
          <v-btn tile color="#A7121D" dark :href=profile.gitHubRepo target="_blank">
            View Repository
            <v-icon right>mdi-github</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img :src= projects[0].photoSrc contain @click="handleProjectView(projects[0].id)"></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img :src= projects[1].photoSrc contain @click="handleProjectView(projects[1].id)"></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn id="plantfrau" variant="text" color="white" dark text class="ml-n4"
          @click="handleProjectView(projects[0].id)"
          >
           {{projects[0].name}}
          </v-btn> <br />
          <v-btn :href = projects[0].sourceCode variant="text" color="#A7121D" dark text class="ml-n4" target="_blank">
            View source
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
          <v-col md="3">
          <v-btn id="weather" variant="text" color="white" dark text class="ml-n4"
          @click="handleProjectView(projects[1].id)"
          >
             {{projects[1].name}}
          </v-btn> <br />
          <v-btn :href = projects[1].sourceCode variant="text" color="#A7121D" dark text class="ml-n4" target="_blank">
            View source
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img :src= projects[2].photoSrc contain @click="handleProjectView(projects[2].id)"></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img :src= projects[3].photoSrc contain @click="handleProjectView(projects[3].id)"></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn variant="text" color="white" dark text class="ml-n4"
          @click="handleProjectView(projects[2].id)"
          >
             {{projects[2].name}}
          </v-btn> <br />
          <v-btn :href = projects[2].sourceCode variant="text" color="#A7121D" dark text class="ml-n4" target="_blank">
            View source
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn variant="text" color="white" dark text class="ml-n4" @click="handleProjectView(projects[3].id)">
             {{projects[3].name}}
          </v-btn> <br />
          <v-btn :href = projects[3].sourceCode variant="text" color="#A7121D" dark text class="ml-n4" target="_blank">
            View source
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="padd topInverse">
          <div class="second">
          <div class="secondchild1" id="contact">
            <v-row class="center">
              <v-col cols="7">
                <h1 class="text-white center">
                  Let's work together on your project!
                </h1>
              </v-col>
              <v-col cols="5">
                <v-btn tile color="#A7121D" dark class="mt-5 ml-15" @click="handleContact">
                  Contact
                  <v-icon class="ml-2">
                      mdi-card-account-mail-outline
                  </v-icon> 
                </v-btn>
              </v-col>
            </v-row>
          </div>
          </div>
          <v-toolbar class="topToolbar" color="#111111" dark flat>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
    <FooterView />
    <QrCode v-model="showQrCode"/>
  </v-app>
  <v-overlay v-model="overlay" class="center-screen">
   <v-row class="center-screen" >
        <v-col>
          <v-card  outlined tile color="grey" max-height="500">
            <!-- <p class="text-black bg-grey mt-4"> {{videoDesc}}</p> -->
            <video
            :src="videoData.videoSrc"
              controls
              :loop="true"
              :volume="0.6"
              :autoplay=true
              :width=500
              :height="400"
              :max-height=400
            >
            </video>
          </v-card> 
        </v-col>
      </v-row>
  </v-overlay>
</template> 

<script>

// Components
import NavbarView from '../components/NavbarView.vue';
import FooterView from '../components/FooterView.vue';
import QrCode from '../components/QrCode.vue'

export default {
  name: 'HomeView',
  
  components: {
    NavbarView,
    FooterView,
    QrCode,
  },
  data(){
    return {
      showQrCode: false,
      overlay: false,
      
      videoData: {
        videoSrc: ""
      },
      projectSummary: `Here are some projects I've worked on
            in my free time, some with the help of online learning materials 
            to facilitate my passion for personal and professional growth`,
       projects: [
          {name: "Plantfrau", id: 0, photoSrc: "/images/plantfrau.png", 
          videoSrc: "videos/plantfrau.webm", sourceCode: 'https://github.com/pkay-14/plantfrau'},
          {name: "Weather app", id: 1, photoSrc: "images/weather-accra.png", 
          videoSrc: "videos/weather-app.webm", sourceCode: 'https://github.com/pkay-14/vueJsVault/tree/main/weather-app'},
          {name: "Reaction Timer", id: 2, photoSrc: "images/reaction-timer.png", 
          videoSrc: "videos/reaction-timer.webm", sourceCode: 'https://github.com/pkay-14/vueJsVault/tree/main/reaction-timer'},
          {name: "The Portfolio", id: 3, photoSrc: "images/portfolio.png", 
          videoSrc: "videos/portfolio.webm", sourceCode: ''},
        ],
      profile: {
        firstName: "Roland",
        imageSrc: "images/profile-picture.png",
        jobTitle: "Software Engineer",
        cvUrl: "https://drive.google.com/file/d/1swJeqxJvjXvE4fsxzR7bCD7SZ060Wx5h/view?usp=drive_link",
        message: `A motivated graduate with a special interest in computing
            engineering and developing high quality softwares. I thrive in opportunities
            where I can continuously learn and grow. I have the desire to work in an
            environment that supports self-initiative and responsibility.`,
        gitHubRepo: "https://github.com/pkay-14"
      },
      professionInfo: {
        workingExperience: {years: '03', employer: "Master Of Code Global, Ukraine"},
        education:[
          {qualificationName: "Bachelor's Degree", Institution: "Cherkay National University, Ukraine"},
          {qualificationName: "A-level", Institution: "Doha Academy, Qatar"},
          {qualificationName: "IGCSE", Institution: "Newton International School Lagoon, Qatar"},
        ],
        work: [
          {
            jobTitle: "Ruby on Rails Engineer", projectName: "Internal Tools", 
            jobDescription: `A CRM platform which contains the
                  entire employee-related information and provides 
                  a better interface for HRs to deal with internal employees.`},
            {jobTitle: "NodeJs Developer", projectName: "Overtone", 
            jobDescription: `An E-commerce web server for a shopify based
              store using shopify’s webhooks and automating the process
              for processing fulfillments and monitoring Inventories`}
        ]
      }
    }
  },
  methods: {
    handleContact(){
      this.showQrCode = !this.showQrCode
    },
    handleProjectView(id){
      this.overlay = !this.overlay
      this.videoData.videoSrc = `${this.projects[id].videoSrc}`

    }
  }
};
</script>
<style>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.top{
  margin-top: 180px;
}
.topInverse{
  margin-top: -250px;
}
.topToolbar{
  margin-top: 100px;
  text-align: center;
}
.first{
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1{
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
  max-width: 500px;
  height: 250px;
}

.bgColor1{
  background-color: #1e1e1e;
}

.bgColor2{
background-color: #ce1d2a;
}

.child1{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}

.child2{
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}

.mRight{
  margin-right: 8px;
}

.mBottom{
  margin-bottom: 8px;
}

.padding{
  padding: 8px 0px;
}

.col-12.padd{
  padding: 12px 0 !important;
}
.col-12.childcol{
  padding: 0 !important;
}

h1.number{
  font-size: 50px;
  font-weight: bold;
}
.center{
  text-align: center;
}
</style>