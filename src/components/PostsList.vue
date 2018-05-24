<template>
  <div>
    <h1>Checkout these babies!</h1>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <router-link :to="{ name: 'Post', params: { id: post.id }}">Check it!</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },

  async created() {
    try {
      this.posts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then(res => res.json());
    } catch (err) {
      console.error(err.message);
    }
  }
};
</script>

<style>
</style>
