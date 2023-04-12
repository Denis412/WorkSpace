<template>
  <tbody>
    <tr
      v-for="task in sortTasks(sortBy)"
      :key="task.id"
      :style="{ 'background-color': task.status.color }"
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
          :module="module"
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
import { computed, inject } from "vue";
import { useQuasar } from "quasar";
import _ from "lodash";

const { sortBy, listProperties, module } = defineProps({
  sortBy: String,
  listProperties: Object,
  module: Object,
});

const $q = useQuasar();

const editedTasks = computed(() =>
  module.tasks.map((task) =>
    Object.assign(_.cloneDeep(task), {
      status:
        listProperties?.property.meta.options.find(
          (status) => status.id === task.status
        ) || {},
    })
  )
);

const sortTasks = (sortBy) => {
  if (sortBy === "Сначала новые")
    return sortApi.sortDESCByCreate(editedTasks.value);
  else if (sortBy === "Сначала старые")
    return sortApi.sortASCByCreate(editedTasks.value);
  else if (sortBy === "По названию")
    return sortApi.sortByModuleName(editedTasks.value);
  else return editedTasks.value;
};

const updateModule = inject("updateModule");

const deleteTask = async (taskId) => {
  try {
    await taskApi.taskDelete(taskId, module);

    await updateModule({
      module_id: module.id,
    });

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
