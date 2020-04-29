<template>
  <div class="login">
    <h1>Log in</h1>
    <div v-if="error">{{error}}</div>
    <form @submit.prevent="login">
      <label>Email</label>
      <input type="email" v-model="email" placeholder="email@email.com">
      <label>Password</label>
      <input type="password" v-model="password" placeholder="Password">
      <button>Log in</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push('/'))
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>
<style scoped>
form {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
}
form label {
  text-align: left;
  margin: 15px 0 5px;
}
form input {
  padding: 10px;
  outline: none;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
}
form button {
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 25px 0;
  background-color: #d2d86e;
  transition: 1s;
}
form button:hover {
  background-color: #5c5e46;
  color: #fff;
}
@media screen and (max-width: 850px) {
  form {
    width: 80%;
  }
}
</style>
