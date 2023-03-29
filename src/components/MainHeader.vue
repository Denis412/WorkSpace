<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title>{{ title }}</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
const { toggleLeftDrawer, title } = defineProps({
  toggleLeftDrawer: Function,
  title: String,
});
</script>
