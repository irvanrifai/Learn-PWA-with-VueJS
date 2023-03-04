<template>
    <div class="login-admin">
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-6 p-5">
                    <form v-on:submit.prevent>
                    <div class="form-group">
                        <label for="email">Email / Username :</label>
                        <input type="email" name="email_username" class="form-control" id="input-email" placeholder="Enter email / username">
                    </div>
                    <div class="form-group mt-2">
                        <label for="password">Password :</label>
                        <input type="password" name="password" class="form-control" id="input-password" placeholder="Password">
                    </div>
                    <!-- <button type="submit" class="btn btn-success mt-4">Login</button> -->
                    <router-link to="/dashboard" class="btn btn-success mt-4 float-right">Login</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";

export default {
    name:"LoginAdmin",
    components:{
        Navbar
    }
}
</script>

<style>

</style>