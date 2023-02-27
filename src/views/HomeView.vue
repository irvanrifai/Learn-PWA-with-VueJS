<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/swakarta-icon.png" width="100">
    <HelloWorld msg="Super App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
