<template>
  <q-btn
    color="primary"
    @click="showForm = true"
    label="Редактировать задачу"
  />

  <q-dialog v-model="showForm">
    <q-card>
      <q-card-section class="text-h4 text-center">
        Редактирование задачи
      </q-card-section>

      <q-card-section class="q-pt-none">
        <TaskForm
          form-context="update"
          :task="task"
          @submit-form="updatedTask"
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

const { moduleId, task } = defineProps({
  moduleId: String,
  task: Object,
});

const showForm = ref(false);

const updatedTask = async (form) => {
  try {
    await taskApi.taskUpdate(form, task.id, moduleId);

    $q.notify({
      type: "positive",
      message: "Задача обновлена!",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
