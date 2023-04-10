<template>
  <q-page v-if="loading" class="flex justify-center items-center text-h4">
    Загрузка...
  </q-page>

  <q-page v-else class="q-pa-md">
    <!-- <pre>{{ currentModules }}</pre> -->
    <div class="text-h3 text-center q-pb-md">Модули</div>

    <div class="q-my-md flex">
      <ModuleAction />
    </div>

    <MainTable
      :modules="currentModules?.paginate_subject.data"
      :columnNames="columnNames"
    />
  </q-page>
</template>

<script setup>
import MainTable from "src/components/MainTable.vue";
import { useQuery } from "@vue/apollo-composable";
import { getUserModules, getModulesAll } from "src/graphql/queries";
import { provide, ref } from "vue";
import ModuleAction from "src/components/ModuleAction.vue";
import { Cookies } from "quasar";

const { page } = defineProps({
  page: Object,
});

provide("page", page);

let currentModules = ref(null);
let loading = ref(null);
let refetchModules;

Cookies.get("user_id") === process.env.OWNER_ID
  ? ({
      result: currentModules,
      loading,
      refetch: refetchModules,
    } = useQuery(getModulesAll))
  : ({
      result: currentModules,
      loading,
      refetch: refetchModules,
    } = useQuery(getUserModules));

// const {
//   result: modules,
//   loading,
//   refetch: refetchModules,
// } = useQuery(getUserModules);

const columnNames = [
  "Название",
  "Дата и время начала",
  "Дата и время окончания",
  "Файл",
  "Задачи",
  "Действия",
];

provide("updateModules", refetchModules);
</script>
