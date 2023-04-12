<template>
  <tbody class="relative-position tbody">
    <tr
      class="relative-position tbody"
      v-for="(group, key) in groupModules(groupBy)"
      :key="key"
    >
      <div class="th q-py-sm q-pl-sm">
        Значение: <strong>{{ key }}</strong
        >. Обьектов: <strong>{{ group.length }}</strong>
      </div>
      <Dropdown :group="group" />
    </tr>
  </tbody>
</template>

<script setup>
import { computed } from "vue";
import groupApi from "src/utils/group";
import Dropdown from "./GroupedModulesDropdown.vue";

const { modules, groupBy } = defineProps({
  modules: Object,
  groupBy: String,
});

const filteredModules = computed(() =>
  modules.filter((module) => module.level !== 4)
);

const groupModules = (groupBy) => {
  if (groupBy === "По названию")
    return groupApi.groupByModuleName(filteredModules.value);
  else if (groupBy === "По дате начала")
    return groupApi.groupByStartDate(filteredModules.value);
  else if (groupBy === "По дате окончания")
    return groupApi.groupByEndDate(filteredModules.value);
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
