
<template>
<div>
<Navbar v-bind:token="token" v-bind:URL="URL" v-bind:user="user" v-bind:avatar="avatar" @logout="logout"/>

       <div class="userprofile">
 <section>



        <b-field horizontal label="Avatar:">
            <b-input name="avatar" v-model="avatar" placeholder="enter avatar URL" expanded></b-input>
        </b-field>

        
        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <button class="button is-primary" @click="handleUpdate">
                  Update Changes
                </button>
            </p>
        </b-field>

        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <button class="button is-primary">
                  Delete Account
                </button>
            </p>
        </b-field>

        </section>
        </div>

        </div>

</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'UserProfile',
    components: { Navbar } ,
    props:[''],
    data: function() {
      return {
        avatar:"",
        profile_id:null,
        URL:"",
        token:"",
        user: ""
        // email: "",
        // password: "",
        
      };
    },
    created: function() {
    console.log("USERPROFILE-this.$route.query",this.$route.query)
    const {token, URL, avatar, user, profile_id} = this.$route.query
    this.user = user,
    this.token = token,
    this.URL = URL,
    this.avatar = avatar,
    this.profile_id = profile_id
    console.log("USERPROFILE-token,URL,avatar",token, URL, avatar)
    },
    methods: {
    handleUpdate: function(){

    fetch(`${this.URL}/cloud_msg/UserProfiles/${this.profile_id}/`, {
        method: 'put',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            authorization: `JWT ${this.token}`
          },
        body: JSON.stringify({avatar:this.avatar})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // this.result = data.results[0]
        // this.user = data.results[0].user
        // this.avatar = data.results[0].avatar
        console.log("result",this.result)
        console.log("user", this.user)
        console.log("avatar", this.avatar)
    })
    },
    logout: function(){
      this.$emit("logout")
      console.log("logout received")
    },
    }
//     methods: {
//       handleSignup: function(){
//         fetch(this.$route.query.URL+"/auth/users/register/", {
//           method: 'post',
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body:JSON.stringify({
//             username: this.username,
//             email: this.email,
//             password: this.password
//           }),
//         })
//    .then (response => {
//         if (response.status !== 201) {
//           response.json()
//           console.log(response)
//         } else {
//           alert('Account created! You may now login!')
//           return response.json()
          
//         }
//       })
//       .then(data => {
//         console.log('data', data)
//         if (data) {
//           this.$emit('SignedUp', data)
//         } else {
//           alert('Incorrect Login')
//         }
//       })

//       }
    
//   }
}
</script>

<style>

.userprofile {
    width:400px;
    margin: 20px auto;
}

</style>