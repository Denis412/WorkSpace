<template>
  <tbody
  class="relative-position tbody"
  v-for="(group, key) in groupTasks(tasks,groupBy)"
  :key="key"
  >
    <div class="th q-py-sm q-pl-sm">
      Значение: <strong>{{ key }}</strong>. Обьектов: <strong>{{ group.length }}</strong>
    </div>
    <Dropdown
    :group="group"
    :listProperties="listProperties"
    :deleteBtn="true"
    :moduleId="moduleId"
    />

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

.tbody{
  box-shadow: 0px 1px $grey-3;
}
</style>
