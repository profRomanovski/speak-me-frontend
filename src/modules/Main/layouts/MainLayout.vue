<template>
  <two-columns-right>
    <template v-slot:header>
      <Header></Header>
    </template>
    <template v-slot:logo>
      <logo></logo>
    </template>
    <template v-slot:content>
      <button  @click="isOpen=true">Open Menu1</button>
      <Slide :isOpen="isOpen" :burgerIcon="false" noOverlay :closeOnNavigation="true"  @closeMenu="isOpen = false">
        <p>Hello</p>
      </Slide>
      <slot>Default content</slot>
    </template>
    <template v-slot:sidebar>
      <p>Hello, it is sidebar:)</p>
    </template>
  </two-columns-right>
</template>

<script>

import TwoColumnsRight from "../../Framework/layouts/TwoColumnsRight";
import Header from "../components/header/Header";
import Logo from "../components/header/Logo";
import {Slide} from "vue3-burger-menu";

export default {
  name: "MainLayout",
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    TwoColumnsRight,
    Header,
    Slide,
    Logo,
  }
}
</script>

<style scoped>

</style>