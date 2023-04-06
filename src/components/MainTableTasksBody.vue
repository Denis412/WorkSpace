<template>
  <tbody>
    <tr
      v-for="task in tasks.property2"
      :key="task.id"
      :style="{ 'background-color': calculatedCurrentStatus(task.property3) }"
    >
      <td>
        {{ task.id }}
        {{ task.name }}
      </td>

      <td>
        {{ task.property1 }}
      </td>

      <td>
        {{ taskLabel }}
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
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getListProperty } from "src/graphql/queries";
import TaskAction from "./TaskAction.vue";
import { getTaskStatus } from "src/utils/getTaskStatus";

const { tasks } = defineProps({
  tasks: Object,
});

const { result: listProperties, loading } = useQuery(getListProperty);

const taskLabel = ref("white");

const calculatedCurrentStatus = (taskProperty) => {
  const obj = listProperties.value?.property.meta.options.find(
    (status) => status.id === taskProperty
  );

  taskLabel.value = obj?.label;

  return obj?.color;
};
</script>
