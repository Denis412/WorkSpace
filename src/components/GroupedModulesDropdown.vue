<template>
  <q-btn
  class="btn-position absolute"
  round
  flat
  icon="chevron_right"
  :class="{rotate: dropdown}"
  @click="dropdown=!dropdown"/>

  <tr v-show="dropdown" v-for="module in group" :key="module.id">
        <td class="q-pa-md text-center">
        {{ module.name }}
      </td>

      <td class="q-pa-md text-center">
        C {{ module.property5.date }} {{ module.property5.time }}
      </td>

      <td class="q-pa-md text-center">
        До {{ module.property6.date }} {{ module.property6.time }}
      </td>

      <td class="q-pa-md text-center">
        <div>Назначены: {{ reduceTasks(module.property7, 0) }}</div>
        <div>Выполнены: {{ reduceTasks(module.property7, 1) }}</div>
        <div>Завершены: {{ reduceTasks(module.property7, 2) }}</div>
      </td>

      <td class="flex justify-center items-center">
        <ModuleAction :module="module" />
        <ModuleAction :moduleDelete="module" />
      </td>
      </tr>
</template>

<script setup>
import ModuleAction from "src/components/ModuleAction.vue";
import { defineProps, ref } from "vue";

const { group } = defineProps({
  group:Array,
})

const dropdown = ref(false);

const reduceTasks = (tasks, status) => {
  if (!tasks.length) return 0;

  const checkedStatus =
    status === 0
      ? process.env.APPOINTED_ID
      : status === 1
        ? process.env.COMPLETED_ID
        : process.env.FINISHED_ID;

  return tasks.reduce(
    (sum, task) => (task.property3 === checkedStatus ? sum + 1 : sum + 0),
    0
  );
};

</script>

<style lang="scss" scoped>
.rotate{
  transform: rotate(90deg);
}

.btn-position{
  top: 0;
  right: 0;
}
</style>
