<template>
  <q-page v-if="loading" class="flex text-h4 items-center justify-center">
    Загрузка...
  </q-page>

  <ModulesPage v-else-if="pageType === 'Модули'" />
  <ModulePage v-else-if="pageType === 'Модуль'" />

  <TasksPage v-else-if="pageType === 'Мои задачи'" />
  <TaskPage v-else-if="pageType === 'Задача'" />
</template>

<script setup>
import { watch, ref, onMounted } from "vue";
import { getPage } from "src/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import ModulesPage from "./ModulesPage.vue";
import ModulePage from "./ModulePage.vue";
import TasksPage from "./TasksPage.vue";
import TaskPage from "./TaskPage.vue";

const route = useRoute();
const id = route.params.id;

const { result: page, loading } = useQuery(getPage, {
  id: id,
});

const pageType = ref("");

const pageTypeUpdate = () => {
  const page_type_id = page.value?.page.object.type_id;
  const page_title = page.value?.page.title;

  if (page_type_id === null) pageType.value = page_title;
  else if (page_type_id === "5129465377265531694") pageType.value = "Модуль";
  else if (page_type_id === "1943895113238629630") pageType.value = "Задача";
};

onMounted(() => {
  if (pageType.value) return;

  pageTypeUpdate();
});

watch(page, (value) => {
  if (!value) return;

  pageTypeUpdate();
});
</script>

<style lang="scss" scoped></style>
