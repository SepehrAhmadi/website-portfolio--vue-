<template>
<h1 class="grid-gallery-title text-orange-darken-3 text-start mx-auto text-h3 text-sm-h2 text-md-h1 font-weight-black">RESULT TELLS</h1>
<section class="grid-gallery bg-orange-darken-3">
    <h1 class="grid-gallery-title text-start mx-auto text-h3 text-sm-h2 text-md-h1 font-weight-black">MORE ABOUT US</h1>
    <v-container class="py-7 py-md-16">
        <v-row class="py-7 py-md-16">
            <v-col cols="6" md="4">
                <v-img src="@/assets/img/grid-gallery-1.png"></v-img>
            </v-col>
            <v-col cols="6" md="4">
                <v-img src="@/assets/img/grid-gallery-2.png"></v-img>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column justify-center align-start pa-2 pa-md-11">
                <h4 class="text-uppercase text-h5 font-weight-bold mb-1">create your brand</h4>
                <p class="text-body-2 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum inventore nobis sunt
                    voluptates. Velit porro dolor vitae tempora, error aperiam voluptate, quis obcaecati a, incidunt
                    commodi minima eligendi rem.
                </p>
            </v-col>
            <v-col cols="4" md="4">
                <v-img src="@/assets/img/grid-gallery-3.png"></v-img>
            </v-col>
            <v-col cols="4" md="4">
                <v-img src="@/assets/img/grid-gallery-4.png"></v-img>
            </v-col>
            <v-col cols="4" md="4">
                <v-img src="@/assets/img/grid-gallery-5.png"></v-img>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column justify-center align-start pa-2 pa-md-11">
                <h4 class="text-uppercase text-h5 font-weight-bold mb-1">make it famous</h4>
                <p class="text-body-2 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum inventore nobis sunt
                    voluptates. Velit porro dolor vitae tempora, error aperiam voluptate, quis obcaecati a, incidunt
                    commodi minima eligendi rem.
                </p>
            </v-col>
            <v-col cols="6" md="4">
                <v-img src="@/assets/img/grid-gallery-6.png"></v-img>
            </v-col>
            <v-col cols="6" md="4" class="align-self-center">
                <v-img src="@/assets/img/grid-gallery-7.png"></v-img>
            </v-col>

        </v-row>
    </v-container>
</section>
</template>

<script>
export default {
    name: "GridGallery",
}
</script>
