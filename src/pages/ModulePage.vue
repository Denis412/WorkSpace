<template>
  <q-page class="q-pa-md">
    <header class="text-h3 text-center">
      {{ resultModule?.get_type2.name }}
    </header>

    <!-- <pre>{{ page }}</pre> -->
    <!-- <pre>{{ resultModule }}</pre> -->

    <pre>{{ resultModule?.get_type2 }}</pre>

    <main class="q-mt-md">
      <MainTable
        class="w-100p"
        :column-names="['Название', 'Задачи']"
        :module-id="resultModule?.get_type2.id"
      />
    </main>
  </q-page>
</template>

<script setup>
import MainTable from "src/components/MainTable.vue";
import { useQuery } from "@vue/apollo-composable";
import { getModuleById } from "src/graphql/queries";
import { onMounted } from "vue";

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

  console.log(page);

  refetchModule({
    module_id: page.object.id,
  });
});
</script>
