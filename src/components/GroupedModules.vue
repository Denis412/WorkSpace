<template>
  <tbody class="relative-position" v-for="(group, key) in groupModules(modules.property4, groupBy)" :key="key">
    <th class="th q-py-sm">
      Значение: {{ key }}. Обьектов: {{ group.length }}
    </th>
    <Dropdown
    :group="group"
    />
  </tbody>
</template>

<script setup>
import { defineProps } from "vue";
import groupApi from "src/utils/group";
import Dropdown from "./GroupedModulesDropdown.vue";

const { modules, sortBy } = defineProps({
  modules: Object,
  groupBy: String
});

const groupModules = (modules, groupBy) => {
  if (groupBy === "По названию")
    return groupApi.groupByModuleName(modules);
  else if (groupBy === "По дате начала")
    return groupApi.groupByStartDate(modules);
  else if (groupBy === "По дате окончания")
    return groupApi.groupByEndDate(modules);
}

</script>

<style lang="scss" scoped>
.th{
  height: 43px;
  white-space: nowrap;
  text-align: start;
}
</style>
