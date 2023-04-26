
<script>
import HeaderNavbar from "./HeaderNavbar.vue"
import JumboTron from "./JumboTron.vue"
export default {
    name: "PageHeader",
    components: {
        HeaderNavbar,
        JumboTron,
    },
    data() {
        return {
            menu: [
                "Home",
                "Mission",
                "Causes",
                "Journal",
                "Donate"
            ],
            transparentLogo: "../../public/img/avada-charity-logo.png"
        }
    }
}
</script>

<template>
    <header>
        <HeaderNavbar :logo-image="transparentLogo" :menu-list="menu" />
        <JumboTron />
    </header>
</template>


<style lang="scss" scoped></style>