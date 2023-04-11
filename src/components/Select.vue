<template>
  <q-select
      filled
      v-model="changeBy"
      :options="options"
      use-chips
      stack-label
      label="Группировка"
      @update:model-value="change"

    />
</template>

<script setup>
import { defineEmits,defineProps,ref } from "vue";

const emit = defineEmits(["change"]);
const { options, changeValue } = defineProps({
  options:Array,
  changeValue:String
})

const changeBy = ref(changeValue);

const change =()=>{
  emit("change",changeBy.value)
}

</script>

<style lang="scss" scoped>

</style>
