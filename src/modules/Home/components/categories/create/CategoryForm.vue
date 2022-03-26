<template>
  <form v-on:submit.prevent="createCategory">
    <div class="fields">
      <label for="name">Full Collection Name</label>
      <input type="text" id="name" name="name" v-model="name" />
      <input type="file" @change="onFileChanged">
      <button @click="onUpload">Upload!</button>
      <button type="submit">Save</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "CategoryForm",
  components: {
  },
  data(){
    return{
      name: null,
      selectedFile: null,
      image: null
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      const formData = new FormData()
      formData.append('image', this.selectedFile, this.selectedFile.name)
      axios.post('https://speakme.dev/api/upload', formData)
      .then((response) => {
        console.log(response.data)
        this.image = response.data.name
      })
    },
    createCategory(){
      const config = {
        headers: { Authorization: `Bearer 7|E76cWL2X7lDjFGYip7dObSi9KLGXGk03GyzGjjpZ` }
      };
      const body = {
        name: this.name,
        image: this.image
      }
      axios.post('https://speakme.dev/api/category-create', body, config)
      .then((res) => {
        console.log(res.data)
      })
      .catch((res) => {
        console.log('Error '+res)
      })
    }
  }
}
</script>

<style scoped>
form{
  max-width: 300px;
}
.fields{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
input{
  max-width: 95%;
  margin: 0 auto;
  height: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>