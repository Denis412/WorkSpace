<template>
  <q-form>
    <head>
      Создание нового модуля
    </head>

    <main>
      <q-input
        v-model="form.name"
        type="text"
        label="Название"
        placeholder="Введите название модуля"
      />

      <q-select
        v-model="form.responsible"
        label="Ответственный"
        :options="['1', '2']"
        placeholder="Выберите ответственного"
      />

      <div class="flex q-mt-md">
        <section class="flex column q-mx-sm">
          <div class="text-h6 text-center">Дата начала</div>

          <q-date v-model="form.date_start" :options="optionsFnDateStart" />
        </section>

        <section class="flex column q-mx-sm">
          <div class="text-h6 text-center">Дата окончания</div>

          <q-date v-model="form.date_end" :options="optionsFnDateEnd" />
        </section>
      </div>
    </main>

    <footer class="q-mt-md">
      <q-btn
        class="w-100p"
        color="primary"
        label="Создать"
        @click="createModule"
      />
    </footer>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import { date } from "quasar";

const form = ref({
  name: "",
  responsible: "",
  date_start: date.formatDate(Date.now(), "YYYY/MM/DD"),
  date_end: date.formatDate(Date.now(), "YYYY/MM/DD"),
});

const createModule = () => {};

const optionsFnDateStart = (date) =>
  new Date(date).getTime() > Date.now() - 86_400_000;
const optionsFnDateEnd = (date) =>
  new Date(form.value.date_start).getTime() <= new Date(date).getTime();
</script>
