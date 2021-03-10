<template>
  <div id="app">
    <div class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/project">Project</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navigation {
  margin: auto;
  /* padding-left: 20px;
  padding-right: 20px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vh;
  height: 7vh;
  background: rgb(111, 174, 197);
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.navigation a {
  text-decoration: none;
  color: white;
}

.router-link-exact-active {
  display: flex;
  align-items: center;
  height: 7vh;
  background: rgb(226, 106, 226);
}
</style>
