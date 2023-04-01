<template>
  <div class="q-pa-lg">
    <div class="text-h3">
    {{ props.title }}
    </div>
    <q-list class="row wrap">
      <q-item class="col-3 column">
        <div class="text-h6 text-bold q-mb-lg" v-if="props.groups?.length">
          Группы
        </div>
        <div class="q-mb-lg" v-for="(group,index) in props.groups" :key="index">
            {{group.name}}
        </div>
      </q-item>
      <q-item class="col-3 column">
        <div class="text-h6 text-bold q-mb-lg" v-if="props.information?.length">
          Общая информация
        </div>
        <div class="q-mb-lg" v-for="(item,index) in props.information" :key="index">
            {{item.name}}
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { route } from 'quasar/wrappers';
import {defineProps} from 'vue';
const props = defineProps({
  title: String,
  groups: Array,
  information:Array,
})
</script>

<style lang="scss" scoped>

</style>
