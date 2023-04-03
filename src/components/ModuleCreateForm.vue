<template>
  <q-form
    class="bg-grey-2 q-pa-md rounded-borders shadow-5"
    style="min-width: 500px"
  >
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

    <footer class="q-mt-md">
      <q-btn
        class="w-100p"
        color="primary"
        label="Создать модуль"
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
import { createModule, createPage } from "src/graphql/mutations";
import { useRoute } from "vue-router";

const form = ref({
  name: "",
  responsible: "",
  date_start: date.formatDate(Date.now(), "YYYY/MM/DD"),
  date_end: date.formatDate(Date.now(), "YYYY/MM/DD"),
});

const showQDateStart = ref(false);
const showQDateEnd = ref(false);

const { mutate: creatingModule } = useMutation(createModule);
const { mutate: creatingPage } = useMutation(createPage);

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
        property4: {
          "2529884860175464566": form.value.responsible.value,
        },
        property5: {
          date: new Date(form.value.date_start).toLocaleDateString(),
          time: "01:00:00",
        },
        property6: {
          date: new Date(form.value.date_end).toLocaleDateString(),
          time: "23:58:00",
        },
      },
    });

    await creatingPage({
      input: {
        title: data.create_type2.record.name,
        parent_id: "1107262131192288825",
        object: {
          id: data.create_type2.record.id,
          type_id: data.create_type2.record.type_id,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const toggleShowQDateStart = () => {
  showQDateStart.value = !showQDateStart.value;
};

const toggleShowQDateEnd = () => {
  showQDateEnd.value = !showQDateEnd.value;
};

const optionsFnDateStart = (date) =>
  new Date(date).getTime() > Date.now() - 86_400_000;
const optionsFnDateEnd = (date) =>
  new Date(form.value.date_start).getTime() <= new Date(date).getTime();
</script>
