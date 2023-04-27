<script>
export default {
    name: "BannerLogo",
    props: {
        logoPath: String
    },
    data() {


        return {}
    }
}
</script>

<template>
    <div class="bannerLogo text-center py-4">
        <div class="image">
            <img :src="logoPath" alt="">
        </div>
    </div>
</template>

