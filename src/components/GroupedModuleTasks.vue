<template>
  <tbody v-for="(group, index) in groupTasks(tasks,groupBy)" :key="index">
    <th>Группа {{ index + 1 }}</th>
    <tr
      v-for="task in group"
      :key="task.id"
      :style="{ 'background-color': calculatedCurrentStatus(task?.property3) }"
    >
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
import TaskAction from "./TaskAction.vue";
import taskApi from "src/sdk/task";
import groupApi from "src/utils/group";
import { useQuasar } from "quasar";
import { ref } from "vue";

const { tasks, grouptBy, listProperties,moduleId } = defineProps({
  tasks: Array,
  groupBy: String,
  listProperties: Object,
  moduleId: String,
});

const $q = useQuasar();

const calculatedStatus = ref({});

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

const calculatedCurrentStatus = (taskProperty) => {
  const obj = listProperties?.property.meta.options.find(
    (status) => status.id === taskProperty
  );

  calculatedStatus.value = obj;

  return obj?.color;
};



const groupTasks = (tasks,groupBy) => {
  if (groupBy === "По названию")
    return groupApi.groupByModuleName(tasks);
  else if (groupBy === "По исполнителю")
    return groupApi.groupByExecutor(tasks);
  else if (groupBy === "По статусу задачи")
    return groupApi.groupByStatus(tasks);
};

</script>

<style lang="scss" scoped>

</style>
