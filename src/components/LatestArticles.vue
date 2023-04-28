<script>
import ArticlesRightSide from "./ArticlesRightSide.vue"
import ArticlesLeftSide from "./ArticlesLeftSide.vue"
import ViewMoreArticles from "./ViewMoreArticles.vue"
import SectionTitle from "./SectionTitle.vue"
import latestArticles from "../data/latestArticles"
export default {
    name: "LatestArticles",
    components: {
        ArticlesRightSide,
        ArticlesLeftSide,
        ViewMoreArticles, 
        SectionTitle
    },
    data() {

        return {
            title: "Latest Articles",
            latestArticles: latestArticles,
            
        }
    }
}
</script>

<template>
    <!-- all titles are the same -->
    <div class="container">
        <div id="Journal" class="latestArticles d-flex flex-column align-items-center">
            <SectionTitle :title="title"/>
            <span class="mb-5">Together me make all the difference</span>
            <div class="content row row-cols-2">
                <ArticlesLeftSide />
                <ArticlesRightSide :latest-articles="latestArticles" />
            </div>
        </div>
        <ViewMoreArticles :latest-articles="latestArticles" />
    </div>
</template>

