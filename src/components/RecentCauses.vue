<script>
import SectionTitle from "./SectionTitle.vue"
export default {
    name: "RecentCauses",
    components: {
        SectionTitle
    },
    data() {


        return {
            title: "Recent Causes",
            photos: [
                {
                    photos_path: "../../public/img/avada-charity-fair-trade-featured-400x300.jpg",
                    text: "FAIR TRADE"
                },
                {
                    photos_path:"../../public/img/avada-charity-shelter-featured-400x300.jpg",
                    text: "SHELTER"
                },
                {
                    photos_path:"../../public/img/avada-charity-farming-featured-400x300.jpg",
                    text: "FARMING"
                },
                {
                    photos_path:"../../public/img/avada-charity-vaccines-featured-400x300.jpg",
                    text: "VACCINES"
                }
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div id="Causes" class="recentCauses d-flex flex-column align-items-center">
            <SectionTitle :title="title"/>
            <span class="mb-5">We run projects in over 30 countries in 5 continents</span>
            <div class="photos d-flex mb-5">
                <div class="image me-3" v-for="photo in this.photos">
                    <img :src="photo.photos_path" alt="">
                    <div class="front text-white justify-content-center align-items-center"> 
                        <h4>{{ photo.text }}</h4></div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="viewAll mt-3 py-4">
            <p class="text-center text-white mt-2">View all our causes</p>
     </div>
</template>


<style lang="scss" scoped></style>