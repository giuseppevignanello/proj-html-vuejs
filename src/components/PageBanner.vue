<script>
export default {
    name: "PageBanner",
    data() {

        return {}
    }
}
</script>

<template>
    <div class="d-flex pageBanner">
        <div class="left_side w-75">
            <h3> EVERY MOMENT COUNTS</h3>
            <div class="bar">
            </div>
            <div class="text py-5">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, ab animi quidem atque vel excepturi.
                    Illo voluptatem corrupti fugit modi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore exercitationem labore dicta
                    veniam placeat, debitis ad alias illo? Ullam quos delectus voluptas, recusandae eligendi ab dolorum
                    veniam? Maiores, saepe?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos ducimus accusantium aspernatur
                    velit pariatur voluptates, nostrum quam molestias dicta?</p>
            </div>
            <button type="button" class="btn btn-warning text-white rounded-0 px-4">OUR MISSION</button>
        </div>
        <div class="right_side w-25 d-flex flex-column text-white justify-content-center">
            <div class="volunteers text-center mb-4">
                <h3><font-awesome-icon :icon="['far', 'heart']" class="fa-xl me-2" />2032</h3>
                <p>Volunters worldwide</p>
            </div>
            <div class="activeProjects text-center mb-4">
                <h3><font-awesome-icon :icon="['fas', 'globe' ]" class="fa-xl me-2" />132</h3>
                <p>Active Projects</p>
            </div>
            <div class="Donated text-center mb-4">
                <h3><font-awesome-icon :icon="['fas', 'dollar-sign']" class="fa-xl me-2" />3.8M</h3>
                <p>Donated</p>
            </div>
        </div>
    </div>
</template>



         