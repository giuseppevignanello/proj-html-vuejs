<script>
export default {
    name: "PageBanner",
    data() {

        return {
            bannerText: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, ab animi quidem atque vel excepturi.Illo voluptatem corrupti fugit modi.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore exercitationem labore dicta veniam placeat, debitis ad alias illo? Ullam quos delectus voluptas, recusandae eligendi ab dolorum veniam? Maiores, saepe?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos ducimus accusantium aspernatur velit pariatur voluptates, nostrum quam molestias dicta?"
            ]
        }
    }
}
</script>

<template>
    <div class="d-flex pageBanner">
        <div class="left_side w-75">
            <h3> EVERY MOMENT COUNTS</h3>
            <div class="bar">
            </div>
            <div class="text py-5 d-none d-md-block">
                <p v-for="p in this.bannerText">{{ p }}</p>
            </div>

            <button type="button" class="btn btn-danger text-white rounded-0 px-4 my-3 d-md-none" data-bs-toggle="modal" data-bs-target="#bannerTextModal">READ</button>
            <button type="button" class="btn btn-warning text-white rounded-0 px-4">OUR MISSION</button>
        </div>
        <div class="right_side w-25 d-flex flex-column text-white justify-content-center p-3">
            <div class="volunteers text-center mb-4">
                <h3><font-awesome-icon :icon="['far', 'heart']" class="fa-xl me-2" />2032</h3>
                <p class="d-none d-sm-block">Volunters worldwide</p>
            </div>
            <div class="activeProjects text-center mb-4">
                <h3><font-awesome-icon :icon="['fas', 'globe']" class="fa-xl me-2" />132</h3>
                <p class="d-none d-sm-block">Active Projects</p>
            </div>
            <div class="Donated text-center mb-4">
                <h3><font-awesome-icon :icon="['fas', 'dollar-sign']" class="fa-xl me-2" />3.8M</h3>
                <p class="d-none d-sm-block">Donated</p>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="bannerTextModal" tabindex="-1" aria-labelledby="bannerTextModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="bannerTextModal">Every Moment Counts</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p v-for="p in this.bannerText">{{ p }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



         