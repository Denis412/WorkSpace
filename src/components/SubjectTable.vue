<template>
  <div class="q-pa-lg">
    <div class="text-h3">
    {{ props.title }}
    </div>
  </div>
</template>

<script setup>
import { route } from 'quasar/wrappers';
import {defineProps} from 'vue';
const props = defineProps({
  title: String,
})
</script>

<style lang="scss" scoped>

</style>
