<template>
  <div class="chat-container">
    <message-list></message-list>
    <input-message-field></input-message-field>
  </div>
</template>

<script>
import MessageList from "@/modules/Chat/components/MessageList";
import InputMessageField from "@/modules/Chat/components/InputMessageField";
export default {
  name: "Chat.vue",
  components: {InputMessageField, MessageList}
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