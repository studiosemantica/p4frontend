<template>

    <b-navbar class="navbar">
        <template slot="brand">
                <b-navbar-item class="icon-div">
                <a class="navbar-item">
                    <svg id="cloud-icon2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cloud" 
                    class="svg-inline--fa fa-cloud fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 200 200">
                    <path fill="white" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 
                    6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 
                    0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z">
                    </path></svg>
                </a>
            </b-navbar-item>

            <div class="avatar">
                <img id="avatarnav" :src="avatar">
                
            </div>
            <b-navbar-item>
               <h1 id="navuser">{{user}}</h1>
            </b-navbar-item>

    
        </template>
        <template slot="start">
        </template>

        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ name: 'UserProfile', query: { URL: this.URL, token: this.token, avatar: this.avatar, user: this.user, profile_id: this.profile_id }}" v-bind:URL="URL" v-bind:token="token" v-bind:avatar="avatar" v-bind:user="user">
               <span class="whiteText">User Profile</span>
            </b-navbar-item>
            <b-navbar-item @click="logout">
                <span class="whiteText">Logout</span>
            </b-navbar-item>
           
        </template>
    </b-navbar>
    
</template>

<script>
 export default {
    name: 'Navbar',
    props: ['user', 'URL', 'token'],
    data: function(){
        return {
        profile_id:null,
        avatar:"",
        result: []
        }
  },
    created: function(){
    fetch(`${this.URL}/cloud_msg/UserProfiles/`, {
        method: 'get',
        headers: {
        authorization: `JWT ${this.token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.result = data.results
        const userProfile = this.result.find(UserProfile => UserProfile.user === this.user)
        console.log("Printing userProfile from navbar",userProfile)
        // this.user = data.results[0].user
        this.avatar = userProfile.avatar
        this.profile_id = userProfile.id
        console.log("result",this.result)
        console.log("user", this.user)
        console.log("avatar", this.avatar)
    })
    },
    methods: {
        logout: function(){
            console.log('from navbar')
            this.$emit("logout")
        },
    }
 }

</script>


<style>

.nav {
    padding-top:20px;
}


.navbar {
    
    background-color:rgb(37, 37, 37);
}

.navbar-item {
    width:120px;
    padding-top:15px;
}

.icon-div {
  padding-bottom:40px;
  width: 80px;
  /* height: 100px; */
  background-color: rgb(221, 86, 36);
  /* animation-name: example;
  animation-duration: 10s; */
}

/* @keyframes example {
  0%   {width: 80px;}
  25%  {width: 95px;}
  50%  {width: 95px;}
  100% {width: 80px;}
} */

.navbar-end {
    text-align:right;
}


.navbar-brand{
      color:rgb(255, 255, 255);
    background-color:rgb(37, 37, 37);
    height:60px;
}

.navbar-menu{
    background-color:rgb(37, 37, 37);
      color:rgb(255, 255, 255);

    text-align:center;
}

#navuser {
    @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
  color:rgb(255, 255, 255);
  font-size:16px;
  margin-left:0px;
  font-family:'Overpass';
  font-weight:700;
  /* margin-top:70px; */
  letter-spacing: 1.25px;
   pointer-events: none;
   cursor: not-allowed;
}

#cloud-icon2 {

    margin-top:-12px;
    margin-left:-2px;
    font-size:16px;
    /* -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%); */
    /* margin-top:20px; */
    width:100px;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
    cursor:none;
    

}


.navbar-item img {
    border-radius: 50%;
    /* border: 2px solid white; */
 }

 .avatar{
     margin-top:5px;
     margin-left:5px;
     width:50px;
     height:50px;

 }

 .img {
     width:50px;
     height:50px;
 }

#avatarnav {
    margin-top:5px;
    margin-left:10px;
    max-height:2.5rem;
    max-width:2.5rem;
    border-radius: 50%;
    /* border: 2px solid white; */
}

.whiteText {
    color:white;
}

.whiteText:hover {
    color:rgb(151, 151, 151);
}

@media only screen and (max-width: 1020px) {
    .whiteText {
    color:rgb(97, 97, 97);
}
}
</style>