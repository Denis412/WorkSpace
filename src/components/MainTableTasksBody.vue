<template>
  <tbody>
    <tr
      v-for="task in tasks.property2"
      :key="task.id"
      :style="{ 'background-color': colorStr }"
    >
      <td>
        {{ task.name }}
      </td>

      <td>
        {{ task.property1 }}
      </td>

      <td>
        <pre>{{ currentStatusObject(task.property3)?.label }}</pre>
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

const colorStr = ref("white");

const currentStatusObject = (taskProperty) => {
  const obj = listProperties.value?.property.meta.options.find(
    (status) => status.id === taskProperty
  );

  console.log(obj);

  colorStr.value = obj?.color;

  return obj;
};
</script>
