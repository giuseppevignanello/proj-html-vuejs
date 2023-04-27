<script>
export default {
    name: "BottomFooter",
    props: {
        text: Array, 
        socialIcon: Array
    },
    data() {


        return {}
    }
}
</script>

<template>
    <div class="bottomFooter">
        <div class="container text-center py-5">
            <div class="text">
                <span class="icon">
                    <font-awesome-icon icon="fa-regular fa-copyright" class="me-2"/>
                </span>
                <span v-for="item in text">
                    {{ item }}
                </span>
            </div>
            <div class="social d-flex justify-content-center my-4">
                <font-awesome-icon v-for="icon in socialIcon" :icon="icon" class="icon fa-xl me-3 text-warning rounded-circle bg-light p-2" />
            </div>
        </div>
        <div class="angleUp rounded-circle d-flex align-items-center">
            <a href="#" class="px-2 "> <font-awesome-icon  class="w-100 h-100" :icon="['fas', 'angle-up']" /></a>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>

