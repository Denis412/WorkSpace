<template>
  <q-page v-if="loading"> Загрузка... </q-page>

  <q-page v-else class="q-pa-md">
    <header class="text-h3 text-center">
      {{ resultModule?.get_type2.name }}
    </header>

    <main class="q-mt-md">
      <MainTable
        class="w-100p q-my-md"
        :column-names="['Задачи']"
        :module-id="resultModule?.get_type2.id"
      />

      <div class="flex justify-end">
        <TaskCreate :module-id="resultModule?.get_type2.id" />
      </div>
    </main>
  </q-page>
</template>

<script setup>
import MainTable from "src/components/MainTable.vue";
import { useQuery } from "@vue/apollo-composable";
import { getModuleById } from "src/graphql/queries";
import { onMounted } from "vue";
import TaskCreate from "src/components/TaskCreate.vue";

const { page } = defineProps({
  page: Object,
});

const {
  result: resultModule,
  refetch: refetchModule,
  loading,
} = useQuery(getModuleById, {
  module_id: page.object.id,
});

onMounted(() => {
  if (!page) return;

  refetchModule({
    module_id: page.object.id,
  });
});
</script>
