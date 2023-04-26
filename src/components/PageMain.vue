<script>
import PageBanner from "./PageBanner.vue"
import PageValues from "./PageValues.vue"
import RecentCauses from "./RecentCauses.vue"
import LatestArticles from "./LatestArticles.vue"
import CallToAction from "./CallToAction.vue"
export default {
    name: "PageMain",
    components: {
        PageBanner, 
        PageValues, 
        RecentCauses, 
        LatestArticles, 
        CallToAction
    },
    data () {
        

        return {}
    }
}
</script>

<template>
    <PageBanner/>
    <PageValues/>
    <RecentCauses/>
    <LatestArticles/>
    <CallToAction/>
</template>


<style lang="scss" scoped>

</style>