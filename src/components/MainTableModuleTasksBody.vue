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

        <q-btn @click="deleteTask(task.id)" color="negative" label="Удалить" />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getModuleById } from "src/graphql/queries";
import TaskAction from "./TaskAction.vue";
import taskApi from "src/sdk/task";
import { useQuasar } from "quasar";

const $q = useQuasar();

const { moduleId, pageId } = defineProps({
  moduleId: String,
});

const deleteTask = async (taskId) => {
  try {
    await taskApi.taskDelete(taskId, moduleId, 0);

    $q.notify({
      type: "positive",
      message: "Задача удалена!",
    });
  } catch (error) {
    console.log(error);
  }
};

const { result: resultModule } = useQuery(getModuleById, {
  module_id: moduleId,
});
</script>
