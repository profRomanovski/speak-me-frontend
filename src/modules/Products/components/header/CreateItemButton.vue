<template>
  <router-link to="/create-product">
  <button v-show="isUserIsAuthor" class="action-button">Create item</button>
  </router-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CreateItemButton",
  methods:{
    ...mapGetters(['getCategoryAuthorId', 'getUserId'])
  },
  computed: {
    isUserIsAuthor(){
      return this.getCategoryAuthorId() === this.getUserId()
    }
  }
}
</script>

<style scoped>
.action-button {
  font: inherit;
  font-size: 1.25rem;
  padding: 0.6em;
  width: 100%;
  font-weight: 500;
  background-color: #6658d3;
  border-radius: 6px;
  color: #fff;
  border: 0;
}
</style>