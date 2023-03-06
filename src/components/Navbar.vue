<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="">Blonjo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/online-store"
                >Store</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="nav-link" to="/item">Item</router-link></li>
                <li><router-link class="nav-link" to="/dashboard">Order</router-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><router-link class="nav-link" to="/setting">Setting</router-link></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mt-1">
              <router-link class="nav-link" to="/cart"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
                <span class="badge text-bg-success ms-1">{{ updateOrder ? updateOrder.length : order_qty.length }}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"><a class="btn btn-success"><b-icon-person /> Login</a></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Navbar-ini",
  data(){
    return {
      order_qty:[]
    }
  },
  props:['updateOrder'],
  methods:{
    setOrderQty(data){
      this.order_qty = data
    },
  },
  mounted(){
    axios
    .get(process.env.VUE_APP_IP_KANTOR + 'keranjangs')
    .then((response) => this.setOrderQty(response.data))
    .catch((error) => console.log(error));
  }
};
</script>

<style>
</style>