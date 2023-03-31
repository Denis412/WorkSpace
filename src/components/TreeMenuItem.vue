<template>
  <q-item class="q-py-none q-pr-none q-pl-md">
    <TreeMenu :nodes="node.nodes" :label="node.label" />
  </q-item>
</template>

<script setup>
import TreeMenu from "./TreeMenu.vue";

const { node, label } = defineProps({
  node: Object,
  label: String,
});
</script>
