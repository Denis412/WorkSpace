<template>
  <q-page v-if="loading" class="flex justify-center items-center text-h4">
    Загрузка...
  </q-page>

  <q-page v-else class="q-pa-md">
    <!-- <pre>{{ modules }}</pre> -->
    <div class="text-h3 text-center q-pb-md">Модули</div>

    <div class="q-my-md flex">
      <ModuleAction />
    </div>

    <MainTable 
      :modules="modules?.paginate_subject.data[0]"
      :columnNames="columnNames"
    />
  </q-page>
</template>

<script setup>
import MainTable from "src/components/MainTable.vue";
import { useQuery } from "@vue/apollo-composable";
import { getUserModules } from "src/graphql/queries";
import { provide } from "vue";
import ModuleAction from "src/components/ModuleAction.vue";

const { page } = defineProps({
  page: Object,
});

provide("page", page);

const {
  result: modules,
  loading,
  refetch: refetchModules,
} = useQuery(getUserModules);

const columnNames = [
  "Название",
  "Дата и время начала",
  "Дата и время окончания",
  "Задачи",
  "Действия",
];

provide("updateModules", refetchModules);
</script>
