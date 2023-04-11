<template>
  <tbody
  class="relative-position"
  v-for="(group, key) in groupTasks(tasks,groupBy)"
  :key="key"
  >
    <th class="th q-py-sm">
      Значение: {{ key }}. Обьектов: {{ group.length }}
    </th>
    <Dropdown
    :group="group"
    :listProperties="listProperties"
    :deleteBtn="true"
    :moduleId="moduleId"
    />
    <!-- <tr
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
    </tr> -->
  </tbody>
</template>

<script setup>
import groupApi from "src/utils/group";
import Dropdown from "./GroupedTasksDropdown.vue";

const { tasks, grouptBy, listProperties,moduleId  } = defineProps({
  tasks: Array,
  groupBy: String,
  listProperties: Object,
  moduleId: String,
});

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
.th{
  height: 43px;
  white-space: nowrap;
  text-align: start;
}
</style>
