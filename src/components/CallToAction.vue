<script>
import OffcanvasVolunteer from './OffcanvasVolunteer.vue';
import OffcanvasDonate from "./OffcanvasDonate.vue"
export default {
    name: "CallToAction",
    components: {
        OffcanvasVolunteer, 
        OffcanvasDonate
    },
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
    <div id="Donate" class="callToAction text-white mt-5 py_10">
        <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
            <h5 class="text-center mt-5">{{ titleCTA }}</h5>
            <div class="bar mb-4">
            </div>
            <p class="text-center w-50">{{ textCTA }}</p>
            <div class="buttons">
                <button type="button" class="btn btn-outline-light rounded-0 me-4" data-bs-toggle="offcanvas"
                    data-bs-target="#becameVolunteer" aria-controls="becameVolunteer">{{ firstBtnCTA }}</button>
                <button type="button" class="btn btn-outline-light rounded-0" data-bs-toggle="offcanvas"
                    data-bs-target="#donate" aria-controls="donate">{{ secondBtnCTA }}</button>
            </div>
        </div>
        <!-- Offcanvas -->
        <OffcanvasVolunteer/>
        <OffcanvasDonate/>
    </div>
</template>


<style lang="scss" scoped></style>