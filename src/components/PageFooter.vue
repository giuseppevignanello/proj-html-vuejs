<script>
import CallToAction from "./CallToAction.vue"
export default {
    name: "PageFooter",
    components: {
        CallToAction
    },
    data() {


        return {
            titleCTA: "Change a life today",
            textCTA: "As long as poverty & inequality persist, none of us can truly rest. It doesn't take much to change a life. Get in touch today and start making the difference", 
            firstBtnCTA: "VOLUNTEER",
            secondBtnCTA: "DONATE NOW"
    }
}
}
</script>

<template>
    <div>
        <CallToAction :title-c-t-a="this.titleCTA" :text-c-t-a="this.textCTA" :first-btn-c-t-a="this.firstBtnCTA" :second-btn-c-t-a="this.secondBtnCTA"/>
    </div>
</template>


<style lang="scss" scoped></style>