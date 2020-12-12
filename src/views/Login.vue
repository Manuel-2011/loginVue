<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <login />
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/auth/login.vue'

export default {
  name: 'Login',
  components: {
    login
  }
}
</script>