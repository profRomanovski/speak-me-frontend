<template>
  <div class="home-container">
    <product-list></product-list>
  </div>
</template>

<script>

import ProductList from "@/modules/Products/components/list/productList";
export default {
  name: "Home.vue",
  components: {ProductList},
}
</script>

<style scoped>
.chat-container{
  display: grid;
  grid-template-areas: "message-list"
                       "input-field";
  grid-template-columns: 1fr;
  grid-template-rows:  1fr 15%;
  overflow: hidden;
  background-color: #DCDCDC;
}
</style>