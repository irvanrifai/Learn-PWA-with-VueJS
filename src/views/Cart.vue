<template>
  <div class="cart">
    <Navbar :updateOrder="order" />
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-4">
          <h3>My Cart</h3>
          <div class="table-responsive mt-4">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Item</th>
                  <th scope="col">Note</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, i) in order" :key="order.id">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>
                    <img
                      :src="'img/products/' + order.products.image"
                      class="img-fluid shadow-lg"
                      width="100"
                      height="45"
                      alt=""
                    />
                  </td>
                  <td>
                    <strong>{{ order.products.name }}</strong>
                  </td>
                  <td>{{ order.note ? order.note : "-" }}</td>
                  <td>{{ order.order_qty ? order.order_qty : 0 }}</td>
                  <td align="right">Rp. {{ order.products.price }}</td>
                  <td align="right">
                    <strong
                      >Rp. {{ order.products.price * order.order_qty }}</strong
                    >
                  </td>
                  <td align="center">
                    <a @click="deleteOrder(order.id)" class="text-danger">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total harga : </strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalPrice }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4 p-2">
            <form v-on:submit.prevent>
            <div class="form-group mt-2">
                <label for="name">Name :</label>
                <input
                name="name"
                type="text"
                class="form-control"
                id="input-name"
                placeholder="Your name"
                v-model="ordered.name"
                />
            </div>
            <div class="form- mt-2">
                <label for="no_order">Order Number :</label>
                <input
                name="no_order"
                type="text"
                class="form-control"
                id="input-no_order"
                placeholder="Your order number"
                v-model="ordered.no_order"
                />
            </div>
            <button type="submit" class="btn btn-success mt-4 float-right" @click="checkout">
                Checkout
            </button>
            </form>
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
  name: "Cart-ini",
  data() {
    return {
      order: [],
      ordered: []
    };
  },
  methods: {
    setOrder(data) {
      this.order = data;
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
    },
    checkout(){
        if (this.order && this.ordered.name && this.ordered.no_order){
            this.ordered.order = this.order;
            axios
                .post(process.env.VUE_APP_IP_KANTOR + 'pesanans', this.ordered)
                .then(() => {

                  var data_id = []
                  for (let i = 0; i <= this.order.length; i++){
                    data_id.push(this.order[i]);
                    // console.log(data_id);
                    // console.log(data_id[0]);
                    // console.log(data_id[0][i]);
                    // console.log(data_id[0][i].id);

                    console.log(this.order[i]['id'])
                    // axios
                    //     .delete(process.env.VUE_APP_IP_KANTOR + 'keranjangs/'+ this.order[i].id)
                    //     .catch((error) => console.log(error));
                  }

                  axios
                    .get(process.env.VUE_APP_IP_KANTOR + "keranjangs")
                    .then((response) => this.setOrder(response.data))
                    .catch((error) => console.log(error));

                    this.toast.success("Checkout successfull :)", {
                        timeout: 2000
                    });

                    this.$router.push({
                        path: "/checkout-success"
                    })
                })
                .catch((error) => {
                    console.log(error);
                    this.toast.error("Checkout failed", {
                        timeout: 2000
                    });
                })
        }else{
            this.toast.error("Order, Name & Order number cannot be null", {
                timeout: 2000,
            });
        }
    }
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_IP_KANTOR + "keranjangs")
      .then((response) => this.setOrder(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalPrice() {
      return this.order.reduce(
        (items, data) => items + data.products.price * data.order_qty,
        0
      );
    },
  },
};
</script>

<style>
</style>