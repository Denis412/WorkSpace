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

    <MainTableModulesBody v-if="modules" :modules="modules" />
    <MainTableSubjectsBody v-else-if="subjects" :subjects="subjects" />
    <MainTableTasksBody v-else-if="tasks" :tasks="tasks" />
  </table>
</template>

<script setup>
import MainTableModulesBody from "src/components/MainTableModulesBody.vue";
import MainTableSubjectsBody from "src/components/MainTableSubjectsBody.vue";
import MainTableTasksBody from "src/components/MainTableTaskBody.vue";

const { columnNames, subjects, modules, tasks } = defineProps({
  columnNames: Array,
  subjects: Array,
  modules: Array,
  tasks: Array,
});
</script>

<style>
.border-bottom {
  border-bottom: 1px solid black;
}
</style>
