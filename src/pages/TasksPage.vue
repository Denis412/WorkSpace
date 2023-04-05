<template>
  <q-page v-if="loading" class="flex items-center justify-center text-h4">
    Загрузка...
  </q-page>

  <q-page v-else class="q-pa-md">
    <header class="text-center text-h3 q-mb-md">{{ page.title }}</header>
    <pre>{{ page }}</pre>
  </q-page>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getTasksAll } from "src/graphql/queries";

const { page } = defineProps({
  page: Object,
});

const { result: allTasks, loading } = useQuery(getTasksAll);
</script>
