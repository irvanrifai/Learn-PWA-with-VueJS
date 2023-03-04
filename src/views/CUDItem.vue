<template>
    <div class="cud-item">
        <div class="container">
            <Navbar/>
            <div class="row">
                <h5 class="text-success mt-4">Add New Item</h5>
                <div class="col-md-6 mt-4">
                    <img src="#" class="img-fluid shadow-lg" width="400"  height="180" alt="">
                    <div class="form-group m-4">
                        <input type="text" name="email_username" class="form-control" id="input-email" placeholder="name img(temp)">
                    </div>
                </div>
                <div class="col-md-6 mt-4">
                    <form v-on:submit.prevent>
                    <div class="form-group">
                        <label for="email">Product code :</label>
                        <input type="text" name="email_username" class="form-control" id="input-email" placeholder="Enter product code">
                    </div>
                    <div class="form-group mt-2">
                        <label for="email">Product name :</label>
                        <input type="text" name="email_username" class="form-control" id="input-email" placeholder="Enter product name">
                    </div>
                    <div class="input-group flex-nowrap mt-4">
                        <span class="input-group-text" id="addon-wrapping">Rp. </span>
                        <input type="text" class="form-control" data-mask='000.000.000-00' placeholder="99.999" aria-label="99.999" aria-describedby="addon-wrapping">
                    </div>
                    <div class="form-check form-switch mt-4">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Is this item ready?</label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    </div>
                    <button type="submit" class="btn btn-success mt-4">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src

export default {
    name: "CUDItem",
    components: {
        Navbar,
    }
}

</script>

<style>
</style>