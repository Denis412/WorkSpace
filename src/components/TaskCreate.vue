<template>
  <q-btn color="primary" @click="showForm = true" label="Создать задачу" />

  <q-dialog v-model="showForm">
    <q-card>
      <q-card-section class="text-h4 text-center">
        Создание задачи
      </q-card-section>

      <q-card-section class="q-pt-none">
        <TaskForm form-context="create" @submit-form="createdTask" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { getModuleById } from "src/graphql/queries";
import { createTask } from "src/graphql/mutations";
import TaskForm from "./TaskForm.vue";

const { moduleId } = defineProps({
  moduleId: String,
});

const showForm = ref(false);

const { mutate: creatingTask } = useMutation(createTask);

const { refetch: refetchModule } = useQuery(getModuleById, {
  module_id: moduleId,
});

const createdTask = async (form) => {
  try {
    const { data } = await creatingTask({
      input: {
        name: form.name,
        property1: form.description,
        property2: {
          "2529884860175464566": form.executor.value,
        },
        property3: "4799030204995883472",
        property7: {
          "6647062161604721421": moduleId,
        },
      },
    });

    refetchModule();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
