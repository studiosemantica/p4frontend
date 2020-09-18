<template>
  <div class="home">
    <img src="../assets/Nightclub-Photography-4.jpg">
    <HelloWorld msg="Hey"/>
    <Collapse/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import Collapse from '../components/Collapse.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Collapse
  }
}
</script>
