<template>
  <tbody>
    <tr v-for="module in SortModules(modules.property4,sortBy)" :key="module.id">
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
  </tbody>
</template>

<script setup>
import { defineProps } from "vue";
import sortApi from "src/utils/sort.js";
import ModuleAction from "src/components/ModuleAction.vue";


const { modules, sortBy } = defineProps({
  modules: Object,
  sortBy: String
});

const SortModules = (modules,sortBy)=>{

if(sortBy==='Сначала новые')
  return sortApi.sortDESCByCreate( modules );
else if(sortBy==='Сначала старые')
  return sortApi.sortASCByCreate( modules );
else if(sortBy === 'По названию')
  return sortApi.sortByModuleName( modules );
else
  return modules;

}

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

</style>
