<script>
import BannerModal from './BannerModal.vue';
export default {
    name: "PageBanner",
    components: {
        BannerModal
    },
    data() {

        return {
            bannerText: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, ab animi quidem atque vel excepturi.Illo voluptatem corrupti fugit modi.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore exercitationem labore dicta veniam placeat, debitis ad alias illo? Ullam quos delectus voluptas, recusandae eligendi ab dolorum veniam? Maiores, saepe?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos ducimus accusantium aspernatur velit pariatur voluptates, nostrum quam molestias dicta?"
            ],
            goals: [
                {
                    icon: "fa-regular fa-heart",
                    title: "Volunters worldwide",
                    number: 0,
                    endNumber: 2032,
                    million: ""
                },
                {
                    icon: "fa-solid fa-globe",
                    title: "Active Projects",
                    number: 0,
                    endNumber: 132,
                    million: ""
                },
                {
                    icon: "fa-solid fa-dollar-sign",
                    title: "Donated",
                    number: 0,
                    endNumber: 3.8,
                    million: "M"
                },
            ]
        }
    }, mounted() {
        window.addEventListener('scroll', this.isVisible);
    },
    methods: {
        isVisible() {
            const pageBannerEl = document.querySelector(".toView").getBoundingClientRect();
            if (
                pageBannerEl.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                this.increaseCounter()
                window.removeEventListener('scroll', this.isVisible);
            } else {
                return false
            }
        },
        increaseCounter() {
            setInterval(() => {
                if (this.goals[0].number < this.goals[0].endNumber) {
                    this.goals[0].number += 9;
                }
            }, 10);
            setInterval(() => {
                if (this.goals[1].number < this.goals[1].endNumber) {
                    this.goals[1].number += 1;
                }
            }, 20);
            setInterval(() => {
                if (this.goals[2].number < this.goals[2].endNumber) {
                    this.goals[2].number += 0.1
                }
            }, 70);

        }
    },

}
</script>

<template>
    <div class="d-flex pageBanner">
        <div class="toView"></div>
        <div class="left_side w-75">
            <h3> EVERY MOMENT COUNTS</h3>
            <div class="bar">
            </div>
            <div class="text py-5 d-none d-md-block">
                <p v-for="p in this.bannerText">{{ p }}</p>
            </div>

            <button type="button" class="btn btn-danger text-white rounded-0 px-4 my-3 d-md-none" data-bs-toggle="modal"
                data-bs-target="#bannerTextModal">READ</button>
            <button type="button" class="btn btn-warning text-white rounded-0 px-4">OUR MISSION</button>
        </div>
        <div class="right_side w-25 d-flex flex-column text-white justify-content-center p-3">
            <div v-for="goal in this.goals" class="text-center mb-4">
                <h3 v-if="goal.million == ''" ><font-awesome-icon :icon="goal.icon" class="fa-xl me-2" /> <br> {{ goal.number}} {{
                    goal.million }}</h3>
                <h3 v-else> <font-awesome-icon :icon="goal.icon" class="fa-xl me-2" /> <br> {{ goal.number.toFixed(1) }} {{
                    goal.million }} </h3>
                <p class="d-none d-sm-block">{{ goal.title }}</p>
            </div>
        </div>
        <!-- Modal -->
        <BannerModal :banner-text="bannerText"/>
    </div>
</template>



         