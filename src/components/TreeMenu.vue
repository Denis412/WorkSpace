<template>
  <q-list dense>
    <TreeMenuItem v-for="page in pages" :key="page.id" :page="page" />
  </q-list>
</template>

<script setup>
import TreeMenuItem from "./TreeMenuItem.vue";

const { pages } = defineProps({
  pages: Array,
});

</script>

<style lang="scss">
.hover-item {
  &:hover {
    background-color: lightgray;
  }
}
</style>
