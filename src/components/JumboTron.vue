
<script>
export default {
    name: "JumboTron",
    props: {
        title: String, 
        text: String, 
        first_btn: String, 
        second_btn: String
    },
    data() {


        return {}
    }
}
</script>

<template>
    <div class="jumbotron text-white">
        <div class="container h-100 d-flex flex-column justify-content-center">
            <h1 class="text-center">{{title}}</h1>
            <p class="text-center"> {{text}}</p>
            <div class="buttons row row-cols-6 justify-content-center">
                <button type="button" class="btn btn-outline-light me-4 rounded-0">{{first_btn}}</button>
                <button type="button" class="btn btn-outline-warning rounded-0">{{second_btn}}</button>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>