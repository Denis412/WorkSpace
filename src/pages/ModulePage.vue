<template>
  <q-page>
    <MainTable/>
  </q-page>
</template>

<script setup>
import MainTable from 'src/components/MainTable.vue';
import { useQuery } from '@vue/apollo-composable';
import { getModules } from 'src/graphql/queries';

</script>
