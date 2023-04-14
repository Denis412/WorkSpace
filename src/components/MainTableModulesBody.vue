<template>
  <!-- <pre>{{ modules }}</pre> -->
  <SortedModules v-if="!groupBy" :sortBy="sortBy" :modules="modules" />

  <GroupedModules :groupBy="groupBy" :modules="modules" />
</template>

<script setup>
import { defineProps } from "vue";
import SortedModules from "./SortedModules.vue";
import GroupedModules from "./GroupedModules.vue";

const { modules, sortBy, groupBy } = defineProps({
  modules: Object,
  sortBy: String,
  groupBy: String,
});
</script>

<style lang="scss" scoped>
.icon-hover {
  &:hover {
    color: $primary;
  }
}
</style>
