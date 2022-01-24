<template>
<div class="main">
  <div class="logo">
    <slot name="logo">Logo</slot>
  </div>
  <div class="header">
    <slot name="header">Header</slot>
  </div>
  <div class="content">
    <slot name="content">Content</slot>
  </div>
  <div class="sidebar">
    <slot name="sidebar">Sidebar</slot>
  </div>
</div>
</template>

<script>
export default {
  name: "TwoColumnsRight"
}
</script>

<style>
@media (orientation: landscape) {
  .main {
    display: grid;
    grid-template-areas: "logo header"
                       "sidebar content";
    grid-template-columns: 15% 1fr;
    grid-template-rows: auto 1fr;
  }

  .header {
    grid-area: header;
  }

  .content {
    grid-area: content;
  }

  .sidebar {
    grid-area: sidebar;
  }
}
@media (orientation: portrait) {
  .main {
    display: grid;
    grid-template-areas: "logo header"
                       "content content";
    grid-template-columns: 25% 1fr;
    grid-template-rows: auto 1fr;
  }

  .header {
    grid-area: header;
  }

  .content {
    grid-area: content;
  }
  .sidebar{
    display: none;
  }
}
</style>