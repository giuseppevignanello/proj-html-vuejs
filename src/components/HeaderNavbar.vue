
<script>
export default {
    name: "HeaderNavbar",
    props: {
        logoImage: String,
        menuList: Array
    },
    data() {


        return {}
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-2 justify-content-between align-items-center py-3">
            <div class="logo">
                <img :src="logoImage" alt="">
            </div>
            <!-- fix first and last child color  -->
            <ul class="d-flex list-unstyled justify-content-between text-white">
                <li v-for="item in menuList">
                    {{ item }}
                </li>
            </ul>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>