<template>

  <SortedTasks
  v-if="!groupBy"
  :tasks="resultModule?.get_type2.property7"
  :sortBy="sortBy"
  :listProperties="listProperties"
  :moduleId="moduleId"
  />

  <GroupedModuleTasks
  :tasks="resultModule?.get_type2.property7"
  :groupBy="groupBy"
  :listProperties="listProperties"
  :moduleId="moduleId"
  />

</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getModuleById, getListProperty } from "src/graphql/queries";
import SortedTasks from "./SortedModuleTasks.vue";
import GroupedModuleTasks from "./GroupedModuleTasks.vue";

const { moduleId, sortBy, groupBy } = defineProps({
  moduleId: String,
  sortBy: String,
  groupBy:String
});

const { result: listProperties } = useQuery(getListProperty);

const { result: resultModule } = useQuery(getModuleById, {
  module_id: moduleId,
});


</script>
