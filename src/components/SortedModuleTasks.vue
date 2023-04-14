<template>
  <tbody>
    <tr
      v-for="task in sortTasks(tasks, sortBy)"
      :key="task.id"
      :style="{ 'background-color': calculatedCurrentStatus(task?.status) }"
    >
      <td>
        <div class="link">
          {{ task.name }}
        </div>
      </td>

      <td>
        {{ task.description }}
      </td>

      <td>
        <router-link
          :to="{ name: 'subject', params: { id: task.executor.id } }"
        >
          {{ task.executor.fullname.first_name }}
        </router-link>
      </td>

      <td class="flex justify-center">
        <TaskAction
          :module-id="moduleId"
          title="Редактирование задачи"
          button-label="Изменить"
          :task="task"
        />

        <q-btn
          class="q-ml-md"
          @click="deleteTask(task.id)"
          color="negative"
          label="Удалить"
        />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import sortApi from "src/utils/sort.js";
import TaskAction from "./TaskAction.vue";
import taskApi from "src/sdk/task";
import { ref } from "vue";
import { useQuasar } from "quasar";

const { tasks, sortBy, listProperties, moduleId } = defineProps({
  tasks: Array,
  sortBy: String,
  listProperties: Object,
  moduleId: String,
});

const $q = useQuasar();

const calculatedStatus = ref({});

const sortTasks = (tasks, sortBy) => {
  if (sortBy === "Сначала новые") return sortApi.sortDESCByCreate(tasks);
  else if (sortBy === "Сначала старые") return sortApi.sortASCByCreate(tasks);
  else if (sortBy === "По названию") return sortApi.sortByModuleName(tasks);
  else return tasks;
};

const calculatedCurrentStatus = (taskProperty) => {
  const obj = listProperties?.property.meta.options.find(
    (status) => status.id === taskProperty
  );

  calculatedStatus.value = obj;

  return obj?.color;
};

const deleteTask = async (taskId) => {
  try {
    await taskApi.taskDelete(taskId, moduleId);

    $q.notify({
      type: "positive",
      message: "Задача удалена!",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
