<template>


<!-- // emitted data sends it up -->
<!-- props and queries send stuff down -->

<!-- send emitted data into navbar as a this.$route.query -->
<Navbar @logout="logout"/>

</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
// import HelloWorld from '../components/HelloWorld.vue'
// import Collapse from '../components/Collapse.vue'

export default {
  name: 'Main',
  components: {
    Navbar
  },
  methods: {
    logout: function(){
      this.$emit("logout")
      console.log("logout received")
    }

  }
}
</script>
