<template>
  <div class="cards-list">
    <template v-for="product in getProducts" :key="product.id">
      <product-item :product="product"></product-item>
    </template>
  </div>
</template>

<script>
import ProductItem from "@/modules/Products/components/list/productItem";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "productList",
  components: {ProductItem},
  methods:{
    ...mapActions(['loadProducts'])
  },
  computed:{
    ...mapGetters(['getProducts'])
  },
  async mounted(){
    await this.loadProducts()
  },

}
</script>

<style scoped>
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>