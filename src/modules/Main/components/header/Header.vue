<template>
  <div class="content">
      <create-item-button></create-item-button>
      <auth-header></auth-header>
    </div>
    <menu-button></menu-button>
</template>

<script>
import MenuButton from "@/modules/Main/components/header/MenuButton";
import AuthHeader from "@/modules/Auth/components/Header/AuthHeader";
import CreateItemButton from "@/modules/Products/components/header/CreateItemButton";
export default {
  name: "Header",
  components: {CreateItemButton, AuthHeader, MenuButton}
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