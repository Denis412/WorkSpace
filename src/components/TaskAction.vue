<template>
  <div>
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
            :executorEdit="executorEdit"
            @submit-form="actionTask"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import TaskForm from "./TaskForm.vue";
import { useQuasar } from "quasar";
import taskApi from "src/sdk/task";

const $q = useQuasar();

const { module, title, buttonLabel, task, executorEdit } = defineProps({
  module: Object,
  title: String,
  task: Object,
  buttonLabel: String,
  executorEdit: Boolean,
});

const showForm = ref(false);
const updateTasks = inject("updateTasks");

const actionTask = async (form) => {
  try {
    task
      ? await taskApi.taskUpdate(form, task.id, module)
      : await taskApi.taskCreate(form, module);

    updateTasks();

    $q.notify({
      type: "positive",
      message: task ? "Задача обновлена!" : "Задача создана",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
