<template>
  <div id="app">      
    <div id="nav">
       <!-- <router-link to="/Page2">Page2</router-link>
       <router-link to="/Home">Home</router-link>
       <router-link to="/Login">Login</router-link> -->
       <router-view @loggedIn="login($event)"/>
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
      console.log("event heard")
      this.loggedIn = true
      this.tokens = event
      this.$router.push('/main')
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
