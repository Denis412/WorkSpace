<template>
  <q-list>
    <TreeMenuItem
      v-for="page in pages"
      :key="page.id"
      :page="page"
      :modules="modules?.paginate_subject?.data"
    />
  </q-list>
</template>

<script setup>
import TreeMenuItem from "./TreeMenuItem.vue";
import { useQuery } from "@vue/apollo-composable";
import { getModulesAll } from "src/graphql/queries";

const { pages } = defineProps({
  pages: Array,
});

const { result: modules } = useQuery(getModulesAll);

// Cookies.get("user_id") === process.env.OWNER_ID
//   ? ({
//       result: currentModules,
//       loading,
//       refetch: refetchModules,
//     } = useQuery(getModulesAll))
//   : ({
//       result: currentModules,
//       loading,
//       refetch: refetchModules,
//     } = useQuery(getUserModules));
</script>
