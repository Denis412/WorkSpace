<template>
  <q-list>
    <TreeMenuItem v-for="node in nodes" :key="node.id" :node="node" />
  </q-list>
</template>

<script setup>
import TreeMenuItem from "./TreeMenuItem.vue";

const { nodes, depht, label } = defineProps({
  nodes: Array,
  depht: Number,
  label: String,
});
</script>
