<template>
    <div class="list-item">
      <Navbar/>
      <div class="container">
        <div class="row">
          <div class="col">
            <router-link class="btn btn-success mt-4" to="/cud-item"><b-icon-plus-lg /> Add item</router-link>
            <div class="table-responsive mt-4">
                <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Product code</th>
                  <th scope="col">Availability</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in item" :key="item.id">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>
                    <img
                      :src="'img/products/' + item.image"
                      class="img-fluid shadow-lg"
                      width="100"
                      height="45"
                      alt=""
                    />
                  </td>
                  <td>
                    <strong>{{ item.name }}</strong>
                  </td>
                  <td>
                    {{ item.product_code }}
                  </td>
                  <td>
                    {{ item.is_ready ? item.is_ready : false}}
                  </td>
                  <td align="right">Rp. {{ item.price }}</td>
                  <td align="center">
                    <router-link :to="'/edit-item/' + item.id" class="text-warning"><b-icon-pencil /></router-link> | 
                    <a @click="deleteItem(item.id)" class="text-danger">
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
    name: "ListItem",
    data() {
      return {
        item: {},
      };
    },
    methods: {
      setItem(data) {
        this.item = data;
      },
      deleteItem(id) {
        var result = confirm("Are you sure want to delete?");
        if (result){
            axios
            .delete(process.env.VUE_APP_IP_KANTOR + "products/" + id)
            .then(() => {
                this.toast.warning("Item deleted :(", {
                    timeout: 2000,
                });
                
                // auto reload when data deleted
                axios
                .get(process.env.VUE_APP_IP_KANTOR + "products")
                .then((response) => this.setItem(response.data))
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        }
      }
    },
    mounted() {
      axios
        .get(process.env.VUE_APP_IP_KANTOR + "products")
        .then((response) => this.setItem(response.data))
        .catch((error) => console.log(error));
    }
  };
  </script>
  
  <style>
  </style>