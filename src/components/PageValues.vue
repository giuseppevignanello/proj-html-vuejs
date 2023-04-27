<script>
export default {
    name: "PageValues",
    data() {

        return {
            values: [
                {
                    icon: ['fas', 'droplet'],
                    title: "Clean Water"
                }, 
                {
                    icon:  ['fas', 'stethoscope'],
                    title: "Vaccination", 
                },
                {
                    icon:  ['fas', 'graduation-cap'],
                    title: "Education"
                },
                {
                    icon:   ['fas', 'wheat-alt'],
                    title: "Farming" 
                },
        
            ], 
            valueText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosamquod,reprehenderit laudantium a aut non!"
}
}
}
</script>

<template>
    <div class="pageValues text-white">
        <div class="pageValuesBg"></div>
        <div class="pageValuesText d-flex flex-column align-items-center">
            <h3>OUR VALUES</h3>
            <div class="bar">
            </div>
            <p class="my-5">Think Big. Act Bigger</p>
            <div class="container">
                <div class="PageValuesContent d-md-flex mt-md-5 justify-content-center">
                    <div v-for="value in this.values" class="d-flex flex-column align-items-center mt-3">
                            <font-awesome-icon :icon="value.icon" class="fa-xl text-warning" />
                            <h4 class="valueTitle"> {{value.title}}</h4>
                            <p class="text-center d-none d-md-block">{{ this.valueText }}</p>
                            <button type="button" class="valueBtn btn btn-warning text-white rounded-0 mt-3">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
</template>


<style lang="scss" scoped></style>