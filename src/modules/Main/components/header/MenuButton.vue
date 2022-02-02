<template>
  <icon size="40px" name="menu" @click="toggleSidebar" class="icon"/>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "MenuButton",
  methods: {
    ...mapActions(['toggleSidebar'])
  },
}
</script>

<style scoped>
@media (orientation: landscape) {
  .icon{
    display: none;
  }
}
.icon{
  cursor: pointer;
}
.icon:active{
  transform: scale(1.1);
}
</style>