<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { loginService } from '../services/login.service';
import store from '../store';

@Component
export default class Login extends Vue {

  public login() {
    store.dispatch('setLoginStatus', { isLogged: true });
    this.$router.replace({ name: 'contacts' });
  }
}
</script>
