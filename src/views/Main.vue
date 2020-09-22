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
        <p id="messages_title">Messages</p>
        <!-- <article id="list" class="media" v-for="message of messages.results" v-bind:key="message.id"> -->
        <article class="list-divs"
          v-for="conversation in Object.keys(conversations)"
          v-bind:key="conversation"
          v-on:click="() => selectUser(conversation)"
        >
          <figure class="media-left">
            <div class="avatar-left">
              <img id="avatarnav" :src="conversations[conversation][0].sender_avatar" />
            </div>
        
          </figure>
          <div class="media-content">
            <div id="list-content" class="content">
              <strong>{{conversation}}
                     <!-- <br/>  -->
               <!-- {{conversations[conversation].length}} messages -->
               </strong>
              <br/>
             <span class="previewText">{{conversations[conversation][0].message.substring(0,80)+"..."}}</span> 
            </div>
          </div>
          <div class="media-right">
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
        <br>
        <p id="new_message_title">Compose New</p>

       
  <select class="form-control" v-model="selectedReceiverID" @change="selectReceiver($event)">
    <option value="" selected disabled>Select recipient:</option>
    <option v-for="user in users" :value="user.id" :key="user.id">{{ user.username }}</option>
  </select>
  <br><br>
  <p><span>Send to: {{ selectedReceiver }}</span></p>
  

        <textarea class="textarea" v-model="message" v-on:keyup="keymonitor" placeholder="e.g. Hello world"></textarea>
      
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
      selectedReceiver: null,
      message:"",
      selectedReceiverID: null,
       


    }
  },
  created: function() {
    this.showMessages()
  },
  methods: {
    showMessages: function() {
  console.log("from Main.vue:this.$route.query",this.$route.query)
  const {token, URL, username} = this.$route.query
  this.user = username
  this.token = token.token
  this.URL = URL
  this.conversations = {}
  console.log("from Main.vue:this.user,this.token,this.URL:",this.user,this.token,this.URL)
  fetch(`${URL}/auth/users/`, {
    method: 'get',
    headers: {
      authorization: `JWT ${token.token}`
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("USERS",data)
    this.users = data.results
    console.log(this.users)
  })
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
     keymonitor: function(event) {
      console.log(event.key);
      if(event.key == "Enter")
      { this.sendMessage() }
    },
    sendMessage: function() {
      fetch(`${this.URL}/cloud_msg/messages/`, {
      method: 'post',
      headers: {
        authorization: `JWT ${this.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body:JSON.stringify({
        receiver: this.selectedReceiverID,
        message: this.message,
        }),
      })
      .then(response => response.json())
      .then(data => {
      console.log("SEND MESSAGE RESPONSE:",data)
      this.showMessages()
      this.message = ""
      this.selectedConversation = this.selectedReceiver
      })
    },
    selectReceiver (event) {
      this.selectedReceiver = event.target.options[event.target.options.selectedIndex].text
    },
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
    },
}}
</script>

<style>

.Messages-Window {
  display: flex;
  flex-direction: row;
  margin: 80px;
}

.textarea {
  margin-bottom:70px;
}

@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
#messages_title {
  color:rgb(0, 0, 0);
  font-size:30px;
  font-family:'Overpass';
  font-weight:800;
  margin-top:0px;
  margin-bottom:30px;
  letter-spacing: .2px;
}

@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
#new_message_title {
  color:rgb(0, 0, 0);
  font-size:20px;
  font-family:'Overpass';
  font-weight:800;
  padding: 40px 0px 0px 0px;
  margin-top:-25px;
  border-top:grey 1px solid;
  margin-bottom:10px;
  letter-spacing: .2px;
}



@media only screen and (max-width: 375px) {

.Messages-Window {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

.conversation-div {
  width: 350px;
  height:350px;
  margin:20px 0px 20px 0px;
  padding:30px 0px 30px 0px;
  text-align: left;
  border-top:1px solid grey;
  
}

.conversation-view{
  height:300px;
overflow-y:auto
}


#conversation {
  padding-bottom:60px;
  padding-top:20px;
}

.textarea {
  width:300px;
  margin:0 auto;
  margin-bottom:70px;
}

#list-content {
  width: 300px;
  margin:0px 50px 0px 50px;
  padding-right:50px;
}

.avatar-left {
  width: 300px;
  margin:0px auto;
  /* padding-left:50px; */
}
}

/* .media-left {
  width: 300px;
  margin:0px auto;


}


.list-divs { background-color: #ffffff;
  width: 250px;
  height:45px;
  margin:50px auto;
  /* text-align: left;    */


/* .conversation-view {
  width: 350px;
  height: 350px;
  margin:20px auto;
  overflow-y: auto;
} */ 




@media only screen and (min-width: 875px) {

.conversation-div {
  width: 380px;
  height:350px;
  margin-top:70px;
  text-align: left;
}

.conversation-view {
  width: 380px;
  height: 350px;
  margin:20px;
  overflow-y: auto;
}




.conversation-media {
  width: 380px;
  margin:40px;
  overflow-y: auto;
}

#list-content {
  padding:10px;
}

}


.list-divs { background-color: #ffffff;
  width: 400px;
  margin-left:30px;
  /* text-align: left;    */
}

.list-divs:hover { 
background-color: rgb(230, 230, 230);
margin-left:27px;
border-left: 3px solid rgb(216, 115, 0);
animation-name: example;
animation-duration:.7s;
}

@keyframes example {
  0%   {background-color: #ffffff;}
  100%  {background-color: rgb(230, 230, 230);}
}

.avatar-left {
  margin-top:5px;
}

.delete {
  margin-right:20px;
  margin-top:18px;
}


.previewText {
  font-size:12px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>