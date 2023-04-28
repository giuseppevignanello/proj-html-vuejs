

<script>
export default {
    name: "ViewMoreArticles",
    props: {
        latestArticles: Array
    },
    data() {


        return {
            viewMoreClicked: false,
        }
    }, 
    methods: {
        click() {
            this.viewMoreClicked = !this.viewMoreClicked
        }
    }
}
</script>

<template>
    <div @click="click()" class="viewAll text-center py-2 mt-5 text-white">
        View All Our Articles
    </div>
    <div v-show="this.viewMoreClicked" class="moreArticles">
        <div class="d-flex justify-content-center mt-3">
            <div class="article d-flex row mb-3 justify-content-center" v-for="article in this.latestArticles.slice(5,this.latestArticles.length)">
                <img class="col-8 col-sm-8 col-lg-6 col-xl-4" :src="article.image_path" alt="">
                <div class="text col-8">
                    <span class="text-warning d-none d-md-block">{{ article.title }}</span>
                    <p class="d-none d-lg-block">{{ article.subtitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>