<template>
<v-container class="comment-title px-8 mt-16" >
    <div class="d-flex flex-row justify-center align-center">
        <h1 class="comment-title-text font-weight-bold text-uppercase">
            what 
            <span class="text-orange-darken-3">clients</span>
            say 
            <span class="text-orange-darken-3">about</span>
            us
        </h1>
        <h1 class="comment-title-question-mark font-weight-bold text-uppercase text-orange-darken-3">?</h1>
    </div>
    <div>
        <h4 class="comment-title-info text-caption text-sm-subtitle-2 text-uppercase">Message from our clients</h4>
    </div>
</v-container>

<v-container class="mb-16 mt-0 px-8">
    <v-row class="d-flex justify-center align-center">

        <v-col cols="12" md="6" lg="4" class="comment my-4 my-lg-0" v-for="card in cards" v-key="card.name">
            <v-row class="px-2 align-self-center" v-if="showCard[card.id - 1].show" v-on:click="foucsCard(card.id)">
                <v-card class="comment-card rounded-xl d-flex justify-center align-center align-md-end pt-10" >
                    <v-col cols="6" class="py-0">
                        <v-img :src="card.image"></v-img>
                    </v-col>
                    <v-col cols="6" class="py-0">
                            <h1 class="text-h3 font-weight-bold text-uppercase">{{ card.name }}</h1>
                            <p class="text-grey-lighten-2 text-caption pb-2 text-capitalize">{{ card.job }}</p>
                            <p class="text-caption text-grey-lighten-3">{{ card.comment }}</p>
                            <div class="pb-2">
                                <span @click="card.stars[0].star = !card.stars[0].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[0].star}"></v-icon>
                                </span>
                                <span @click="card.stars[1].star = !card.stars[1].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[1].star}"></v-icon>
                                </span>
                                <span @click="card.stars[2].star = !card.stars[2].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[2].star}"></v-icon>
                                </span>
                                <span @click="card.stars[3].star = !card.stars[3].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[3].star}"></v-icon>
                                </span>
                                <span @click="card.stars[4].star = !card.stars[4].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[4].star}"></v-icon>
                                </span>
                            </div>
                    </v-col>
                </v-card>
            </v-row>

            <v-row class="px-2 align-self-center" v-else="showCard[card.id - 1].show" v-on:click="foucsCard(card.id)">
                <v-card class="comment-card rounded-xl d-flex justify-center align-end align-md-end pt-5" >
                    <v-col cols="6" class="py-0">
                        <v-img :src=card.image></v-img>
                    </v-col>
                    <v-col cols="6" class="py-0">
                            <h1 class="text-h3 font-weight-bold text-uppercase">{{card.name}}</h1>
                            <p class="text-grey-lighten-2 text-caption pb-2 text-capitalize">{{card.job}}</p>
                            <p class="comment-text text-caption text-grey-lighten-3">{{card.comment}}</p>
                            <div class="comment-starIcons">
                                <span @click="card.stars[0].star = !card.stars[0].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[0].star}"></v-icon>
                                </span>
                                <span @click="card.stars[1].star = !card.stars[1].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[1].star}"></v-icon>
                                </span>
                                <span @click="card.stars[2].star = !card.stars[2].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[2].star}"></v-icon>
                                </span>
                                <span @click="card.stars[3].star = !card.stars[3].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[3].star}"></v-icon>
                                </span>
                                <span @click="card.stars[4].star = !card.stars[4].star">
                                    <v-icon icon="star" size="small" :class="{iconBlack : card.stars[4].star}"></v-icon>
                                </span>
                            </div>
                    </v-col>
                </v-card>
            </v-row>
        </v-col>

        <v-col cols="12">
            <div class="btn-container d-flex justify-center align-center mt-0 mt-lg-5">
                <div v-for="btn in btnClick" id="btn" :class="{activeStyle : btn.btnColor}" @click="foucsCard(btn.id)"></div>
            </div>
        </v-col>
    </v-row>
</v-container>

<v-container fluid class="my-16 px-8">
    <v-row class="d-flex justify-center align-center">
        <v-col cols="3" md="2" class="mx-lg-4" v-for="brand in brands">
            <v-img :src="brand.image"></v-img>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import profile1 from '../assets/img/profile-pic-1.png'
import profile2 from '../assets/img/profile-pic-2.png'
import profile3 from '../assets/img/profile-pic-3.png'
import brand1 from '../assets/img/brand-1.png'
import brand2 from '../assets/img/brand-2.png'
import brand3 from '../assets/img/brand-3.png'
import brand4 from '../assets/img/brand-4.png'
import brand5 from '../assets/img/brand-5.png'

export default {
    name: "Comment",
    data() {
        return {
            brands : [{image : brand1},{image : brand2},{image : brand3},{image : brand4},{image : brand5}],
            cards : [
                {
                    name : "david",
                    job : "fashian designer",
                    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugiat cumque aliqu cupiditate eos!",
                    image : profile1,
                    stars : [{star : false, id: 1},{star : true, id: 2},{star : true, id: 3},{star : true, id: 4},{star : true, id: 5}],
                    id : 1
                },
                {
                    name : "olivia",
                    job : "business woman",
                    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugiat cumque aliqu cupiditate eos!",
                    image : profile2,
                    stars : [{star : false, id: 1},{star : true, id: 2},{star : true, id: 3},{star : true, id: 4},{star : true, id: 5}],
                    id : 2
                },
                {
                    name : "josh",
                    job : "content writer",
                    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugiat cumque aliqu cupiditate eos!",
                    image : profile3,
                    stars : [{star : false, id: 1},{star : true, id: 2},{star : true, id: 3},{star : true, id: 4},{star : true, id: 5}],
                    id : 3
                },
            ],
            showCard : [{show : false , id : 1}, {show : true , id : 2}, {show : false , id : 3}],
            btnClick : [{btnColor : false, id : 1} , {btnColor : true, id : 2} , {btnColor : false, id : 3}],
        }
    },
    methods : {
        foucsCard(id){
            this.btnClick.map( btn => btn.btnColor = false)
            this.showCard.map( card => card.show = false)
            
            const newArrayForBtn = []
            for(let i=0 ; i < this.btnClick.length ; i++){
                const currentObj = this.btnClick[i]
                if(currentObj.id == id){
                    const updatedObj  = {
                        ...currentObj,
                        btnColor : !currentObj.btnColor
                    }
                    newArrayForBtn.push(updatedObj)
                }else {
                    newArrayForBtn.push(currentObj)
                }
            }
            this.btnClick = newArrayForBtn

            const newArrayForCard = []
            for(let i=0 ; i < this.showCard.length ; i++){
                const currentObj = this.showCard[i]
                if(currentObj.id == id){
                    const updatedObj  = {
                        ...currentObj,
                        show : !currentObj.show
                    }
                    newArrayForCard.push(updatedObj)
                }else {
                    newArrayForCard.push(currentObj)
                }
            }
            this.showCard = newArrayForCard
        },
    },
}
</script>
