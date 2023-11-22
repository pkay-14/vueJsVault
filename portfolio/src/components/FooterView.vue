<template>
  <v-footer padless class="bg-black"  theme="dark">
    <v-card flat tile  class="bg-black text-white py-5 px-5 text-center" width="100%">
      <v-row>
        <v-col cols="4" sm="4">
          <v-card-text class="text-white pt-2">
            <v-btn icon>
              <v-icon color="#A7121D">
                mdi-atom
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="8" sm="4">
          <v-card-text class="pt-2 text-right text-sm-center">
            <v-btn v-for="icon in icons" :key="icon.mdi" class="mx-1 text-white" :href="icon.targetUrl" icon target="_blank">
              <v-icon size="20px">{{icon.mdi}}</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4" class="d-none d-md-flex ">
          <v-card-text class="pt-2">
            <v-btn class="mx-1 text-white" icon>
              <v-icon color="#A7121D">mdi-heart</v-icon>
            </v-btn>
            Created by Roland Q.
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return{
      icons: [
        {mdi: "mdi-linkedin", targetUrl: "https://linkedin.com/in/roland-quaye-8485bb253"}, 
        {mdi: "mdi-instagram", targetUrl: "https://instagram.com/pkay_2.0?igshid=NzZlODBkYWE4Ng=="}]
    }
  }
}
</script>