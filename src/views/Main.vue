<template>
<div class="main">

<!-- // emitted data sends it up -->
<!-- props and queries send stuff down -->

<!-- send emitted data into navbar as a this.$route.query -->
<Navbar v-bind:user="user" @logout="logout"/>
<ul>
  <li v-for="message of messages.results" v-bind:key="message.id">{{message.sender}}{{message.message}}</li>
</ul>

</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Main',
  data: function(){
    return {
      // username:"",
      // avatar:"",
      messages: [],
    }
  },
  created: function(){
  console.log(this.$route.query)
  const {token, URL, username} = this.$route.query
  this.user = username
  console.log(token)
  fetch(`${URL}/cloud_msg/messages/`, {
    method: 'get',
    headers: {
      authorization: `JWT ${token.token}`
    }
  })
  .then(response => response.json())
  .then(data => {
    this.messages = data
  })
  },
  components: {
    Navbar
  },
  methods: {
    logout: function(){
      this.$emit("logout")
      console.log("logout received")
    },
  }
}
</script>
