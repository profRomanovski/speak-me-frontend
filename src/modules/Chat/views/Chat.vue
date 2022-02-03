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
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  margin-top: 15px;
  width: 100%;
}
</style>