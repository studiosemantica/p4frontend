<template>
  <div id="app">      
    <div id="nav">
       <!-- <router-link to="/Page2">Page2</router-link>
       <router-link to="/Home">Home</router-link>
       <router-link to="/Login">Login</router-link> -->
       <router-view @loggedIn="login($event)" @logout="logout"/>
    </div>
      <Footer/>
  </div>
      
</template>

<script>

import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
  },
  data:function(){
    return {
      loggedIn: false,
      tokens: {},
      URL:'http://localhost:8000',
    }
  },
  methods: {
    login: function(event){
      console.log("event heard"),
      console.log("EVENT",event),
      this.loggedIn = true,
      this.tokens = event,
      // make a push.query below to send info to main
        this.$router.push({
        path: "Main",
        query: { token: event, URL: this.URL, username:event.username },
      });
      
    },
      logout: function(){
      console.log("logout!!"),
      this.loggedIn = false,
      this.tokens = {},
      this.$router.push('/')
    }
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}


</style>
