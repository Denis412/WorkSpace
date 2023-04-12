<template>
  <SortedTasks
    v-if="!groupBy"
    :tasks="resultModule?.get_module.tasks"
    :sortBy="sortBy"
    :listProperties="listProperties"
    :moduleId="moduleId"
  />

  <GroupedModuleTasks
    :tasks="resultModule?.get_module.tasks"
    :groupBy="groupBy"
    :listProperties="listProperties"
    :moduleId="moduleId"
  />
</template>

<script setup>
import { ref, inject } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getModuleById, getListProperty } from "src/graphql/queries";
import SortedTasks from "./SortedModuleTasks.vue";
import GroupedModuleTasks from "./GroupedModuleTasks.vue";

const { moduleId, sortBy, groupBy } = defineProps({
  moduleId: String,
  sortBy: String,
});

const updateTasks = inject("updateTasks");

const { result: listProperties } = useQuery(getListProperty);

const { result: resultModule, refetch: refetchModule } = useQuery(
  getModuleById,
  {
    module_id: moduleId,
  }
);
</script>
