<template>
  <div class="create-category-container">
    <h1>Create a new collection</h1>
    <category-form>
    </category-form>
  </div>
</template>

<script>
import CategoryForm from "@/modules/Home/components/categories/create/CategoryForm";
export default {
  name: "CreateCategory",
  components: {CategoryForm}
}
</script>

<style scoped>
.create-category-container{
  text-align: center;
}
</style>