<template>
  <div class="home">
    <PostForm/>
    <h1>{{postCount}}</h1>
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import PostForm from "@/modules/Posts/components/PostForm";

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['allPosts', 'postCount'])
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  components:{
    PostForm
  },
  async mounted(){
    await this.fetchPosts(6)
  }
}
</script>
<style>
.post{
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.home{
  padding-left: 20px;
  padding-right: 20px;
}
</style>