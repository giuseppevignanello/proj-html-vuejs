
<script>
export default {
    name: "BannerModal",
    props: {
        bannerText: Array
    },
    data () {
        

        return {}
    }
}
</script>

<template>
   <div class="modal fade" id="bannerTextModal" tabindex="-1" aria-labelledby="bannerTextModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="bannerTextModal">Every Moment Counts</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p v-for="p in this.bannerText">{{ p }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>


<style lang="scss" scoped>

</style>