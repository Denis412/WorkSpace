<template>
  <q-page class="q-pa-md">
    <div class="text-h3 text-center q-pb-md">
      Модули
    </div>
    <MainTable
    :modules="modules?.paginate_type2?.data"
    :columnNames="columnNames"/>

    <div class="flex justify-end q-mt-lg">
      <q-btn
      @click="showCreateForm=true"
      color="blue"
      label="Создать модуль"
      float-right/>
    </div>
    <q-dialog
    v-model="showCreateForm"
    >
    <div>
      <ModuleCreateForm/>
    </div>
  </q-dialog>
  </q-page>
</template>

<script setup>
import MainTable from 'src/components/MainTable.vue';
import { useQuery } from '@vue/apollo-composable';
import { getModulesAll } from 'src/graphql/queries';
import { ref } from 'vue';
import ModuleCreateForm from 'src/components/ModuleCreateForm.vue';

const showCreateForm = ref(false);

const {result: modules} = useQuery(getModulesAll);
const columnNames = ["Название","Ответственный","Дата и время начала","Дата и время окончания","Задачи"]

</script>
