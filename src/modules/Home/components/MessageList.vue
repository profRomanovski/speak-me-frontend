<template>
  <div class="message-list">
    <template v-for="message in allMessages" :key="message.id">
      <list-item :message="message"></list-item>
    </template>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ListItem from "@/modules/Home/components/ListItem";

export default {
  name: "MessageList",
  components: {ListItem},
  computed: {
    ...mapGetters(['allMessages'])
  },
}
</script>

<style scoped>
.message-list {
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  overflow-y:scroll;
  overflow-x:hidden;
  grid-area: message-list;
  height: 525px;
  margin-top: 10px;
}
.message-list::-webkit-scrollbar {
  display: none;
}

.message-list {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

</style>