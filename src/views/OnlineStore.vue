<template>
  <div class="online-store">
    <Navbar/>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h4>All you can buy from now</h4>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-4 float-right">
            <div class="input-group mb-3">
                <input v-model="search" type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" @keyup="searchItem">
                <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </span>
            </div>
        </div>
      </div>

      <!-- looping data -->
      <div class="row mb-3">
        <div
          class="col-md-3 mt-4"
          v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src
import CardProduct from '@/components/CardProduct.vue'; // @ is an alias to /src

import axios from 'axios';

@Options({
  components: {
    Navbar,
    CardProduct
  },
  data(){
    return {
      products:[],
      search:'',
    }
  },
  methods:{
    setProducts(data:[]){
      this.products = data
    },
    searchItem(){
        axios
        .get(process.env.VUE_APP_IP_KANTOR + 'products?q=' + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    }
  },
  mounted(){
    axios
    .get(process.env.VUE_APP_IP_KANTOR + 'products')
    .then((response) => this.setProducts(response.data))
    .catch((error) => console.log(error));
  }
})
export default class OnlineStore extends Vue {}
</script>

<style>
</style>