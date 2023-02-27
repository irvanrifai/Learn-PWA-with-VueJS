<template>
  <div class="card shadow">
    <img :src=" 'img/products/' + product.image" class="card-img-top" alt="..." height="150"/>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Rp . {{ product.price }}</p>
      <a href="#" class="btn btn-success">Buy</a>
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