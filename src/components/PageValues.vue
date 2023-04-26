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
        
            ]
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
                <div class="PageValuesContent d-flex mt-5">
                    <div v-for="value in this.values" class="d-flex flex-column align-items-center">
                            <font-awesome-icon :icon="value.icon" class="fa-xl text-warning" />
                            <span> {{value.title}}</span>
                            <p class="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
                                quod,
                                reprehenderit
                                laudantium a aut non!</p>
                            <button type="button" class="btn btn-warning text-white rounded-0 mt-3">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>