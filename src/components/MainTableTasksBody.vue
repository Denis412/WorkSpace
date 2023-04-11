<template>
  <!-- <pre>t{{ tasks }}</pre> -->
  <tbody>
    <tr
      v-for="task in tasks.property2"
      :key="task.id"
      :style="{ 'background-color': calculatedCurrentStatus(task?.property3) }"
    >
      <td>
        {{ task.name }}
      </td>

      <td>
        {{ task.property1 }}
      </td>

      <td>
        {{ calculatedStatus?.label }}
      </td>

      <td>
        <TaskAction 
          :module-id="task.property7?.id"
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
import { onMounted, ref, computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getListProperty } from "src/graphql/queries";
import TaskAction from "./TaskAction.vue";
import TaskPageVue from "src/pages/TaskPage.vue";
import sortApi from "src/utils/sort";

const { tasks, sortBy } = defineProps({
  tasks: Array,
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
    return sortApi.sortDESCByCreate(tasks.property2);
  else if (sortBy === "Сначала старые")
    return sortApi.sortASCByCreate(tasks.property2);
  else if (sortBy === "По названию")
    return sortApi.sortByModuleName(tasks.property2);
  else return tasks.property2;
});
</script>
