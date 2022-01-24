<template>
<section class="layout">
  <slot/>
</section>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style>
  .layout{
    background-color: aquamarine;
  }
</style>