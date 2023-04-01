<template>
  <q-form class="bg-grey-2 q-pa-md rounded-borders shadow-5">
    <header class="text-h4 text-center q-mb-md">Модуль</header>

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
        :options="responsibleGroupSubjectsNames"
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
        @click="createdModule"
      />
    </footer>
  </q-form>
</template>

<script setup>
import { computed, ref } from "vue";
import { date } from "quasar";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { getResponsibleGroupSubjects } from "src/graphql/queries";
import { createModule } from "src/graphql/mutations";

const form = ref({
  name: "",
  responsible: "",
  date_start: date.formatDate(Date.now(), "YYYY/MM/DD"),
  date_end: date.formatDate(Date.now(), "YYYY/MM/DD"),
});

const { mutate: creatingModule } = useMutation(createModule);
const { result: responsibleGroupSubjects } = useQuery(
  getResponsibleGroupSubjects
);

const responsibleGroupSubjectsNames = computed(() =>
  responsibleGroupSubjects.value?.get_group.subject.map((subject) => ({
    label: `${subject.fullname.first_name} ${subject.fullname.last_name}`,
    value: subject.id,
  }))
);

const createdModule = async () => {
  try {
    const { data } = await creatingModule({
      input: {
        name: form.value.name,
        property5: form.value.name,
        property6: {
          "6227464153175039134": form.value.responsible.value,
        },
        property7: {
          date: new Date(form.value.date_start).toLocaleDateString(),
          time: "01:00:00",
        },
        property8: {
          date: new Date(form.value.date_end).toLocaleDateString(),
          time: "23:58:00",
        },
      },
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const optionsFnDateStart = (date) =>
  new Date(date).getTime() > Date.now() - 86_400_000;
const optionsFnDateEnd = (date) =>
  new Date(form.value.date_start).getTime() <= new Date(date).getTime();
</script>
