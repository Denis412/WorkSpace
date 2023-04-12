<template>
  <q-page class="flex flex-center">
    <pre>{{ currentModules }}</pre>
  </q-page>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getM } from "src/graphql/queries";

const { result: currentModules } = useQuery(getM);
</script>
