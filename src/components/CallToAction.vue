<script>
export default {
    name: "CallToAction",
    props: {
        titleCTA: String,
        textCTA: String,
        firstBtnCTA: String,
        secondBtnCTA: String
    },
    data() {


        return {
        }
    }
}
</script>

<template>
    <!-- move call to action to footer -->
    <div id="Donate" class="callToAction text-white mt-5 py_10">
        <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
            <h5 class="text-center mt-5">{{ titleCTA }}</h5>
            <div class="bar mb-4">
            </div>
            <p class="text-center w-50">{{textCTA}}</p>
            <div class="buttons">
                <button type="button" class="btn btn-outline-light rounded-0 me-4">{{firstBtnCTA}}</button>
                <button type="button" class="btn btn-outline-light rounded-0">{{secondBtnCTA}}</button>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>