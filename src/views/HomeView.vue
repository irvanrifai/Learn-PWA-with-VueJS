<template>
  <div class="home">
    <div>
      <!-- Image and text -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img src="../assets/swakarta-icon.png" width="50" class="d-inline-block align-top" alt="Swakarta">
          Swakarta
        </b-navbar-brand>
      </b-navbar>
    </div>
    <Navbar/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src

@Options({
  components: {
    Navbar,
  },
})
export default class HomeView extends Vue {}
</script>
