<template>
  <q-item class="q-pa-none column">
    <q-item-section class="cursor-pointer hover-item rounded-borders q-pa-sm">
      {{ page.title }}
    </q-item-section>

    <q-item-section class="ml-md" v-if="page?.children?.data.length">
      <TreeMenu :pages="page?.children?.data" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import TreeMenu from "./TreeMenu.vue";

const { page } = defineProps({
  page: Object,
});
</script>
