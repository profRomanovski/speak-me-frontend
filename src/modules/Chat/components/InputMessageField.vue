<template>
<div class="input-message-container">
  <textarea class="input"></textarea>
  <icon class="icon" color="#F5F6F3" name="send"></icon>
</div>
</template>

<script>
import Icon from "@/modules/Framework/components/Icon";
export default {
  name: "InputMessageField",
  components: {Icon}
}
</script>

<style scoped>
.input-message-container{
  grid-area: input-field;
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #F5F6F3;
  margin-right: 10px;
  margin-left: 10px;
}
.input{
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 1px;
  background-color: #F5F6F3;
}
.icon{
  margin-left: 5px;
  padding: 3px;
  background-color: #AABADD;
  border-radius: 4px;
  cursor: pointer;
}
</style>