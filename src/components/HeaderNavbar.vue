
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
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="logo">
                    <img :src="logoImage" alt="">
                </div>
                <button class="navbar-toggler text-bg-warning" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav menu d-flex list-unstyled justify-content-between text-white align-items-end">
                        <li class="nav-item mx-2" v-for="item in menuList">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped></style>