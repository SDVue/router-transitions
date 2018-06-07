<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <div class="prev-next">
      <router-link v-if="prev" :to="prev">Prev</router-link>
      <router-link v-if="next" :to="next">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      post: null
    };
  },

  computed: {
    prev() {
      let prev = {
        name: "Post",
        params: { id: +this.id - 1 }
      };
      return prev.params.id > 0 ? prev : false;
    },

    next() {
      let next = {
        name: "Post",
        params: { id: +this.id + 1 }
      };
      return next.params.id < 10 ? next : false;
    }
  },

  methods: {
    async getData() {
      try {
        this.post = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.id}`
        ).then(res => res.json());
      } catch (err) {
        console.error(err.message);
      }
    }
  },

  created() {
    console.log(this.$route);
    this.getData();
  },

  watch: {
    id: "getData"
  }
};
</script>

<style>
.prev-next {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  grid-column-gap: 50px;
}
</style>
