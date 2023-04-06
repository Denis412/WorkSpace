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
        <q-btn color="primary" label="Изменить статус" />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getListProperty } from "src/graphql/queries";

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
