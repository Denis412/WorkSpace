<template>
  <tbody>
    <tr v-for="task in resultModule?.get_type2.property7" :key="task.id">
      <td class="flex q-pa-md items-center justify-center">
        {{ task.name }}
      </td>
    </tr>
    <pre>{{ resultModule }}</pre>
  </tbody>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getModuleById } from "src/graphql/queries";

const { moduleId } = defineProps({
  moduleId: String,
});

const { result: resultModule, loading } = useQuery(getModuleById, {
  module_id: moduleId,
});
</script>
