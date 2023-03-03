<template>
  <div class="card shadow">
    <img :src=" 'img/products/' + product.image" class="card-img-top" alt="..." height="150"/>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Rp . {{ product.price }}</p>
      <router-link :to="'/item/' + product.product_code" class="btn btn-success">Buy</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>