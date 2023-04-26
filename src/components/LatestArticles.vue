<script>
export default {
    name: "LatestArticles",
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

            ]
        }
    }
}
</script>

<template>
    <!-- all titles are the same -->
    <div class="container">
        <div class="latestArticles d-flex flex-column align-items-center">
            <h3 class="mt-5">Latest Articles</h3>
            <div class="bar mb-3">
            </div>
            <span class="mb-5">Together me make all the difference</span>
            <div class="content row row-cols-2">
                <div class="left-side ">
                    <div class="card h-100">
                        <img src="../../public/img/photo-1444213007800-cff19e1677ac-400x300.jpg" class="card-img-top"
                            alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-warning my-3">Understanding community complexities</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sunt libero
                                ullam ipsam commodi officia.</p>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>

        <!-- insert link -->
        <div class="viewAll text-white text-center py-2 mt-5">
           View All Our Articles
        </div>
    </div>
</template>


<style lang="scss" scoped></style>