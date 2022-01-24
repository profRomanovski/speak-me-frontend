<template>
  <three-columns>
    <template v-slot:header>
      <p>Hello, it is header:)</p>
    </template>
    <template v-slot:content>
      <slot>Default content</slot>
    </template>
  </three-columns>
</template>

<script>

import ThreeColumns from "@/modules/Framework/layouts/ThreeColumns";

export default {
  name: "MainLayout",
  components: {
    ThreeColumns
  }
}
</script>

<style scoped>

</style>