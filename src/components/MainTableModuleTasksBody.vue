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
        <TaskAction
          :module-id="moduleId"
          title="Редактирование задачи"
          button-label="Редактировать задачу"
          :task="task"
        />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getModuleById } from "src/graphql/queries";
import TaskAction from "./TaskAction.vue";

const { moduleId } = defineProps({
  moduleId: String,
});

const { result: resultModule } = useQuery(getModuleById, {
  module_id: moduleId,
});
</script>
