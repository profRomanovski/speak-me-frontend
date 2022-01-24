<template>
<div class="logo">
  <span>SpeakMe</span>
</div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style scoped>
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #9CAFD7;
}
@media (orientation: portrait) {
  span {
    font-size: 5vw;
  }
}
@media (orientation: landscape) {
  span {
    font-size: 3vw;
  }
}
</style>