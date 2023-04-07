<template>
  <q-page v-if="loading" class="flex items-center justify-center text-h4">
    Загрузка...
  </q-page>

  <q-page v-else class="q-pa-md">
    <header class="text-center text-h3 q-mb-md">{{ page.title }}</header>

    <main>
      <!-- <pre>dll{{ allTasks }}</pre> -->
      <MainTable
        :column-names="[
          'Название задачи',
          'Описание задачи',
          'Статус',
          'Действия',
        ]"
        :tasks="allTasks?.paginate_subject?.data[0]"
      />
    </main>
  </q-page>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getUserTasks, getTasksAll } from "src/graphql/queries";
import MainTable from "src/components/MainTable.vue";

const { page } = defineProps({
  page: Object,
});

const { result: allTasks, loading } = useQuery(getUserTasks);
</script>
