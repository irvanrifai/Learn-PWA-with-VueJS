<template>
    <div class="checkout-success">
        <Navbar/>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-12 justify-content-center align-self-center">
                    <img src="../assets/img/wait.png" alt="wait-img" width="400" />
                    <small class="text-success text-sm-center">Transaction on proccess, be patient...</small>
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