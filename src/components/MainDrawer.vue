<template>
  <q-drawer :side="side" show-if-above bordered>
    <header class="text-h5 text-center">{{ title }}</header>

    <slot name="list">Пусто!</slot>
  </q-drawer>
</template>

<script setup>
const { side, title } = defineProps({
  side: String,
  title: String,
});
</script>
