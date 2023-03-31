<template>
  <q-list class="w-100p">
    <q-item-section class="cursor-pointer hover-item rounded-borders q-pa-sm">
      <div>
        {{ label }}
      </div>
    </q-item-section>

    <q-item-section class="w-100p">
      <TreeMenuItem
        v-for="node in nodes"
        :key="node.id"
        :node="node"
        :label="node.label"
      />
    </q-item-section>
  </q-list>
</template>

<script setup>
import { onMounted } from "vue";
import TreeMenuItem from "./TreeMenuItem.vue";

const { nodes, label } = defineProps({
  nodes: Array,
  label: String,
});

onMounted(() => {
  console.log(nodes);
});
</script>

<style lang="scss">
.hover-item {
  &:hover {
    background-color: grey;
  }
}
</style>
