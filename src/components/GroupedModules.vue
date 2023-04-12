<template>
  <tbody
    class="relative-position tbody"
    v-for="subject in modules"
    :key="subject.id"
  >
    <div
      class="relative-position tbody"
      v-for="(group, key) in groupModules(subject.modules, groupBy)"
      :key="key"
    >
      <div class="th q-py-sm q-pl-sm">
        Значение: <strong>{{ key }}</strong
        >. Обьектов: <strong>{{ group.length }}</strong>
      </div>
      <Dropdown :group="group" />
    </div>
  </tbody>
</template>

<script setup>
import { defineProps } from "vue";
import groupApi from "src/utils/group";
import Dropdown from "./GroupedModulesDropdown.vue";

const { modules, groupBy } = defineProps({
  modules: Object,
  groupBy: String,
});

const groupModules = (modules, groupBy) => {
  if (groupBy === "По названию") return groupApi.groupByModuleName(modules);
  else if (groupBy === "По дате начала")
    return groupApi.groupByStartDate(modules);
  else if (groupBy === "По дате окончания")
    return groupApi.groupByEndDate(modules);
};
</script>

<style lang="scss" scoped>
.th {
  height: 43px;
  white-space: nowrap;
  text-align: start;
}

.tbody {
  box-shadow: 0px 1px $grey-3;
}
</style>
