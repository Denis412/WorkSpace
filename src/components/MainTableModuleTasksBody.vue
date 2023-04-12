<template>
  <SortedTasks
    v-if="!groupBy"
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
import { useQuery } from "@vue/apollo-composable";
import { getListProperty } from "src/graphql/queries";
import SortedTasks from "./SortedModuleTasks.vue";
import GroupedModuleTasks from "./GroupedModuleTasks.vue";

const { module, sortBy, groupBy } = defineProps({
  module: Object,
  sortBy: String,
  groupBy: String,
});

const { result: listProperties } = useQuery(getListProperty);
</script>
