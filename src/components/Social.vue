<template>
    <v-container fluid class="social-container">
        <v-row class="social">
            <v-col cols="12" class="social-line-1 d-flex justify-center align-center  my-1">
                <a href="" class="text-h5 text-sm-h4 mx-3 mr-4 mx-ms-10 text-white"><i class="fa-brands fa-linkedin"></i></a>
                <a href="" class="text-h5 text-sm-h4 mx-3 mr-4 mx-ms-10 text-white"><i class="fa-brands fa-youtube"></i></a>
                <h1 class="text-h5 text-sm-h4 text-md-h3 font-weight-black mx-10"> 
                    CONNECT WITH US
                    <v-icon icon="south_east" size="small"></v-icon>
                </h1>
                <a href="" class="text-h5 text-sm-h4 mx-3 mr-4 mx-ms-10 text-white"><i class="fa-brands fa-instagram"></i></a>
                <a href="" class="text-h5 text-sm-h4 mx-3 mr-4 mx-ms-10 text-white"><i class="fa-brands fa-facebook"></i></a>
            </v-col>
            <v-col cols="12" class="social-line-2 d-flex justify-end justify-sm-center align-center  my-1">
                <h1 class="text-h6 text-sm-h4 text-md-h3 font-weight-black mx-2 mx-sm-10">WE LIKE TO START PROJECT WITH US </h1>
                <v-btn append-icon="south_east" color="white" rounded="xl">Get Started</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name : "Social"
}
</script>