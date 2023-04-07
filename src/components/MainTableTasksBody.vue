<template>
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
import { onMounted, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getListProperty } from "src/graphql/queries";
import TaskAction from "./TaskAction.vue";
import TaskPageVue from "src/pages/TaskPage.vue";

const { tasks } = defineProps({
  tasks: Object,
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
</script>
