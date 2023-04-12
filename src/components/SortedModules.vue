<template>
  <tbody>
    <tr v-for="module in SortModules(sortBy)" :key="module.id">
      <td class="q-pa-md text-center">
        {{ module.name }}
      </td>

      <td class="q-pa-md text-center">
        C {{ module.startdate.date }} {{ module.startdate.time }}
      </td>

      <td class="q-pa-md text-center">
        До {{ module.expirationdate.date }} {{ module.expirationdate.time }}
      </td>

      <td class="q-pa-md text-center">
        <div>Назначены: {{ reduceTasks(module.tasks, 0) }}</div>
        <div>Выполнены: {{ reduceTasks(module.tasks, 1) }}</div>
        <div>Завершены: {{ reduceTasks(module.tasks, 2) }}</div>
      </td>

      <td v-if="isOwner" class="flex justify-center items-center">
        <ModuleAction :module="module" />
        <ModuleAction :moduleDelete="module" />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { computed, inject } from "vue";
import sortApi from "src/utils/sort.js";
import ModuleAction from "src/components/ModuleAction.vue";

const { modules, sortBy } = defineProps({
  modules: Object,
  sortBy: String,
});

const filteredModules = computed(() =>
  modules.filter((module) => module.level !== 4)
);

const isOwner = inject("isOwner");

const SortModules = (sortBy) => {
  if (sortBy === "Сначала новые")
    return sortApi.sortDESCByCreate(filteredModules.value);
  else if (sortBy === "Сначала старые")
    return sortApi.sortASCByCreate(filteredModules.value);
  else if (sortBy === "По названию")
    return sortApi.sortByModuleName(filteredModules.value);
  else return filteredModules.value;
};

const reduceTasks = (tasks, status) => {
  if (!tasks.length) return 0;

  const checkedStatus =
    status === 0
      ? process.env.APPOINTED_ID
      : status === 1
      ? process.env.COMPLETED_ID
      : process.env.FINISHED_ID;

  return tasks.reduce(
    (sum, task) => (task.status === checkedStatus ? sum + 1 : sum + 0),
    0
  );
};
</script>

<style lang="scss" scoped></style>
