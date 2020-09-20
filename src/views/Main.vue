<template>
<div class="main">

<!-- // emitted data sends it up -->
<!-- props and queries send stuff down -->

<!-- send emitted data into navbar as a this.$route.query -->
<Navbar v-bind:user="user" @logout="logout"/>
<!-- <ul>
  <li v-for="message of messages.results" v-bind:key="message.id">{{message.sender}}{{message.message}}</li>
</ul> -->


<div class="Messages-Window">

  <div class="list-view">
<article id="list" class="media" v-for="message of messages.results" v-bind:key="message.id">
  <figure class="media-left">
    <div class="avatar">
        <img id="avatarnav" src="https://image.ibb.co/fa2YRF/dounia.jpg" alt="">
    </div>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{message.sender}}</strong>
        <br>
        {{message.message.substring(0,20)+".." }}
      </p>
    </div>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
</div>

<div class="conversation"></div>

<div class="conversation-view">

<article id="conversation" class="media" v-for="message of messages.results" v-bind:key="message.id">
  <figure class="media-left">
    <div class="avatar">
        <img id="avatarnav" src="https://image.ibb.co/fa2YRF/dounia.jpg" alt="">
    </div>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{message.sender}}</strong>
        <br>
        {{message.message}}
      </p>
    </div>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>

<textarea class="textarea" placeholder="e.g. Hello world"></textarea>


</div>


</div>
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
      users: [],
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

<style>

.Messages-Window {
  display:flex;
  flex-direction:row;
  margin:70px;
}

.conversation-view {
  margin:30px;
  width:700px;
  height:250px;
  overflow-y:auto;
}

#list {
  width:300px;
  text-align:left;
}

#conversation {
  width:400px;
  height:150px;
  margin-right:40px;
  text-align:left;
}
</style>