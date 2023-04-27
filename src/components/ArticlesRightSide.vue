
<script>
export default {
    name: "ArticlesRightSide",
    props: {
        latestArticles: Array
    },
    data() {


        return {}
    }
}
</script>

<template>
    <div class="right_side d-flex flex-column">
        <div class="article d-flex row mb-3" v-for="article in this.latestArticles
                    ">
            <img class="col-4" :src="article.image_path" alt="">
            <div class="text col-8">
                <span class="text-warning">{{ article.title }}</span>
                <p>{{ article.subtitle }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>