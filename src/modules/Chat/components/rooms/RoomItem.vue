<template>
<div class="item">
  <div class="numberCircle" :style="{'background': this.color}">{{char}}</div>
  <div class="name">{{ room.name }}</div>
</div>
</template>

<script>
export default {
  name: "RoomItem",
  data(){
    return {
      color: this.getRandomColor(),
    }
  },
  methods:{
    getRandomColor(){
      return  "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
  },
  props:{
    room: Object
  },
  computed:{
    char: function (){
      return this.room.name.charAt(0)
    }
  }
}
</script>

<style scoped>
.item{
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 5px;
}
.numberCircle {
  border-radius: 50%;
  min-width: 36px;
  min-height: 36px;
  padding: 8px;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 32px Arial, sans-serif;
}
.name{
  margin-left: 15px;
  font: 24px Arial, sans-serif;
}
</style>