<template>
    <div class="item-detail mt-4">
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-4">
                    <img :src=" 'img/products/' + product.image" class="img-fluid shadow-lg" width="400"  height="180" alt="">
                </div>
                <div class="col-md-6 mt-4">
                    <h4><strong>{{ product.name }}</strong></h4>
                    <p>Harga : Rp. <strong>{{ product.price }}</strong></p>
                    <hr>
                    <form v-on:submit.prevent>
                        <div class="form-group">
                            <label for="order_qty">Quantity</label>
                            <input name="order_qty" type="number" class="form-control" id="input-order_qty" placeholder="0" min="1" v-model="order.order_qty">
                        </div>
                        <div class="form-group mt-2">
                            <label for="note">Note</label>
                            <textarea name="note" id="input-note" class="form-control" placeholder="Notes to seller / shop" v-model="order.note"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success mt-4" @click="buyItem">Buy now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import { useToast } from 'vue-toastification'

import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src

export default {
    setup(){
        const toast = useToast();
        return { toast }
    },
    name:"ItemDetail",
    data(){
        return {
            product : {},
            order : {}
        }
    },
    components:{
        Navbar
    },
    methods:{
        setProduct(data){
            this.product = data
        },
        buyItem(){
            if (this.order.order_qty && this.order.order_qty !== null && this.order.order_qty !== 0){
                this.order.products = this.product;
                axios
                .post(process.env.VUE_APP_IP_KANTOR + 'keranjangs', this.order)
                .then(() => {
                    this.$router.push({
                        path: "/cart"
                    })
                    this.toast.success("Added to cart", {
                        timeout: 2000
                    });
                })
                .catch((error) => {
                    console.log(error);
                    this.toast.error("Failed add to cart", {
                        timeout: 2000
                    });
                })
            }else{
                this.toast.warning("Quantity cannot be 0", {
                    timeout: 2000
                });
            }
        }
    },
    mounted(){
        axios
        .get(process.env.VUE_APP_IP_KANTOR + 'products/' + this.$route.params.id)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log(error))
    }
}
</script>

<style>

</style>