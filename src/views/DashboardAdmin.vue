<template>
  <div class="dashboard-admin">
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="table-responsive mt-4">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Order Number</th>
                  <th scope="col">Order Item</th>
                  <th scope="col">Amount bill</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(ordered, i) in ordered" :key="ordered.id">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>
                    <strong>{{ ordered.name }}</strong>
                  </td>
                  <td>{{ ordered.no_order }}</td>
                  <td>{{ ordered.order }}</td>
                  <td align="right">
                    <strong
                      >Rp. {{ ordered.no_order }}</strong
                    >
                  </td>
                  <td align="center">
                    <a @click="deleteOrder(ordered.id)" class="text-info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
</svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import { useToast } from "vue-toastification";

import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: {
    Navbar,
  },
  name: "DashboardAdmin",
  data() {
    return {
      order: [],
      ordered: []
    };
  },
  methods: {
    setOrder(data) {
      this.ordered = data;
    },
    deleteOrder(id) {
      axios
        .delete(process.env.VUE_APP_IP_KANTOR + "keranjangs/" + id)
        .then(() => {
          this.toast.warning("Order deleted :(", {
            timeout: 2000,
          });

          // auto hot reload when data deleted
          axios
            .get(process.env.VUE_APP_IP_KANTOR + "keranjangs")
            .then((response) => this.setOrder(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_IP_KANTOR + "pesanans")
      .then((response) => this.setOrder(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    amountBill() {
      return this.ordered.reduce(
        (items, data) => items + data.order.products.price * data.order.order_qty,
        0
      );
    },
  },
};
</script>

<style>
</style>