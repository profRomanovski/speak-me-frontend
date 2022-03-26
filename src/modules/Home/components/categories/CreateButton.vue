<template>
  <router-link style="text-decoration: none; color: inherit;" to="/create-collection">
    <button>Create</button>
  </router-link>
</template>

<script>
export default {
  name: "Create-button"
}
</script>

<style scoped>
button{
  padding: 5px;
  width: 85%;
  height: 40px;
  margin: 0 auto;
  display: block;
  border: 1px solid #ccc;
  margin-top: 15px;
  cursor: pointer;
  background-color: #AABADD;
  text-decoration:none;
  transition-duration: 0.4s;
}
button:active{
  margin-top: 5px
}
</style>