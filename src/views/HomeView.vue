<template>
  <div class="home">
    <Navbar/>
    <Hero/>
    <div class="container">
      <div class="row m-3 mt-5">
        <div class="col">
          <h5>Best <strong>Products</strong></h5>
        </div>
        <div class="col">
          <router-link to="/online-store" class="btn btn-outline-success float-right">More product</router-link>
        </div>
      </div>

      <!-- looping data -->
      <div class="row m-3 mb-3">
        <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src
import Hero from '@/components/Hero.vue'; // @ is an alias to /src
import CardProduct from '@/components/CardProduct.vue'; // @ is an alias to /src

import axios from 'axios';

@Options({
  components: {
    Navbar,
    Hero,
    CardProduct
  },
  data(){
    return {
      products:[]
    }
  },
  methods:{
    setProducts(data:[]){
      this.products = data
    }
  },
  mounted(){
    axios
    .get(process.env.VUE_APP_IP_KANTOR + 'best_products')
    .then((response) => this.setProducts(response.data))
    .catch((error) => console.log(error));
  }
})
export default class HomeView extends Vue {}
</script>
