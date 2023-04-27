

<script>
export default {
    name: "OffcanvasVolunteer",
    data () {
        

        return {}
    }
}
</script>

<template>
     <div class="offcanvas offcanvas-start text-dark" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="becameVolunteer" aria-labelledby="becameVolunteer">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="becameVolunteer">Became a Volunteer!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form>
                    <div class="mb-3">
                        <label for="emailVolunteer" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="emailVolunteer" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName">
                    </div>
                    <div class="mb-3">
                        <label for="secondName" class="form-label">Second Name</label>
                        <input type="text" class="form-control" id="secondName">
                    </div>
                    <button type="submit" class="btn btn-warning">Submit</button>
                </form>
            </div>
        </div>
</template>

<style lang="scss" scoped>

</style>