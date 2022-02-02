<template>
  <div class="content">
    <div class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <menu-button></menu-button>
  </div>
</template>

<script>
import MenuButton from "@/modules/Main/components/header/MenuButton";
export default {
  name: "Header",
  components: {MenuButton}
}
</script>

<style scoped>
.content {
  display: flex;
  height: 80px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #AABADD ;
}

</style>