<template>
  <q-page v-if="loading" class="flex items-center justify-center text-h4">
    Загрузка...
  </q-page>

  <q-page v-else class="q-pa-md">
    <!-- <pre>{{ page }}</pre> -->
    <!-- <pre>re{{ resultModule }}</pre> -->
    <header class="text-h3 text-center">
      {{ resultModule?.get_module.name }}
    </header>

    <main class="q-mt-md">
      <div class="flex">
        <TaskAction
          :module-id="resultModule?.get_module.id"
          title="Создание задачи"
          button-label="Создать задачу"
        />
      </div>

      <MainTable
        class="w-100p q-my-md"
        :column-names="[
          'Название задачи',
          'Описание задачи',
          'Исполнитель',
          'Действия',
        ]"
        :module-id="resultModule?.get_module.id"
      />
    </main>
  </q-page>
</template>

<script setup>
import MainTable from "src/components/MainTable.vue";
import { useQuery } from "@vue/apollo-composable";
import { getModuleById, getUserTasks } from "src/graphql/queries";
import { onMounted, provide } from "vue";
import TaskAction from "src/components/TaskAction.vue";

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

const { refetch: refetchTasks } = useQuery(getUserTasks);

provide("updateTasks", refetchTasks);
provide("updateModule", refetchModule);

onMounted(() => {
  if (!page) return;

  refetchModule({
    module_id: page.object.id,
  });
});
</script>
