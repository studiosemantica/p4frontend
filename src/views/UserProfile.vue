
<template>
<div>
<Navbar v-bind:user="user" @logout="logout"/>

       <div class="userprofile">
 <section>


        <b-field horizontal label="Avatar:">
            <b-input name="avatar" placeholder="enter avatar URL" expanded></b-input>
        </b-field>

        
        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <button class="button is-primary">
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
    props:['URL'],
    data: function() {
      return {
        avatar: "",
        // email: "",
        // password: "",
        
      };
    },
    methods: {
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