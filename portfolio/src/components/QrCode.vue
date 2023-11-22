<template>
    <v-overlay @click="closeOverlay" class="align-center justify-center" style="opacity: 2.5">
        <v-row class="center-screen" >
            <v-col>
                <v-card width="250px" height="250"  color="#1E1E1E">
                    <v-img contain src="images/frame.png"></v-img>
                </v-card> 
                <h3 class="text-white"> Scan Me!</h3>
            </v-col>
        </v-row>
    </v-overlay>
</template>

<script>
export default {
    methods: {
        closeOverlay(){
            this.$emit('handleContact')
        }
    }
}
</script>