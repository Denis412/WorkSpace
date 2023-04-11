<template>
  <q-select
      class="col-sm-3 col-6"
      outlined
      rounded
      v-model="changeBy"
      :options="options"
      use-chips
      stack-label
      :label="label"
      @update:model-value="change"
  >
    <template v-slot:prepend>
        <q-icon :name="icon" />
    </template>
  </q-select>
</template>

<script setup>
import { defineEmits,defineProps,ref } from "vue";

const emit = defineEmits(["change"]);
const { options, changeValue, label, icon } = defineProps({
  options:Array,
  changeValue:String,
  label: String,
  icon: String
})

const changeBy = ref(changeValue);

const change =()=>{
  emit("change",changeBy.value)
}

</script>

<style lang="scss" scoped>

</style>
