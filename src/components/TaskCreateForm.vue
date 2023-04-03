<template>
  <q-form
    class="bg-grey-2 q-pa-md rounded-borders shadow-5"
    style="min-width: 500px"
  >
    <header class="text-h4 text-center q-mb-md">Задача</header>

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

      <q-select
        v-model="form.module"
        label="Модуль"
        :options="allModulesNames"
        placeholder="Выберите модуль"
      />
    </main>

    <footer class="q-mt-md">
      <q-btn
        class="w-100p"
        color="primary"
        label="Создать задачу"
        @click="createdTask"
      />
    </footer>
  </q-form>
</template>

<script setup>
import { computed, ref } from "vue";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { getExecutorGroupSubjects, getModulesAll } from "src/graphql/queries";
import { createTask } from "src/graphql/mutations";

const form = ref({
  name: "",
  description: "",
  executor: "",
  module: "",
});

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
          "6647062161604721421": form.value.module.value,
        },
      },
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
