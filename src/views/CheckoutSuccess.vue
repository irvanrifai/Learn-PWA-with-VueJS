<template>
    <div class="checkout-success">
        <Navbar/>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-6 d-flex">
                    <p class="text-success">Transaction on proccess, be patient..</p>
                </div>
                <div class="col-md-6">
                    <img src="../assets/img/wait.png" alt="hero-img" width="500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src

export default {
    name:"CheckoutSuccess",
    components: {
        Navbar,
    },    
}
</script>

<style>

</style>