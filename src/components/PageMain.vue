<script>
import PageBanner from "./PageBanner.vue"
import PageValues from "./PageValues.vue"
import RecentCauses from "./RecentCauses.vue"
import LatestArticles from "./LatestArticles.vue"

export default {
    name: "PageMain",
    components: {
        PageBanner, 
        PageValues, 
        RecentCauses, 
        LatestArticles, 

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
</template>


<style lang="scss" scoped>

</style>