<template>
<v-container class="team">
    <div class="team-member-1 d-flex flex-column justify-center align-start">
        <h1 class="line-1 font-weight-bold text-uppercase">
            The minds
            <span class="text-orange-darken-3">behinde</span>
        </h1>
        <div class="d-flex justify-start align-center">
            <h3 class="line-2 font-weight-bold text-uppercase mr-4">our
                <span class="text-orange-darken-3">Creative</span>
                team</h3>
            <v-btn append-icon="south_east" class="text-capitalize pa-1 pa-sm-2 text-caption text-sm-body-1" color="orange-darken-3" size="sma-lgll" rounded="xl">
                explore more
            </v-btn>
        </div>
    </div>

    <div class="team-member-2">
        <v-img src="../assets/img/team-member-1.png" class="img"></v-img>
    </div>

    <div class="team-member-3">
        <v-img src="../assets/img/team-member-2.png" class="img"></v-img>
    </div>

    <div class="team-member-4">
        <v-img src="../assets/img/team-member-3.png" class="img ml-4 ml-sm-5 ml-md-6 ml-lg-14"></v-img>
    </div>

    <div class="team-member-5 d-flex justify-end align-center">
        <v-img src="../assets/img/team-member-4.png" class="img mr-0 ma-4 mr-sm-0 ma-sm-5 mr-md-0 ma-md-6 mr-lg-0 ma-lg-14"></v-img>
    </div>
    
    <div class="team-member-6">
        <v-img src="../assets/img/team-member-5.png" class="img mt-2 ma-8 mt-sm-0 ma-sm-10 mt-md-0 ma-md-12 mt-lg-0 ma-lg-16"></v-img>
    </div>
</v-container>
</template>

<script>
export default {
    name: "Team"
}
</script>
