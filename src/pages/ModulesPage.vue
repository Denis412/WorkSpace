<template>
  <q-page v-if="loading" class="flex justify-center items-center text-h4">
    Загрузка...
  </q-page>

  <q-page v-else class="q-pa-md">
    <div class="text-h3 text-center q-pb-md">Модули</div>

    <div class="q-my-md flex">
      <ModuleAction />
    </div>

    <!-- <pre>{{ modules }}</pre> -->

    <MainTable
      :modules="modules?.paginate_type2?.data"
      :columnNames="columnNames"
    />
  </q-page>
</template>

<script setup>
import MainTable from "src/components/MainTable.vue";
import { useQuery } from "@vue/apollo-composable";
import { getModulesAll } from "src/graphql/queries";
import { ref } from "vue";
import ModuleAction from "src/components/ModuleAction.vue";

const showCreateForm = ref(false);

const { result: modules, loading } = useQuery(getModulesAll);

const columnNames = [
  "Название",
  "Ответственный",
  "Дата и время начала",
  "Дата и время окончания",
  "Задачи",
  "Действия",
];
</script>
