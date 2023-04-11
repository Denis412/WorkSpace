<template>
  <div style="min-width: 300px; overflow-x: auto">
    <q-select
      class="bg-selector"
      filled
      v-model="sortBy"
      :options="['Сначала новые', 'Сначала старые', 'По названию']"
      use-chips
      stack-label
      label="Сортировка"
    />
    <table style="width: 100%" class="table ">
      <thead class="rounded-borders border-black-1 ">
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
        :key="sortBy"
        :modules="modules"
        :sortBy="sortBy"
      />

      <MainTableModuleTasksBody
        v-if="moduleId"
        :moduleId="moduleId"
        :key="sortBy"
        :pageId="pageId"
        :sortBy="sortBy"
      />

      <MainTableSubjectsBody
        v-else-if="subjects"
        :columnLength="columnNames.length"
        :propertyType="columnNames.at(-1)"
        :subjects="subjects"
      />

      <!-- <pre>{{ tasks }}</pre> -->
      <MainTableTasksBody
        v-if="tasks"
        :key="sortBy"
        :tasks="tasks"
        :sortBy="sortBy"
      />
      <!-- <pre>{{ tasks?.paginate_subject.data[0].property2 }}</pre> -->
    </table>
  </div>
</template>

<script setup>
import MainTableModulesBody from "src/components/MainTableModulesBody.vue";
import MainTableSubjectsBody from "src/components/MainTableSubjectsBody.vue";
import MainTableTasksBody from "src/components/MainTableTasksBody.vue";
import MainTableModuleTasksBody from "./MainTableModuleTasksBody.vue";
import { ref, computed } from "vue";

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
</script>

<style lang="scss">
.border-bottom {
  border-bottom: 1px solid black;
}

.bg-selector {
  background: var(--bg-color-2);
 
}


</style>
