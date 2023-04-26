
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
            transparentLogo: "../../public/img/avada-charity-logo.png", 
            title: "MAKE A DIFFERENCE", 
            JumboText: "As long as poverty, injustice & inequality persist, none of us can truly rest", 
            firstBtn: "Our Mission", 
            secondBtn: "Donate Now"
        }
    }
}
</script>

<template>
    <header id="appHeader">
        <HeaderNavbar :logo-image="transparentLogo" :menu-list="menu" />
        <JumboTron :title="title" :text="JumboText" :first_btn="firstBtn" :second_btn="secondBtn" />
    </header>
</template>


<style lang="scss" scoped></style>