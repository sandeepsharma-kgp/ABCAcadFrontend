<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Default />
  </div>
</template>

<script>
// @ is an alias to /src
import Default from '../layouts/Default.vue'

export default {
  name: 'home',
  components: {
    Default
  }
}
</script>
