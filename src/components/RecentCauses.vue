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
            photos_path: [
                "../../public/img/avada-charity-fair-trade-featured-400x300.jpg",
                "../../public/img/avada-charity-shelter-featured-400x300.jpg",
                "../../public/img/avada-charity-farming-featured-400x300.jpg",
                "../../public/img/avada-charity-vaccines-featured-400x300.jpg"



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
                <div class="image me-3" v-for="photo in this.photos_path">
                    <img :src="photo" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="viewAll mt-3 py-4">
            <p class="text-center text-white mt-2">View all our causes</p>
     </div>
</template>


<style lang="scss" scoped></style>