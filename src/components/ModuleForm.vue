<template>
  <div class="q-pa-md rounded-borders bg">
    <q-form @submit="onSubmit">
      <header class="text-h4 text-center q-mb-md bg">{{ moduleName }}</header>

      <main class="bg">
        <q-input
          v-model="form.name"
          type="text"
          label="Название"
          placeholder="Введите название модуля"
        />

        <q-select
          v-model="form.responsible"
          label="Ответственный"
          :options="responsibleGroupSubjectsNames"
          placeholder="Выберите ответственного"
        />

        <div class="flex column">
          <q-btn
            @click="toggleShowQDateStart"
            color="primary"
            class="q-mt-md"
            label="Выбрать дату начала"
          />

          <q-btn
            @click="toggleShowQDateEnd"
            color="primary"
            class="q-mt-md"
            label="Выбрать дату окончания"
          />
        </div>

        <q-dialog v-model="showQDateStart">
          <q-date v-model="form.date_start" :options="optionsFnDateStart">
            <q-btn
              class="w-100p"
              color="primary"
              label="Выбрать"
              @click="toggleShowQDateStart"
            />
          </q-date>
        </q-dialog>

        <q-dialog v-model="showQDateEnd">
          <q-date v-model="form.date_end" :options="optionsFnDateEnd">
            <q-btn
              class="w-100p"
              color="primary"
              label="Выбрать"
              @click="toggleShowQDateEnd"
            />
          </q-date>
        </q-dialog>
      </main>

      <footer class="bg">
        <div class="col-12 q-mt-md">
          <q-btn
            class="block"
            style="margin: 0 auto"
            :label="btnName"
            type="submit"
            v-close-popup
          />
        </div>
      </footer>
    </q-form>
  </div>
</template>

<script setup>
import { defineEmits, ref, defineProps, computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getResponsibleGroupSubjects } from "src/graphql/queries";
import { date } from "quasar";

const emit = defineEmits(["onSubmit"]);
const { moduleName, module, btnName } = defineProps({
  moduleName: String,
  module: Object,
  btnName: String,
});

const form = ref({
  name: module?.name || "",
  responsible: `${module?.property4?.fullname?.first_name || ""} ${
    module?.property4?.fullname?.last_name || ""
  }`.trim(),
  date_start:
    module?.property5?.date || date.formatDate(Date.now(), "YYYY/MM/DD"),
  date_end:
    module?.property6?.date || date.formatDate(Date.now(), "YYYY/MM/DD"),
});

const onSubmit = () => {
  emit("onSubmit", form.value);
};

const toggleShowQDateStart = () => {
  showQDateStart.value = !showQDateStart.value;
};

const toggleShowQDateEnd = () => {
  showQDateEnd.value = !showQDateEnd.value;
};

const showQDateStart = ref(false);
const showQDateEnd = ref(false);

const optionsFnDateStart = (date) =>
  new Date(date).getTime() > Date.now() - 86_400_000;
const optionsFnDateEnd = (date) =>
  new Date(form.value.date_start).getTime() <= new Date(date).getTime();

const { result: responsibleGroupSubjects } = useQuery(
  getResponsibleGroupSubjects
);

const responsibleGroupSubjectsNames = computed(() =>
  responsibleGroupSubjects.value?.get_group.subject.map((subject) => ({
    label: `${subject.fullname.first_name} ${subject.fullname.last_name}`,
    value: subject.id,
    user_id: subject.user_id,
  }))
);
</script>

<style lang="scss" scoped></style>
