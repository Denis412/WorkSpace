<template>
  <div class="q-pa-lg">
    <div class="text-h3">
    {{ props.title }}
    </div>
    <q-list class="row wrap">
      <TableItem
      :tableItem="props.groups"
      :name="'Группы'"/>
      <TableItem
      :tableItem="props.information"
      :name="'Общая информация'"/>
    </q-list>
  </div>
</template>

<script setup>
import { route } from 'quasar/wrappers';
import {defineProps} from 'vue';
import TableItem from './SubjectTableItem.vue';
const props = defineProps({
  title: String,
  groups: Array,
  information:Array,
})
</script>

<style lang="scss" scoped>

</style>
