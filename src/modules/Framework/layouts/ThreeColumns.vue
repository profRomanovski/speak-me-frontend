<template>
  <div class="parent">
    <header class="section coral">
      <slot name="header">Header</slot>
    </header>
    <div class="left-side section blue">
      <slot name="left-sidebar">Left Sidebar</slot>
    </div>
    <main class="section green">
      <slot name="content">Main Content</slot>
    </main>
    <div class="right-side section yellow">
      <slot name="right-sidebar">Right Sidebar</slot>
    </div>
    <footer class="section coral">
      <slot name="footer">Footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ThreeColumns"
}
</script>

<style scoped>
.parent {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
}

header {
  padding: 2rem;
  grid-column: 1 / 4;
  background-color: antiquewhite;
}

.left-side {
  grid-column: 1 / 2;
  background-color: lightsalmon;
}

main {
  grid-column: 2 / 3;
}

.right-side {
  grid-column: 3 / 4;
  background-color: lightsalmon;
}

footer {
  grid-column: 1 / 4;
  background-color: bisque;
}
</style>