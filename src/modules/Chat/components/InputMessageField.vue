<template>
<div class="input-message-container">
  <textarea class="input"></textarea>
  <icon class="icon" name="send"></icon>
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
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.input{
  width: 100%;
  height: 50px;
  border: 2px solid #ccc;
  border-radius: 10px;
}
.icon{
  margin-left: 10px;
}
</style>