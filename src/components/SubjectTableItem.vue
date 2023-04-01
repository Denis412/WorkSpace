<template>
<q-item class="col-3 column">
        <div class="text-h6 text-bold q-mb-lg" v-if="props.tableItem?.length">
          {{ props.name }}
        </div>
        <div class="q-mb-lg" v-for="(item,index) in props.tableItem" :key="index">
            {{item.name}}
        </div>
      </q-item>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tableItem:Array,
  name:String
})

</script>

<style lang="scss" scoped>

</style>
