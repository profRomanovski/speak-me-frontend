<template>
  <div class="content">
    <div class="button-header">
      <router-link to="/login">
        <button class="action-button">Login</button>
      </router-link>
    </div>
    <div class="button-header">
      <router-link to="/register">
  <button class="action-button">Register</button>
  </router-link>
    </div>
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
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
}
</style>