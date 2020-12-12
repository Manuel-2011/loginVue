<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link
        class="btn btn-success"
        tag="button"
        to="/login">Login</router-link>
    <signup />
  </div>
</template>

<script>
// @ is an alias to /src
import signup from '@/components/auth/signup.vue'

export default {
  name: 'Signup',
  components: {
    signup
  }
}
</script>