<template>
  <div style="min-width: 300px; overflow-x: auto;">
    <table style="width: 100%"  class="table">
    <thead class="rounded-borders border-black-1">
      <tr>
        <th
          v-for="columnName in columnNames"
          :key="columnName"
          class="q-pa-md text-center"
        >
          {{ columnName }}
        </th>
      </tr>
    </thead>

    <MainTableModulesBody v-if="modules" :modules="modules" />

    <MainTableModuleTasksBody
      v-else-if="moduleId"
      :moduleId="moduleId"
      :pageId="pageId"
    />

    <MainTableSubjectsBody
      v-else-if="subjects"
      :columnLength="columnNames.length"
      :propertyType="columnNames.at(-1)"
      :subjects="subjects"
    />

    <MainTableTasksBody v-else-if="tasks" :tasks="tasks" />
  </table>
  </div>
  
</template>

<script setup>
import MainTableModulesBody from "src/components/MainTableModulesBody.vue";
import MainTableSubjectsBody from "src/components/MainTableSubjectsBody.vue";
import MainTableTasksBody from "src/components/MainTableTasksBody.vue";
import MainTableModuleTasksBody from "./MainTableModuleTasksBody.vue";

const { columnNames, subjects, modules, tasks, moduleId, pageId } = defineProps(
  {
    columnNames: Array,
    subjects: Array,
    modules: Array,
    tasks: Array,
    moduleId: String,
    pageId: String,
  }
);
</script>

<style>
.border-bottom {
  border-bottom: 1px solid black;
}
</style>
