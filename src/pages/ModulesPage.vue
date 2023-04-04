<template>
  <q-page class="q-pa-md">
    <div class="text-h3 text-center q-pb-md">Модули</div>
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

const { result: modules } = useQuery(getModulesAll);
const columnNames = [
  "Название",
  "Ответственный",
  "Дата и время начала",
  "Дата и время окончания",
];
</script>
