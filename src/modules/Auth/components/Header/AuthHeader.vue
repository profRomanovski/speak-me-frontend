<template>
  <div class="content">
  <router-link to="/login">
  <button class="action-button">Login</button>
  </router-link>
  <router-link to="/register">
  <button class="action-button">Register</button>
  </router-link>
  </div>
</template>

<script>
export default {
  name: "AuthHeader"
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
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 300px;
  align-items: center;
}
</style>