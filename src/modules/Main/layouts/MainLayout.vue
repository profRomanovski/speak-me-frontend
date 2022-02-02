<template>
  <two-columns-right>
    <template v-slot:header>
      <Header></Header>
    </template>
    <template v-slot:logo>
      <logo></logo>
    </template>
    <template v-slot:content>
      <slide>something</slide>
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
import {mapActions, mapGetters} from "vuex";
import Slide from "@/modules/Main/components/Slide";

export default {
  name: "MainLayout",
  components: {
    TwoColumnsRight,
    Header,
    Logo,
    Slide
  },
  computed: {
    ...mapGetters(['isSidebarOpen'])
  },
  methods: {
    ...mapActions(['toggleSidebar']),
  },
}
</script>

<style>

</style>