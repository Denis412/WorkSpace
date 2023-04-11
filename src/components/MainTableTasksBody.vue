<template>
  <tbody>
    <tr
      v-for="task in tasks.tasks"
      :key="task.id"
      :style="{ 'background-color': calculatedCurrentStatus(task?.status) }"
    >
      <td>
        {{ task.name }}
      </td>

      <td>
        {{ task.description }}
      </td>

      <td>
        {{ calculatedStatus?.label }}
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
import { ref, computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getListProperty } from "src/graphql/queries";
import TaskAction from "./TaskAction.vue";
import sortApi from "src/utils/sort";

const { tasks, sortBy } = defineProps({
  tasks: Object,
  sortBy: String,
});

const { result: listProperties } = useQuery(getListProperty);

const calculatedStatus = ref({});

const calculatedCurrentStatus = (taskProperty) => {
  const obj = listProperties.value?.property.meta.options.find(
    (status) => status.id === taskProperty
  );

  calculatedStatus.value = obj;

  return obj?.color;
};

const tasksSort = computed(() => {
  if (sortBy === "Сначала новые")
    return sortApi.sortDESCByCreate(tasks.executor);
  else if (sortBy === "Сначала старые")
    return sortApi.sortASCByCreate(tasks.executor);
  else if (sortBy === "По названию")
    return sortApi.sortByModuleName(tasks.executor);
  else return tasks.executor;
});
</script>
