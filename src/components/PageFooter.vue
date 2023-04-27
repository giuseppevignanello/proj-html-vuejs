<script>
import CallToAction from "./CallToAction.vue"
import BannerLogo from "./BannerLogo.vue"
export default {
    name: "PageFooter",
    components: {
        CallToAction, 
        BannerLogo
    },
    data() {


        return {
            titleCTA: "Change a life today",
            textCTA: "As long as poverty & inequality persist, none of us can truly rest. It doesn't take much to change a life. Get in touch today and start making the difference", 
            firstBtnCTA: "VOLUNTEER",
            secondBtnCTA: "DONATE NOW",
            logoPath: "../../public/img/avada-charity-sticky-header-logo.png" 
    }
}
}
</script>

<template>
    <div>
        <CallToAction :title-c-t-a="this.titleCTA" :text-c-t-a="this.textCTA" :first-btn-c-t-a="this.firstBtnCTA" :second-btn-c-t-a="this.secondBtnCTA"/>
        <BannerLogo :logo-path="logoPath" />
    </div>
</template>


<style lang="scss" scoped></style>