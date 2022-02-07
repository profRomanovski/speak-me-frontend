<template>
  <template v-if="message.userId === 11">
    <div class="message-item">
      <span>{{message.body}}</span>
    </div>
  </template>
  <template v-else>
    <div class="message-item non-user">
      <span>{{message.body}}</span>
    </div>
  </template>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    message: Object
  }
}
</script>

<style scoped>
.message-item{
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-right: 10px;
  margin-left: 10px;
  box-sizing: border-box;
  max-width: 100%;
  background-color: #C4CCDE;
}
.non-user{
  align-self: end;
  background-color: #F5F6F3;
}
</style>