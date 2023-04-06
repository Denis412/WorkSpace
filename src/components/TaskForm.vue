<template>
  <q-form style="min-width: 500px" @submit="$emit('submitForm', form)">
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
        v-if="task"
        v-model="form.status"
        :disable="!(form.status.label === 'Выполнена')"
        label="Статус"
        :options="[options.at(-1)]"
        placeholder="Выберите статус"
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
        :label="task ? 'Обновить задачу' : 'Создать задачу'"
        type="submit"
      />
    </footer>
  </q-form>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getExecutorGroupSubjects } from "src/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import {
  getTaskStatus,
  getAllStatusesForSelect,
} from "src/utils/getTaskStatus";

const { formContext, task } = defineProps({
  formContext: String,
  task: Object,
});

const options = getAllStatusesForSelect();

const form = ref({
  name: task?.name || "",
  description: task?.property1 || "",
  status: "",
  executor: {
    label: `${task?.property2.fullname.first_name || ""} ${
      task?.property2.fullname.last_name || ""
    }`,
    value: task?.property2.id || "",
  },
});

const { result: executorGroupSubjects } = useQuery(getExecutorGroupSubjects);

const executorGroupSubjectsNames = computed(() =>
  executorGroupSubjects.value?.get_group.subject.map((subject) => ({
    label: `${subject.fullname.first_name} ${subject.fullname.last_name}`,
    value: subject.id,
  }))
);

const calculatedStatus = (property) => {
  getTaskStatus(property)
    .then((status) => {
      form.value.status = {
        label: status.label,
        value: status.id,
      };
    })
    .catch((error) => console.log(error));
};

onMounted(async () => {
  calculatedStatus(task?.property3);
});
</script>
