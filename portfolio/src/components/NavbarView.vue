<template>
  <v-app-bar app color="#111111" dark fixed flat class="px-8 py-a">
    <v-btn icon>
      <v-icon color="#A7121D">mdi-atom</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <div class="d-none d-sm-flex">
      <v-btn text @click="scroll('home')">Home</v-btn>
      <v-btn text @click="scroll('experience')">Experience</v-btn>
      <v-btn text @click="scroll('projects')">Projects</v-btn>
      <v-btn text @click="scroll('contact')">Contact</v-btn>
    </div>

    <div class="d-flex d-sm-none text-right">
    <v-menu theme="dark">
      <template v-slot:activator="{ props }">
        <v-btn color="#A7121D" icon="mdi-menu" v-bind="props"></v-btn>
      </template>

      <v-list density="compact">
        <v-list-item>
          <v-list-item-title @click="scroll('home')">Home</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title @click="scroll('experience')">Experience</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title @click="scroll('projects')">Project</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title @click="scroll('contact')">Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  </v-app-bar>
</template>

<script>
export default {
methods:{
  scroll(refName){
    const element = document.getElementById(refName)
    element.scrollIntoView({behavior: "smooth"})
  }
}
}
</script>