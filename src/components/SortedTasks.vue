<template>
  <tbody>
    <tr
      v-for="task in sortTasks(tasks, sortBy)"
      :key="task.id"
      :style="{
        'background-color': calculatedCurrentStatus(task?.status).color,
      }"
    >
      <td>
        {{ task.name }}
      </td>

      <td>
        {{ task.description }}
      </td>

      <td>
        {{ calculatedCurrentStatus(task?.status).label }}
      </td>

      <td>
        <TaskAction
          :module-id="task.module?.id"
          title="Редактирование задачи"
          button-label="Изменить"
          :task="task"
          :executor-edit="true"
        />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import sortApi from "src/utils/sort.js";
import TaskAction from "./TaskAction.vue";
import { ref } from "vue";
import { useQuasar } from "quasar";

const { tasks, sortBy, listProperties } = defineProps({
  tasks: Object,
  sortBy: String,
  listProperties: Object,
});

const $q = useQuasar();

const calculatedStatus = ref({});

const sortTasks = (tasks, sortBy) => {
  if (sortBy === "Сначала новые") return sortApi.sortDESCByCreate(tasks);
  else if (sortBy === "Сначала старые") return sortApi.sortASCByCreate(tasks);
  else if (sortBy === "По названию") return sortApi.sortByModuleName(tasks);
  else return tasks;
};

const calculatedCurrentStatus = (taskProperty) => {
  const obj = listProperties?.property.meta.options.find(
    (status) => status.id === taskProperty
  );

  return obj;
};
</script>

<style lang="scss" scoped></style>
