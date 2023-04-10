<template>
  <div style="min-width: 300px; overflow-x: auto;">
    <q-select
      v-if="modules||tasks||moduleId"
      filled
      v-model="sortBy"
      :options="['Сначала новые','Сначала старые','По названию']"
      use-chips
      stack-label
      label="Сортировка"
      @update:model-value="sort"
    />
    <q-select
      v-if="modules"
      filled
      v-model="groupBy"
      :options="['По названию','По дате начала','По дате окончания']"
      use-chips
      stack-label
      label="Группировка"
      @update:model-value="group"

    />
    <q-select
      v-if="moduleId"
      filled
      v-model="groupBy"
      :options="['По названию','По исполнителю','По статусу задачи']"
      use-chips
      stack-label
      label="Группировка"
      @update:model-value="group"

    />
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

    <MainTableModulesBody
    v-if="modules"
    :modules="modules"
    :sortBy="sortBy"
    :groupBy="groupBy"
    />

    <MainTableModuleTasksBody
      v-if="moduleId"
      :moduleId="moduleId"
      :sortBy="sortBy"
      :groupBy="groupBy"
    />

    <MainTableSubjectsBody
      v-else-if="subjects"
      :columnLength="columnNames.length"
      :propertyType="columnNames.at(-1)"
      :subjects="subjects"
    />

    <MainTableTasksBody
    v-if="tasks"
    :key="sortBy"
    :tasks="tasks"
    :sortBy="sortBy"
    />
  </table>
  </div>

</template>

<script setup>
import MainTableModulesBody from "src/components/MainTableModulesBody.vue";
import MainTableSubjectsBody from "src/components/MainTableSubjectsBody.vue";
import MainTableTasksBody from "src/components/MainTableTasksBody.vue";
import MainTableModuleTasksBody from "./MainTableModuleTasksBody.vue";
import { ref,computed } from "vue";

const { columnNames, subjects, modules, tasks, moduleId, pageId } = defineProps(
  {
    columnNames: Array,
    subjects: Array,
    modules: Object,
    tasks: Object,
    moduleId: String,
    pageId: String,
  }
);

const sortBy = ref(null);
const groupBy = ref(null);

const sort = () =>{
  groupBy.value =null;
}

const group = () =>{
  sortBy.value =null;
}

</script>

<style>
.border-bottom {
  border-bottom: 1px solid black;
}
</style>
