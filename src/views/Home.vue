<template>
  <div class="home">

  <Header v-bind:URL="URL"/>

  </div>
</template>

<script>

import Header from '../components/Header.vue'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Header,
  }
}
</script>
