<template>
    <v-toolbar class="pa-3 px-6" color="transparent">
        <v-btn append-icon="menu" v-on:click="drawer = !drawer" class="text-h5 text-white d-block d-md-none" />

        <v-toolbar-title class="d-flex justify-end justify-md-start">
            <h4 class="font-weight-black text-orange-darken-3">THINK</h4>
            <h4 class="font-weight-black text-orange-darken-3">UNLIMITED</h4>
        </v-toolbar-title>

        <v-navigation-drawer v-model="drawer" temporary color="orange-darken-3">
            <v-list>
                <v-list-item v-for="item in menuItems" router :to="item.link" class="pa-6">
                    <v-list-item-title class="pl-2">{{ item.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar-items class="d-none d-md-block">
            <v-list class="d-flex bg-transparent" >
                <v-list-item v-for="item in menuItems" router :to="item.link" class="rounded-lg">
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            drawer: false,
            menuItems: [{
                text: "Home",
                link: "/"
            },
            {
                text: "Services",
                link: "/services"
            },
            {
                text: "Features",
                link: "/features"
            },
            {
                text: "Portfolio",
                link: "/portfolio"
            },
            {
                text: "Blog",
                link: "/blog"
            },
            {
                text: "Contact",
                link: "/contact"
            },
            ]
        }
    }
}
</script>

<style scoped lang="scss"></style>
