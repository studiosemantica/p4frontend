<template>

<section class="hero is-success is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <!-- <header class="navbar"> -->
      <!-- <div class="container"> -->
        <div class="navbar-brand">
          <a class="navbar-item" id="logo-landing">
            <!-- <img src="../assets/cloud.png" alt="Logo"> -->
            <!-- <i class="fas fa-cloud"></i> -->
            <svg id="cloud-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cloud" 
            class="svg-inline--fa fa-cloud fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100">
            <path fill="white" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 
            6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 
            0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z">
            </path></svg>
            <p id="logo-text">CLOUD MSG</p>
            </a>
        </div>
      </div>
    <!-- </header> -->
  <!-- </div> -->

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <div>
        <!-- <b-field label="Username"
            type="is-success"
            message="This username is available">
            <input type="text" v-model="username" value="username" maxlength="30">
        </b-field> -->
        <field class="labels" label="Create Username:">
          <h4>Enter Username:</h4>
            <b-input v-model="username" value="ex. Floating_Point" maxlength="30"></b-input>
        </field>

        <field class="labels" label="Create Password:">
          <h4>Enter Password:</h4>
            <b-input value="123" v-model="password" type="password" maxlength="30"></b-input>
        </field>

        <!-- <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <input type="password" v-model="password" value='123' maxlength="30">
        </b-field> -->
            <button class="button is-danger" @click="handleLogin">Log In</button>
        </div>
    </div>
  </div>
      
  </section>
</template>

<script>
// @ is an alias to /src


export default {
    name: 'Login',
    props:['URL'],
    data: function() {
      return {
        username: "",
        password: "",
        
      };
    },
    methods: {
      handleLogin: function(){
        fetch(this.$route.query.URL+"/auth/users/login/", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body:JSON.stringify({
            username: this.username,
            password: this.password
          }),
        })
   .then (response => {
        if (response.status !== 200) {
          response.json()
        } else {
          return response.json()
        }
      })
      .then(data => {
        console.log('data', data)
        if (data) {
          this.$emit('loggedIn', data)
        } else {
          alert('Incorrect Login')
        }
      })

      }
    
  }
}


</script>
