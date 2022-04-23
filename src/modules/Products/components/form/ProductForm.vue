<template>
  <form class="card-form" v-on:submit.prevent="createNewProduct">
    <div class="input">
      <input v-model="name" type="text" class="input-field" required/>
      <label class="input-label">Product name</label>
    </div>
    <div class="input">
      <image-uploader @uploaded="setImage"></image-uploader>
    </div>
    <div class="action">
      <button class="action-button">Create</button>
    </div>
  </form>
</template>

<script>
import ImageUploader from "@/modules/Home/components/categories/create/ImageUploader";
import router from "@/modules/Framework/router";
import {mapActions} from "vuex";

export default {
  name: "ProductForm",
  components: {
    ImageUploader
  },
  data(){
    return{
      name: null,
      selectedFile: null,
      image: null
    };
  },
  methods: {
    ...mapActions(['createProduct']),
    setImage(image){
      this.image = image
    },
    createNewProduct(){

      this.createProduct({'name': this.name, 'image': this.image})
          .then((res) => {
            console.log(res.data)
            router.push("/")
          })
          .catch((err) => {
            console.log(err.message)
          })
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
  background-color: #f1f3fb;
  padding: 0 2rem;
}

img {
  max-width: 100%;
  display: block;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

.card-heading small {
  display: block;
  font-size: 0.75em;
  font-weight: 400;
  margin-top: 0.25em;
}

.card-form {
  padding: 2rem 1rem 0;
}

.input {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
}
.input + .input {
  margin-top: 1.5rem;
}

.input-label {
  color: #8597a3;
  position: absolute;
  top: 1.5rem;
  transition: 0.25s ease;
}

.input-field {
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
}
.input-field:focus, .input-field:valid {
  outline: 0;
  border-bottom-color: #6658d3;
}
.input-field:focus + .input-label, .input-field:valid + .input-label {
  color: #6658d3;
  transform: translateY(-1.5rem);
}

.action {
  margin-top: 2rem;
}

.action-button {
  font: inherit;
  font-size: 1.25rem;
  padding: 1em;
  width: 100%;
  font-weight: 500;
  background-color: #6658d3;
  border-radius: 6px;
  color: #fff;
  border: 0;
}
.action-button:focus {
  outline: 0;
}

.card-info a {
  display: block;
  color: #6658d3;
  text-decoration: none;
}
.error{
  text-align: center;
  margin-top: 5px;
  color: #910938;
}
</style>