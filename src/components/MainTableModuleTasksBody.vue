<template>
  <tbody>
    <tr v-for="task in resultModule?.get_type2.property7" :key="task.id">
      <td>
        <div class="link">
          {{ task.name }}
        </div>
      </td>

      <td>
        {{ task.property1 }}
      </td>

      <td>
        <router-link
          :to="{ name: 'subject', params: { id: task.property2.id } }"
        >
          {{ task.property2.fullname.first_name }}
        </router-link>
      </td>

      <td class="flex justify-between">
        <TaskAction
          :module-id="moduleId"
          title="Редактирование задачи"
          button-label="Изменить"
          :task="task"
        />

        <q-btn color="negative" label="Удалить" />
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
