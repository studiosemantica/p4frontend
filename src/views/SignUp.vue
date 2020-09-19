<template>

<section class="hero is-success is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
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
    </header>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <div>
        <b-field label="Create Username:"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Create Password:"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="123" type="password" maxlength="30"></b-input>
        </b-field>
        </div>
    </div>
  </div>
      
  </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'SignUp',
  components: {
  }
}
</script>