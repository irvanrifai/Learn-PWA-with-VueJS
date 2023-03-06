<template>
    <div class="cud-item">
      <div class="container">
        <Navbar />
        <form @submit.prevent="getItemById">
        <div class="row">
          <h5 class="text-success mt-4">{{ editing ? 'Edit' : 'Add' }} Item</h5>
          <div class="col-md-6 mt-4">
            <img
              src="#"
              class="img-fluid shadow-lg"
              width="400"
              height="180"
              alt=""
            />
            <div class="form-group m-4">
              <input
                type="text"
                name="email_username"
                class="form-control"
                id="input-email"
                placeholder="name img(temp) ex. blabla.jpg / .png"
                v-model="item.image"
              />
            </div>
          </div>
          <div class="col-md-6 mt-4">
              <div class="form-group">
                <label for="email">Product code :</label>
                <input
                  type="text"
                  name="product_code"
                  class="form-control"
                  id="input-product_code"
                  placeholder="Enter product code"
                  v-model="item.product_code"
                />
              </div>
              <div class="form-group mt-2">
                <label for="email">Product name :</label>
                <input
                  type="text"
                  name="product_name"
                  class="form-control"
                  id="input-product_name"
                  placeholder="Enter product name"
                  v-model="item.name"
                />
              </div>
              <div class="form-group mt-2">
                <label for="email">Product price :</label>
                <CurrencyInput
                  class="form-control"
                  id="input-product_price"
                  name="product_price"
                  placeholder="99.999"
                  v-model="item.price"
                  :options="{ currency: 'IDR' }"
                />
                <input type="number" v-model="item.price">
              </div>
              <div class="form-check form-switch mt-4">
                <label class="form-check-label" for="flexSwitchCheckDefault"
                  >Is this item ready?</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  v-model="item.is_ready"
                />
              </div>
              <!-- <button type="submit" class="btn btn-success mt-4" @click="addItem">Add</button> -->
              <button type="submit" class="btn btn-success mt-4" value="add Item">Add</button>
            </div>
          </div>
        </form>
        </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src
  import CurrencyInput from "./CurrencyInput.vue";
  import axios from "axios";
  import { useToast } from "vue-toastification";

  var temp = Object.freeze({
      image: '',
      product_code: '',
      name: '',
      price: '',
      is_ready: '',
  });
  
  export default {
    name: "CUDItem",
    setup() {
      const toast = useToast();
      return { toast };
    },
    components: {
      Navbar,
      CurrencyInput,
    },
    props: {
      type: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        item: Object.assign({}, temp),
        editing:false
      };
    },
    methods: {
      setItem(data) {
        this.item = data;
      },

      addItem() {
        if (this.item) {
          axios
            .post(process.env.VUE_APP_IP_KANTOR + "products", this.item)
            .then(() => {
              this.toast.success("Add item successfull :)", {
                timeout: 2000,
              });
              this.$router.push({
                  path: "/item"
              });
            })
            .catch((error) => {
              console.log(error);
              this.toast.error("Add item failed", {
                timeout: 2000,
              });
            });
        } else {
          this.toast.error("Please check all field input", {
            timeout: 2000,
          });
        }
      },

      getItemById(){
        axios
        .get(process.env.VUE_APP_IP_KANTOR + 'products/' + this.$route.params.id)
        .then((response) => this.setItem(response.data))
        .catch((error) => console.log(error))
      },

      editItem(){
        if (this.item) {
          axios
          .patch(process.env.VUE_APP_IP_KANTOR + 'products/' + this.$route.params.id)
          .then(() => {
            this.toast.success("Edit item successfull :)", {
                timeout: 2000,
              });
              this.$router.push({
                  path: "/item"
              });
            })
            .catch((error) => {
              console.log(error);
              this.toast.error("Edit item failed", {
                timeout: 2000,
              });
            });
          } else {
            this.toast.error("Please check all field input", {
              timeout: 2000,
            });
          }
      }
    },
    mounted(){
      axios
        .get(process.env.VUE_APP_IP_KANTOR + 'products/' + this.$route.params.id)
        .then((response) => this.setItem(response.data))
        .catch((error) => console.log(error))
    }
  };
  </script>
  
  <style>
  </style>