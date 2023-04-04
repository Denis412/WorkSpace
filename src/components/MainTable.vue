<template>
  <table class="border-black-1 rounded-borders">
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

    <MainTableModulesBody
    v-if="modules"
    :modules="modules"
    />

    <MainTableModuleBody
    v-if="singleModule"
    :module="singleModule"
    />


    <MainTableModuleTasksBody v-else-if="moduleId" :moduleId="moduleId" />

    <MainTableSubjectsBody
      v-else-if="subjects"
      :columnLength="columnNames.length"
      :propertyType="columnNames.at(-1)"
      :subjects="subjects"
    />

    <MainTableTasksBody v-else-if="tasks" :tasks="tasks" />
  </table>
</template>

<script setup>
import MainTableModulesBody from "src/components/MainTableModulesBody.vue";
import MainTableModuleBody from "src/components/MainTableModuleBody.vue";
import MainTableSubjectsBody from "src/components/MainTableSubjectsBody.vue";
import MainTableTasksBody from "src/components/MainTableTasksBody.vue";
import MainTableModuleTasksBody from "./MainTableModuleTasksBody.vue";

const { columnNames, subjects, modules, tasks, moduleId } = defineProps({
  columnNames: Array,
  subjects: Array,
  modules: Array,
  singleModule: Object,
  tasks: Array,
  moduleId: String,
});
</script>

<style>
.border-bottom {
  border-bottom: 1px solid black;
}
</style>
