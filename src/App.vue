<template>
  <div id="app">      
    <div id="nav">
       <router-view @loggedIn="login($event)" @logout="logout" @SignedUp="signUp"/>
    </div>
      <!-- <Footer/> -->
  </div>
      
</template>

<script>

// import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    // Footer,
  },
  data:function(){
    return {
      loggedIn: false,
      signedUp: false,
      tokens: {},
      URL:'https://p4-app.herokuapp.com',
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
    },
      signUp: function(){
      this.signedUp = true,
      console.log("signup event heard"),
      // make a push.query below to send info to main
        this.$router.push({
        path: "/"
      });
    },
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}


</style>
