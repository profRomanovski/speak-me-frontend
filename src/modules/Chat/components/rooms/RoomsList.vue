<template>
<div class="list">
  <template v-for="room in allRooms" :key="room.id">
    <room-item :room="room"></room-item>
  </template>
</div>
</template>

<script>
import RoomItem from "@/modules/Chat/components/rooms/RoomItem";
import {mapGetters} from "vuex";
export default {
  name: "RoomsList",
  components: {RoomItem},
  computed: {
    ...mapGetters(['allRooms'])
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