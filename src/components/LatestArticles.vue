<script>
import ArticlesRightSide from "./ArticlesRightSide.vue"
import ArticlesLeftSide from "./ArticlesLeftSide.vue"
import ViewMoreArticles from "./ViewMoreArticles.vue"
export default {
    name: "LatestArticles",
    components: {
        ArticlesRightSide,
        ArticlesLeftSide,
        ViewMoreArticles
    },
    data() {

        return {
            latestArticles: [
                {
                    image_path: "../../public/img/photo-1444664597500-035db93e2323-177x142.jpg",
                    title: "The Human story of uniqueness",
                    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure modi unde, optio similique autem."
                },
                {
                    image_path: "../../public/img/photo-1447430617419-95715602278e-177x142.jpg",
                    title: "Sustainable trade tactics ",
                    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure modi unde, optio similique autem."
                },
                {
                    image_path: "../../public/img/photo-1460230525622-630fe3294cd7-177x142.jpg",
                    title: "Farmers making a difference ",
                    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure modi unde, optio similique autem."
                },
                {
                    image_path: "../../public/img/photo-1460600421604-5e138c208b9c-177x142.jpg",
                    title: "Meeting remote tribes in Perù",
                    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure modi unde, optio similique autem."
                },
                {
                    image_path: "../../public/img/photo-1444664597500-035db93e2323-177x142.jpg",
                    title: "The Human story of uniqueness",
                    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure modi unde, optio similique autem."
                },
                {
                    image_path: "../../public/img/photo-1447430617419-95715602278e-177x142.jpg",
                    title: "Sustainable trade tactics ",
                    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure modi unde, optio similique autem."
                },
                {
                    image_path: "../../public/img/photo-1460230525622-630fe3294cd7-177x142.jpg",
                    title: "Farmers making a difference ",
                    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure modi unde, optio similique autem."
                },
                {
                    image_path: "../../public/img/photo-1460600421604-5e138c208b9c-177x142.jpg",
                    title: "Meeting remote tribes in Perù",
                    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure modi unde, optio similique autem."
                },


            ]
        }
    }
}
</script>

<template>
    <!-- all titles are the same -->
    <div class="container">
        <div id="Journal" class="latestArticles d-flex flex-column align-items-center">
            <h3 class="mt-5">Latest Articles</h3>
            <div class="bar mb-3">
            </div>
            <span class="mb-5">Together me make all the difference</span>
            <div class="content row row-cols-2">
                <ArticlesLeftSide />
                <ArticlesRightSide :latest-articles="latestArticles" />
            </div>
        </div>
        <ViewMoreArticles :latest-articles="latestArticles" />
    </div>
</template>

