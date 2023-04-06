<template>
  <q-form style="min-width: 500px" @submit="$emit('submitForm', form)">
    <main>
      <q-input
        :disable="executorEdit"
        v-model="form.name"
        type="text"
        label="Название"
        placeholder="Введите название задачи"
      />

      <q-input
        :disable="executorEdit"
        v-model="form.description"
        type="text"
        label="Описание"
        placeholder="Введите описание задачи"
      />

      <q-select
        v-if="task"
        v-model="form.status"
        :disable="isDisabledSelectStatus"
        label="Статус"
        :options="[executorEdit ? options.at(1) : options.at(-1)]"
        placeholder="Выберите статус"
      />

      <q-select
        :disable="executorEdit"
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

const { formContext, task, executorEdit } = defineProps({
  formContext: String,
  task: Object,
  executorEdit: Boolean,
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

const isDisabledSelectStatus = computed(() =>
  executorEdit
    ? form.value.status.label !== "Назначена"
    : form.value.status.label !== "Выполнена"
);

const { result: executorGroupSubjects } = useQuery(getExecutorGroupSubjects);

const executorGroupSubjectsNames = computed(() =>
  executorGroupSubjects.value?.get_group.subject.map((subject) => ({
    label: `${subject.fullname.first_name} ${subject.fullname.last_name}`,
    value: subject.id,
  }))
);

const calculatedStatus = (property) => {
  form.value.status = getTaskStatus(property);
};

onMounted(async () => {
  calculatedStatus(task?.property3);
});
</script>
