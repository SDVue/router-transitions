<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null
    };
  },

  async created() {
    try {
      this.post = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      ).then(res => res.json());
    } catch (err) {
      console.error(err.message);
    }
  }
};
</script>

<style>
</style>
