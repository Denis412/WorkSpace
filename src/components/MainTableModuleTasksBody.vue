<template>
  <SortedTasks
    v-if="!groupBy"
    :tasks="resultModule?.get_module.tasks"
    :sortBy="sortBy"
    :listProperties="listProperties"
    :module="module"
  />

  <GroupedModuleTasks
    :groupBy="groupBy"
    :listProperties="listProperties"
    :module="module"
  />
</template>

<script setup>
import { ref, inject } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getModuleById, getListProperty } from "src/graphql/queries";
import SortedTasks from "./SortedModuleTasks.vue";
import GroupedModuleTasks from "./GroupedModuleTasks.vue";

const { module, sortBy, groupBy } = defineProps({
  module: Object,
  sortBy: String,
  groupBy: String,
});

const updateTasks = inject("updateTasks");

const { result: listProperties } = useQuery(getListProperty);

const { result: resultModule, refetch: refetchModule } = useQuery(
  getModuleById,
  {
    module_id: module.id,
  }
);
</script>
