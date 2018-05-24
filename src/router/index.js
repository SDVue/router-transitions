import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Posts from "@/components/Posts";
import PostsList from "@/components/PostsList";
import Post from "@/components/Post";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/posts",
      component: Posts,
      children: [
        {
          path: "",
          name: "Posts",
          component: PostsList
        },
        {
          path: ":id",
          name: "Post",
          component: Post,
          props: true
        }
      ]
    }
  ]
});
