<template>
  <div id="app">
    <div id="nav">
      <span v-if="displayMenu">
        <router-link to="/home">Home</router-link>
        <button @click="logout" class="logout-button">Log out</button>
      </span>
      <span v-else>
        <router-link to="/">Log In</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  computed: {
    displayMenu() {
      return this.$route.path !== '/login' && this.$route.path !== '/signup';
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  box-shadow: 0 0 6px 2px #d2d86e;
}

#nav a {
  padding: 0 10px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #d2d86e;
}
.logout-button {
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 0 15px;
  background-color: #d2d86e;
  transition: 1s;
}
.logout-button:hover {
  background-color: #5c5e46;
  color: #fff;
}
</style>
