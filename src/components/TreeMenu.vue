<template>
  <q-list>
    <TreeMenuItem
      v-for="page in pages"
      :key="page.id"
      :page="page"
      :modules="modules?.paginate_module?.data"
    />
  </q-list>
</template>

<script setup>
import TreeMenuItem from "./TreeMenuItem.vue";
import { useQuery } from "@vue/apollo-composable";
import { getAllModules } from "src/graphql/queries";

const { pages } = defineProps({
  pages: Array,
});

const { result: modules } = useQuery(getAllModules);
</script>
