<script>
import CallToAction from "./CallToAction.vue"
import BannerLogo from "./BannerLogo.vue"
import BottomFooter from "./BottomFooter.vue"
export default {
    name: "PageFooter",
    components: {
        CallToAction,
        BannerLogo,
        BottomFooter
    },
    data() {


        return {
            titleCTA: "Change a life today",
            textCTA: "As long as poverty & inequality persist, none of us can truly rest. It doesn't take much to change a life. Get in touch today and start making the difference",
            firstBtnCTA: "VOLUNTEER",
            secondBtnCTA: "DONATE NOW",
            logoPath: "../../public/img/avada-charity-sticky-header-logo.png",
            bottomFooterText: [
                "Copyright 2012 - 2020 AVADA THEME FUSION |    ",
                "ALL RIGHT RESERVED  |   ",
                "POWERED BY WORDPRESS"
            ],
            socialIcon: [
                "fa-brands fa-facebook-f",
                "fa-brands fa-instagram",
                "fa-brands fa-twitter",
                "fa-brands fa-youtube"

            ]
        }
    }
}
</script>

<template>
    <div>
        <CallToAction :title-c-t-a="this.titleCTA" :text-c-t-a="this.textCTA" :first-btn-c-t-a="this.firstBtnCTA"
            :second-btn-c-t-a="this.secondBtnCTA" />
        <BannerLogo :logo-path="logoPath" />
        <BottomFooter :text="bottomFooterText" :social-icon="socialIcon"/>
    </div>
</template>


<style lang="scss" scoped></style>