<template>
  <div style="min-width: 300px; overflow-x: auto">
    <div class="row no-wrap">
      <Select
        v-if="modules || tasks || moduleId"
        :options="['Сначала новые', 'Сначала старые', 'По названию']"
        :changeValue="sortBy"
        :key="sortBy"
        :label="'Сортировка'"
        :icon="'sort'"
        @change="sort"
      />

      <Select
        v-if="modules"
        class="q-ml-sm"
        :options="['По названию', 'По дате начала', 'По дате окончания']"
        :changeValue="groupBy"
        :key="groupBy"
        :label="'Группировка'"
        :icon="'workspaces'"
        @change="group"
      />

      <Select
        v-if="moduleId"
        class="q-ml-sm"
        :options="['По названию', 'По исполнителю', 'По статусу задачи']"
        :changeValue="groupBy"
        :key="groupBy"
        :label="'Группировка'"
        :icon="'workspaces'"
        @change="group"
      />

      <Select
        v-if="tasks"
        class="q-ml-sm"
        :options="['По названию', 'По статусу задачи']"
        :changeValue="groupBy"
        :key="groupBy"
        :label="'Группировка'"
        :icon="'workspaces'"
        @change="group"
      />
    </div>

    <table style="width: 100%" class="table q-mt-lg">
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

      <MainTableSubjectsBody
        v-if="subjects"
        :subjects="subjects"
        :column-length="columnNames.length"
        :property-type="columnNames.at(-1)"
        :sortBy="sortBy"
        :groupBy="groupBy"
      />

      <MainTableModuleTasksBody
        v-if="moduleId"
        :moduleId="moduleId"
        :sortBy="sortBy"
        :groupBy="groupBy"
      />

      <MainTableTasksBody
        v-if="tasks"
        :key="sortBy"
        :tasks="tasks"
        :sortBy="sortBy"
        :groupBy="groupBy"
      />
    </table>
  </div>
</template>

<script setup>
import MainTableModulesBody from "src/components/MainTableModulesBody.vue";
import MainTableSubjectsBody from "src/components/MainTableSubjectsBody.vue";
import MainTableTasksBody from "src/components/MainTableTasksBody.vue";
import MainTableModuleTasksBody from "./MainTableModuleTasksBody.vue";
import Select from "./Select.vue";
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
const groupBy = ref(null);

const sort = (sortValue) => {
  sortBy.value = sortValue;
  groupBy.value = null;
};

const group = (groupValue) => {
  groupBy.value = groupValue;
  sortBy.value = null;
};
</script>

<style>
.border-bottom {
  border-bottom: 1px solid black;
}
</style>
