<template>
    <NavbarView/>
  <v-app id="home" :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container fluid>
      <v-row >
        <v-col cols="12" md="6" >
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img class="profileImg" max-height="400" v-bind="props"
                :src="isHovering ? profile.imageSrc : 'images/pcboy.png'"
                title="Profile photo"
                text="..."
              ></v-img>
            </template>
          </v-hover>
        </v-col>        
        <v-col cols="12" md="6">
          <h3 class="mt-2 mt-md-16 text-red text-darken-4"> Hello I'm {{profile.firstName}}</h3>
          <h1 class="text-white">{{profile.jobTitle}}</h1>
          <p class="text-grey">
            {{profile.message}}
          </p>
          <v-col class="text-right">
            <v-btn :href= profile.cvUrl right variant="text" color="#A7121D" dark download target="_blank">Download CV</v-btn>
          </v-col>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first" id="experience">
            <v-row>
              <v-col md="12">
                <div class="child bgColor1">
                    <v-banner contain theme="dark" icon="mdi-palette-swatch" color="#A7121D" lines="one" class="text-white">
                       <v-banner-text>
                        {{professionInfo.work[0].jobTitle}}
                       </v-banner-text>
                    </v-banner>
                  <v-card max-height="100px" class="overflow-auto dark bgColor1">
                    <v-card-text class="text-white ml-3 mt-6 mb-3">
                      Worked with {{professionInfo.work[0].projectName}}:
                      {{professionInfo.work[0].jobDescription}}
                    </v-card-text>
                  </v-card>
                </div>
                <div class="child bgColor2 mt-0 mt-xs-5">
                  <v-banner contain lines="one" class="bgColor2" icon="mdi-shopping">
                    <v-banner-text class="text-white">
                      {{professionInfo.work[1].jobTitle}}
                    </v-banner-text>
                  </v-banner>
                  <v-card max-height="100px" class="overflow-y-auto dark bgColor2">
                    <v-card-text class="text-white ml-3 mt-6 mb-3">
                      Worked with {{professionInfo.work[1].projectName}}:
                      {{professionInfo.work[1].jobDescription}}
                    </v-card-text>
                  </v-card>
                </div>
              </v-col>
              <v-responsive>
                <v-col md="12">
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
                          <p class="text-grey">{{professionInfo.education[2].Institution}}</p>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-responsive>
            </v-row>
          </div>
        </v-col>
        <v-row class="mt-6">
          <v-col cols="12" md="3" offset-md="3" id="projects" >
          <h4 class="text-white text-center text-md-left"> FEATURED PROJECTS</h4>
          <p class="text-grey text-center text-md-left">{{projectSummary}}</p>
        </v-col>
        <v-col cols="12" md="3" class="text-center text-md-end">
          <v-btn tile color="#A7121D" dark :href=profile.gitHubRepo target="_blank">
            View Repository
            <v-icon right>mdi-github</v-icon>
          </v-btn>
        </v-col>
        </v-row>
        <div class="grid-container">
          <v-col v-for="project in projects" :key="project.id" cols="12" >
            <v-card class="d-flex flex-column w-100 grid-item" outlined tile max-height="250px" color="transparent">
              <h4 class="text-grey center">
              {{project.name}}
              </h4>
              <v-img :src= project.photoSrc contain max-height="160px" class="d-none d-sm-flex"
                @click="handleProjectView(project.id)">
              </v-img>
              
              <div class="align-center d-flex d-sm-none text-right">
                <video contain
                class="w-100"
                :src="project.videoSrc"
                :loop="true"
                :volume="0"
                :autoplay=true
                :height="150"
                >
                </video>
              </div>
              <v-btn :href = project.sourceCode variant="text" color="#A7121D" class="ml-n4" target="_blank">
                View source
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </div>
        <v-col cols="12" class="padd topInverse">
          <div class="second">
          <div class="secondchild1" id="contact">
            <v-row class="center">
              <v-col cols="12" class="text-white center">
                <h3>
                  Let's work together on your project!
                </h3>
              </v-col>
              <v-col cols="12">
                <v-btn tile color="#A7121D" dark @click="handleContact">
                  Contact
                  <v-icon class="ml-2">
                      mdi-card-account-mail-outline
                  </v-icon> 
                </v-btn>
              </v-col>
            </v-row>
            <QrCode v-model="showQrCode" @handleContact="handleContact"/>
          </div>
          </div>
          <v-toolbar class="topToolbar" color="#111111" dark flat>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
    <FooterView />
  </v-app>
  <v-overlay v-model="overlay" class="center-screen">
   <v-row class="center-screen" >
        <v-col>
          <v-card color="#1e1e1e" class="d-flex flex-column" max-height="500">
            <span style="z-index: 1">
              <v-btn @click="()=>{overlay = !overlay}" icon color="#1e1e1e" class="float-right px-0 py-0 text-red borderless">
                <v-icon>
                  mdi-close-box-outline
               </v-icon>
              </v-btn>
            </span>
              <video
             class="mt-n10"
            :src="videoData.videoSrc"
              controls
              :loop="true"
              :volume="0"
              :autoplay=true
              :width="500"
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
          videoSrc: "videos/portfolio.webm", sourceCode: 'https://github.com/pkay-14/vueJsVault/tree/main/portfolio'},
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

.dark::-webkit-scrollbar {
  width: 1px;
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
  margin-top: 300px;
}
.child{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
  max-width: 500px;
  max-height: 250px;
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

.borderless{
  border: 0;
  box-shadow: none;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  width: 100%;
  z-index: 1;
}
.profileImg{
  transition-delay: 0.2
}

@media (max-width: 600px) {
  .grid-container { grid-template-columns: auto; }
}
</style>