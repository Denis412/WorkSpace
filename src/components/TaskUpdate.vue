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
import { useMutation, useQuery } from "@vue/apollo-composable";
import { getModuleById } from "src/graphql/queries";
import { updateTask } from "src/graphql/mutations";
import TaskForm from "./TaskForm.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const { moduleId, task } = defineProps({
  moduleId: String,
  task: Object,
});

const showForm = ref(false);

const { mutate: updatingTask } = useMutation(updateTask);

const { refetch: refetchModule } = useQuery(getModuleById, {
  module_id: moduleId,
});

const updatedTask = async (form) => {
  console.log(form);
  try {
    await updatingTask({
      id: task.id,
      input: {
        name: form.name,
        property1: form.description,
        property2: {
          "2529884860175464566": form.executor.value,
        },
        property3: "4799030204995883472",
      },
    });

    refetchModule();

    $q.notify({
      type: "positive",
      message: "Задача обновлена!",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
