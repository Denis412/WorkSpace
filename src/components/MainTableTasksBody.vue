<template>
  <SortedTasks
    v-if="!groupBy"
    :tasks="tasks.tasks"
    :sortBy="sortBy"
    :listProperties="listProperties"
  />

  <GroupedTasks
    :tasks="tasks.tasks"
    :groupBy="groupBy"
    :listProperties="listProperties"
  />
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getListProperty } from "src/graphql/queries";
import SortedTasks from "./SortedTasks.vue";
import GroupedTasks from "./GroupedTasks.vue";

const { tasks, sortBy, groupBy } = defineProps({
  tasks: Object,
  sortBy: String,
  groupBy: String,
});

const { result: listProperties } = useQuery(getListProperty);
</script>
