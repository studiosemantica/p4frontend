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
            
            <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> -->
          </a>
          <span class="navbar-burger burger" id="burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
         
        </div>
   
      </div>
    </header>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
        
    <div class="container has-text-centered">
      <h1 id="title">
        Connect with artists worldwide.
      </h1>
        <div class="buttons">
            <b-button tag="router-link" to="/SignUp" type="is-primary" v-bind:URL="URL" expanded>Create an Account</b-button>
        </div>

        <div class="buttons">
            <b-button tag="router-link" to="/Login" type="is-primary" expanded>I already have an account</b-button>
        </div>
        
    </div>
  </div>

</section>
</template> 

<script>

export default {
  name: "Header",
  components: {
  }
}

   


</script>

<style>

#logo-landing {
    display:flex;
    flex-direction:column;
    position: absolute;
    height: 100px;
    width: 150px;
    left: 50%;
    top: 120%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}

@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
#logo-text {
  color:white;
  font-size:18px;
  font-family:'Overpass';
  font-weight:900;
  margin-top:70px;
  letter-spacing: 1.25px;
}

#cloud-icon {
    font-size:18px;
    /* -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%); */
    margin-top:20px;
    width:97px;
    transform: translateX(-50%) translateY(-50%);
}

#title {
  font-size:25px;
  margin:160px -30px 0px -30px;

}

.header {
    width: 90%;
    margin: 0;
}

.hero {
  background-image: url("../assets/Nightclub-Photography-4.jpg");
  /* background-repeat: no-repeat; */
  background-size: cover;
    /* background-size: 200%; */
  /* background-position: left; */
  /* padding:0px 0px 0px 0px; */
  /* margin:-30px; */
  /* float: left; */
  /* object-fit: none;
  object-position: 110% 120%;   */
  height: 710px;
  /* object-fit: none; */
  background-position: -440px 0px;
}

#burger {
  
width:150px;
 height:30 rem;

}



</style>
