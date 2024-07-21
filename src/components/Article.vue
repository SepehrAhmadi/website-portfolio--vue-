<template>
    <v-container class="mt-16 pa-0">
        <h1 class="article-title font-weight-black text-center text-uppercase">
            whats our new 
            <span class="text-orange-darken-3">article</span>
            ?
        </h1>
    </v-container>

    <div class="article">
        <div class="article-item item-1"></div>
        <div class="article-item item-2"></div>
        <div class="article-item item-3"></div>
        <div class="article-item item-4"></div>
        <div class="article-item item-5">
            <div class="article-text-container d-flex flex-column justify-center align-center pa-0 pa-md-5">
                <h1 class="text-button text-sm-h5 text-md-h4 font-weight-bold text-uppercasemb-3 mb-4 mb-sm-6">CURRENT UI TRENDS</h1>
                <p class="text-caption px-10 text-grey-lighten-2 mb-5 text-justify text-lg-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus sequi assumenda? Porro impedit
                    fuga unde nostrum harum provident consequuntur quas nulla hic inventore molestias ab sint ullam nisi
                    temporibus totam, obcaecati natus repellat! Suscipit temporibus vel, nisi mollitia atque officia
                    deleniti quidem. Tempore nostrum cum labore quia magnam beatae?
                </p>
                <v-btn color="orange-darken-3" rounded="xl" append-icon="south_east" size="small" class="text-capitalize px-6">read more</v-btn>
            </div>
        </div>
        <div class="article-item item-6"></div>
        <div class="article-item item-7"></div>
    </div>
</template>

<script>
export default {
    name: "Article"
}
</script>

