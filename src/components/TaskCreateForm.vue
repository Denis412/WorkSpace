<template>
  <q-btn color="primary" @click="showForm = true" label="Создать задачу" />

  <q-dialog v-model="showForm">
    <q-card>
      <q-card-section class="text-h4 text-center">
        Создание задачи
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form style="min-width: 500px" @submit="createdTask">
          <main>
            <q-input
              v-model="form.name"
              type="text"
              label="Название"
              placeholder="Введите название задачи"
            />

            <q-input
              v-model="form.description"
              type="text"
              label="Описание"
              placeholder="Введите описание задачи"
            />

            <q-select
              v-model="form.executor"
              label="Исполнитель"
              :options="executorGroupSubjectsNames"
              placeholder="Выберите исполнителя"
            />
          </main>

          <footer class="q-mt-md">
            <q-btn
              class="w-100p"
              color="primary"
              label="Создать задачу"
              type="submit"
            />
          </footer>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed, ref } from "vue";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { getExecutorGroupSubjects, getModulesAll } from "src/graphql/queries";
import { createTask } from "src/graphql/mutations";

const { moduleId } = defineProps({
  moduleId: String,
});

const form = ref({
  name: "",
  description: "",
  executor: "",
  module: "",
});

const showForm = ref(false);

const { mutate: creatingTask } = useMutation(createTask);
const { result: executorGroupSubjects } = useQuery(getExecutorGroupSubjects);
const { result: allModules } = useQuery(getModulesAll);

const executorGroupSubjectsNames = computed(() =>
  executorGroupSubjects.value?.get_group.subject.map((subject) => ({
    label: `${subject.fullname.first_name} ${subject.fullname.last_name}`,
    value: subject.id,
  }))
);

const allModulesNames = computed(() =>
  allModules.value?.paginate_type2.data.map((module) => ({
    label: module.name,
    value: module.id,
  }))
);

const createdTask = async () => {
  try {
    const { data } = await creatingTask({
      input: {
        name: form.value.name,
        property1: form.value.description,
        property2: {
          "2529884860175464566": form.value.executor.value,
        },
        property3: "4799030204995883472",
        property7: {
          "6647062161604721421": moduleId,
        },
      },
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
