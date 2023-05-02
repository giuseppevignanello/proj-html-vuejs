
<script>
export default {
    name: "ArticlesLeftSide",

    data() {


        return {
            title: "Understanding community complexities"
        }
    }
}
</script>

<template>
    <div class="left_side ">
        <div class="card h-100">
            <div class="image">
                <img src="/img/photo-1444213007800-cff19e1677ac-400x300.jpg" class="card-img-top" alt="...">
                <div class="front text-white justify-content-center align-items-center"> 
                    <h4>{{ this.title.toUpperCase() }}</h4>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title text-warning my-3">{{this.title}}</h5>
                <p class="card-text d-none d-sm-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sunt libero
                    ullam ipsam commodi officia.</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>