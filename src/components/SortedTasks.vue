<template>
  <tbody>
    <tr
      v-for="task in sortTasks(sortBy)"
      :key="task.id"
      :style="{ 'background-color': task.status.color }"
    >
      <td>
        {{ task.name }}
      </td>

      <td>
        {{ task.description }}
      </td>

      <td>
        {{ task.status.label }}
      </td>

      <td>
        <TaskAction
          :module="task.module"
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
import { computed } from "vue";
import _ from "lodash";

const { tasks, sortBy, listProperties } = defineProps({
  tasks: Object,
  sortBy: String,
  listProperties: Object,
});

const editedTasks = computed(() =>
  tasks.map((task) =>
    Object.assign(_.cloneDeep(task), {
      status:
        listProperties?.property.meta.options.find(
          (status) => status.id === task.status
        ) || null,
    })
  )
);

const sortTasks = (sortBy) => {
  if (sortBy === "Сначала новые")
    return sortApi.sortDESCByCreate(editedTasks.value);
  else if (sortBy === "Сначала старые")
    return sortApi.sortASCByCreate(editedTasks.value);
  else if (sortBy === "По названию")
    return sortApi.sortByModuleName(editedTasks.value);
  else return editedTasks.value;
};
</script>

<style lang="scss" scoped></style>
