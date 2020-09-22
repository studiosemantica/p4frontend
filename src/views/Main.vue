<template>
  <div class="main">
    <!-- // emitted data sends it up -->
    <!-- props and queries send stuff down -->

    <!-- send emitted data into navbar as a this.$route.query -->
    <Navbar v-bind:token="token" v-bind:URL="URL" v-bind:user="user" @logout="logout" />
    <!-- <ul>
  <li v-for="message of messages.results" v-bind:key="message.id">{{message.sender}}{{message.message}}</li>
    </ul>-->

    <div class="Messages-Window">
      
      <div class="list-view">
        <!-- <article id="list" class="media" v-for="message of messages.results" v-bind:key="message.id"> -->
        <article class="list-divs"
          v-for="conversation in Object.keys(conversations)"
          v-bind:key="conversation"
          v-on:click="() => selectUser(conversation)"
        >
          <figure class="media-left">
            <div class="avatar">
              <img id="avatarnav" :src="conversations[conversation][0].sender_avatar" />
            </div>
          </figure>
          <div class="media-content">
            <div class="content">
              <!-- {{message.message.substring(0,20)+".." }} -->
              <!-- <strong>{{message.sender_name}}</strong> -->
              <h3>{{conversation}} :: {{conversations[conversation].length}} messages</h3>
              <br/>
              <p>{{conversations[conversation][0].message.substring(0,20)+".."}}</p>
            </div>
          </div>
          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article>
      </div>

      <div class="conversation-div">

      <div class="conversation-view">
        <article
          id="conversation"
          class="media"
          v-for="message of conversations[selectedConversation]"
          v-bind:key="message.id"
        >
          <figure class="media-left">
            <div class="avatar">
              <img id="avatarnav" :src="message.sender_avatar" />
            </div>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{message.sender_name}}</strong>
                <br />
                {{message.message}}
              </p>
            </div>
          </div>
          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article>
        </div>
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
  components: {
    Navbar
  },
  data: function(){
    return {
      // username:"",
      conversations: [],
      avatar:"",
      messages: [],
      users: [],
     // this would be this.conversations instead
      token: "",
      URL: "",
      selectedConversation: null,
      selectedConversationUser:null, 


    }
  },
  created: function(){
  console.log("from Main.vue:this.$route.query",this.$route.query)
  const {token, URL, username} = this.$route.query
  this.user = username
  this.token = token.token
  this.URL = URL
  this.conversations = {}
  console.log("from Main.vue:this.user,this.token,this.URL:",this.user,this.token,this.URL)
  fetch(`${URL}/cloud_msg/messages/`, {
    method: 'get',
    headers: {
      authorization: `JWT ${token.token}`
    }
  })
  .then(response => response.json())
  .then(data => {
    this.messages = data
    this.messages.results.forEach(message => {
      console.log(message.sender_name)
    if (message.sender_name != this.user) { // messages sent TO user will be categorized by sender_name
        if (this.conversations[message.sender_name]) {
            this.conversations[message.sender_name].push(message)
        } else {
            this.conversations[message.sender_name] = [message]
        }
    } else if (message.receiver_name != this.user) { // messages sent TO anyone else will be categorized by receiver name
        if (this.conversations[message.receiver_name]) {
            this.conversations[message.receiver_name].push(message)
        } else {
            this.conversations[message.receiver_name] = [message]
        }
    } else { // base case: user sends message to self
        if (this.conversations[this.user]) {
            this.conversations[this.user].push(message)
        } else {
            this.conversations[this.user] = [message]
        }
    }
  }) 
  this.selectedConversation = Object.keys(this.conversations)[0]  
  });
    },
   methods: {
    logout: function(){
      this.$emit("logout")
      console.log("logout emission received")
    },
    selectUser: function(conversation){
      this.selectedConversation = conversation
      const message = this.conversations[this.selectedConversation][0]
      if ( message.sender_name == this.selectedConversation){
        this.selectedConversationUser = message.sender
      } else {
        this.selectedConversationUser = message.receiver
      }
    }
}
}

  
</script>

<style>
.Messages-Window {
  display: flex;
  flex-direction: row;
  margin: 70px;
}

#list {
  width: 300px;
  text-align: left;
}

.conversation-div {
  width: 500px;
  height:350px;
  /* margin:0 auto; */
  text-align: left;
}

.conversation-view {
  margin-bottom: 20px;
  width: 500px;
  height: 350px;
  overflow-y: auto;
}

.list-divs {
  background-color: #ffffff;

}

  .list-divs:hover { background-color: #e6e6e6; }

</style>