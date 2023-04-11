<template>
  <tbody v-for="(group, index) in groupTasks(tasks,groupBy)" :key="index">
    <th>Группа {{ index + 1 }}</th>
    <tr
      v-for="task in group"
      :key="task.id"
      :style="{ 'background-color': calculatedCurrentStatus(task?.property3) }"
    >
      <td>
        {{ task.name }}
      </td>

      <td>
        {{ task.property1 }}
      </td>

      <td>
        {{ calculatedStatus?.label }}
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
import TaskAction from "./TaskAction.vue";
import groupApi from "src/utils/group";
import { useQuasar } from "quasar";
import { ref } from "vue";

const { tasks, grouptBy, listProperties  } = defineProps({
  tasks: Object,
  groupBy: String,
  listProperties: Object
});

const $q = useQuasar();

const calculatedStatus = ref({});



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
