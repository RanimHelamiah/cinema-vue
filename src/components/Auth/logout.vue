<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods:mapActions('auth',['destroyToken']),
  created() {
    this.destroyToken()
      .then(response => {
          console.log(response)
          this.$router.replace({ name: 'login' })
      })
      .catch(error => {
        console.log(error)

      })
  }
}
</script>

