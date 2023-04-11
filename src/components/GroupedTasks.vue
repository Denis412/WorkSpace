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
    :deleteBtn="false"
    />
  </tbody>
</template>

<script setup>
import groupApi from "src/utils/group";
import Dropdown from "./GroupedTasksDropdown.vue";

const { tasks, grouptBy, listProperties  } = defineProps({
  tasks: Object,
  groupBy: String,
  listProperties: Object
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
