<template>
  <q-page>
    <MainTable
    :singleModule="module?.get_type1"
    :columnNames="columnNames"
    />
  </q-page>
</template>

<script setup>
import MainTable from 'src/components/MainTable.vue';
import { useQuery } from '@vue/apollo-composable';
import { getModuleById,getPage } from 'src/graphql/queries';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const id = route.params.id;

const { result:page } = useQuery(getPage,{
  id:id
})

const moduleId = computed(()=> page.value?.page.object?.id);

const { result: module } = useQuery(getModuleById,{
  module_id: moduleId
})

console.log(module.value?.get_type1);

const columnNames = ["Название","Ответственный","Дата и время начала","Дата и время окончания"]


</script>
