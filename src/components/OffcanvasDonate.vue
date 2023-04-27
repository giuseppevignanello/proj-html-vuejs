
<script>
export default {
    name: "OffcanvasDonate",
    data() {
        

        return {}
    }
}
</script>

<template>
     <div class="offcanvas offcanvas-start text-dark" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="donate" aria-labelledby="donateLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="donateLabel">Donate!</h5>
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
                    <label for="donateSelect">How much do you want to donate?</label>
                    <select id="donateSelect" class="form-select mb-3" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">$10</option>
                        <option value="2">$20</option>
                        <option value="3">$50</option>
                        <option value="4">$100</option>
                        <option value="5">More</option>
                    </select>
                    <button type="submit" class="btn btn-warning">Submit</button>
                </form>
            </div>
        </div>
</template>


<style lang="scss" scoped>

</style>