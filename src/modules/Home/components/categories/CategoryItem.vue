<template>
<div class="item" v-on:click="categoryClick">
  <div class="numberCircle" :style="{ 'background-image': `url('${hostname+'/'+category.image}`}"></div>
  <div class="name">{{ category.name }}</div>
</div>
</template>

<script>
import config from "@/config";
import {mapMutations, mapActions} from 'vuex';
export default {
  name: "CategoryItem",
  data(){
    return {
      hostname: config.hostname
    }
  },
  methods: {
    ...mapActions(['loadProducts']),
    ...mapMutations(['setCategoryAuthorId', 'setCurrentCategoryId']),
    categoryClick(){
      console.log('cat id'+ this.category.id)
      this.setCategoryAuthorId(this.category.user_id)
      this.setCurrentCategoryId(this.category.id)
      this.loadProducts(this.category.id)
    },
  },
  props:{
    category: Object
  }
}
</script>

<style scoped>
.item{
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 5px;
}
.numberCircle {
  border-radius: 50%;
  min-width: 36px;
  min-height: 36px;
  padding: 8px;
  border: 2px solid #666;
  color: #666;
  text-align: center;
  background-size: 200%;
  background-position: center;
  font: 32px Arial, sans-serif;
}
.name{
  margin-left: 15px;
  font: 24px Arial, sans-serif;
}
</style>