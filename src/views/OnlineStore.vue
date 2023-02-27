<template>
    <div>
        <Navbar/>
        <h2>All you can buy from now</h2>
        
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
export default class OnlineStore extends Vue {}
</script>

<style>
</style>