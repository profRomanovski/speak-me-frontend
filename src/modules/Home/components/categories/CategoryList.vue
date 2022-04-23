<template>
<div class="list">
  <template v-for="room in getCategories" :key="room.id">
    <room-item :category="room"></room-item>
  </template>
</div>
</template>

<script>
import RoomItem from "@/modules/Home/components/categories/CategoryItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CategoryList",
  components: {RoomItem},
  data(){
    return{
      categories: []
    }
  },
  methods:{
    ...mapActions(['loadCategories'])
  },
  computed:{
    ...mapGetters(['getCategories'])
  },
  async mounted(){
    await this.loadCategories()
  },
}
</script>

<style scoped>
.list{
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 456px;
  justify-content: flex-start;
  margin-left: 15px;
  margin-top: 15px;
  overflow-y:scroll;
  overflow-x:hidden;
}
.list::-webkit-scrollbar {
  display: none;
}

.list {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>