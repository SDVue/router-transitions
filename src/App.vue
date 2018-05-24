<template>
  <div id="app">
    <nav>
      <ul class="nav">
        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link :to="postsLink">Posts</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    postsLink: "/posts"
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding-left: 0;
  list-style-type: none;
}

li {
  margin: 10px;
}

a {
  color: #42b983;
}

.router-link-active {
  font-weight: 700;
}

.router-link-exact-active {
  color: #f012be;
}
</style>
