<template>
  <tbody>
    <tr
      v-for="task in resultModule?.get_type2.property7"
      :key="task.id"
      class="flex justify-between q-mx-md"
    >
      <td>
        <q-item clickable class="rounded-borders items-center justify-center">
          {{ task.name }}
        </q-item>
      </td>

      <td>
        <q-btn label="Редактировать Задачу" color="primary" />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getModuleById } from "src/graphql/queries";

const { moduleId } = defineProps({
  moduleId: String,
});

const { result: resultModule, loading } = useQuery(getModuleById, {
  module_id: moduleId,
});
</script>
