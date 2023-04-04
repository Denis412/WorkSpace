<template>
  <q-btn color="primary" @click="showForm = true" label="Создать задачу" />

  <q-dialog v-model="showForm">
    <q-card>
      <q-card-section class="text-h4 text-center">
        Создание задачи
      </q-card-section>

      <q-card-section class="q-pt-none">
        <TaskForm form-context="create" @submit-form="createTask" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import TaskForm from "./TaskForm.vue";
import { useQuasar } from "quasar";
import taskApi from "src/sdk/task";

const $q = useQuasar();

const { moduleId } = defineProps({
  moduleId: String,
});

const showForm = ref(false);

const createTask = async (form) => {
  try {
    await taskApi.taskCreate(form, moduleId);

    $q.notify({
      type: "positive",
      message: "Задача создана!",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
