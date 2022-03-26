<template>
<div class="rooms-container">
  <div class="search-room">
    <search></search>
  </div>
  <div class="rooms-list">
    <rooms-list></rooms-list>
  </div>
  <div class="create-room">
    <create-button></create-button>
  </div>
</div>
</template>

<script>
import Search from "@/modules/Home/components/categories/Search";
import CreateButton from "@/modules/Home/components/categories/CreateButton";
import RoomsList from "@/modules/Home/components/categories/CategoryList";
export default {
  name: "Categories",
  components: {RoomsList, CreateButton, Search}
}
</script>

<style scoped>
.rooms-container{
  display: grid;
  grid-template-areas: "search"
                       "rooms"
                       "create";
  grid-template-columns: 100%;
  grid-template-rows:  15% 1fr 15%;
  background-color: #F5F6F3;
  height: 100%;
}
.search-room{
  grid-area: search;
  max-width: 90%;
  margin: 0 auto;
  display: block;
}
.rooms-list{
  grid-area: rooms;
}
.create-room{
  grid-area: create;
}
</style>