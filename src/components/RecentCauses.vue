<script>
export default {
    name: "RecentCauses",
    data() {


        return {
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
        <div class="recentCauses d-flex flex-column align-items-center">
            <h3 class="mt-5">Recent Causes</h3>
            <div class="bar mb-3">
            </div>
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