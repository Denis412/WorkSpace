<template>
  <q-btn color="primary" @click="showForm = true" :label="buttonLabel" />

  <q-dialog v-model="showForm">
    <q-card>
      <q-card-section class="text-h4 text-center">
        {{ title }}
      </q-card-section>

      <q-card-section class="q-pt-none">
        <TaskForm
          form-context="create"
          :task="task"
          @submit-form="actionTask"
        />
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

const { moduleId, title, buttonLabel, task } = defineProps({
  moduleId: String,
  title: String,
  task: Object,
  buttonLabel: String,
});

const showForm = ref(false);

const actionTask = async (form) => {
  try {
    task
      ? await taskApi.taskUpdate(form, task.id, moduleId)
      : await taskApi.taskCreate(form, moduleId);

    $q.notify({
      type: "positive",
      message: task ? "Задача обновлена!" : "Задача создана",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
