<template>
    <v-overlay :overlay="showQrCode" class="center-screen" style="opacity: 2.5">
        <v-row class="center-screen" >
            <v-col>
                <v-card  width="250px" height="250px" outlined tile color="#1E1E1E">
                    <v-img src="images/frame.png"></v-img>
                </v-card> 
                <h3 class="text-white"> Scan Me!</h3>
            </v-col>
        </v-row>
    </v-overlay>
</template>

<script>
export default {
    props:["showQrCode"]
}
</script>

<style>

</style>