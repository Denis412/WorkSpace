<template>
  <tbody>
    <tr v-for="module in modules" :key="module.id">
      <td class="q-pa-md text-center">
        {{ module.name }}
      </td>

      <td class="q-pa-md text-center">
        <router-link
          :to="{ name: 'subject', params: { id: module.property4.id } }"
        >
          {{ module.property4.fullname.first_name }}
          {{ module.property4.fullname.last_name }}
        </router-link>
      </td>

      <td class="q-pa-md text-center">
        C {{ module.property5.date }} {{ module.property5.time }}
      </td>

      <td class="q-pa-md text-center">
        До {{ module.property6.date }} {{ module.property6.time }}
      </td>

      <td class="q-pa-md text-center">
        {{ module.property7.name }}
      </td>

      <td class="flex justify-between">
        <q-btn @click="showForm(module)" color="blue" label="Изменить" />
        <q-btn @click="showForm(module)" color="negative" label="Удалить" />
      </td>
    </tr>
  </tbody>

  <q-dialog v-model="show" full-width>
    <div class="bg-white q-pa-md">
      <q-form class="row justify-between" @submit="onSubmit">
        <q-input class="col-3" v-model="form.module_name" />

        <q-select
          class="col-3"
          v-model="form.user_name"
          :options="responsibleGroupSubjectsNames"
        />

        <q-btn
          @click="toggleShowQDateStart"
          color="primary"
          class="q-mt-md col-3"
          label="Выбрать дату начала"
        />

        <q-btn
          @click="toggleShowQDateEnd"
          color="primary"
          class="q-mt-md col-3"
          label="Выбрать дату окончания"
        />

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
        <div class="col-12 q-mt-md">
          <q-btn
            class="block"
            style="margin: 0 auto; width: 20%"
            label="Изменить"
            type="submit"
            v-close-popup
          />
        </div>
      </q-form>
    </div>
  </q-dialog>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { useQuery, useMutation } from "@vue/apollo-composable";
import {
  getResponsibleGroupSubjects,
  getModulesAll,
} from "src/graphql/queries";
import { updateModule } from "src/graphql/mutations";
import { date } from "quasar";

const { modules } = defineProps({
  modules: Array,
});

const show = ref(false);

const { result: responsibleGroupSubjects } = useQuery(
  getResponsibleGroupSubjects
);
const { refetch: refetchModules } = useQuery(getModulesAll);
const { mutate: updatingModule } = useMutation(updateModule);

const responsibleGroupSubjectsNames = computed(() =>
  responsibleGroupSubjects.value?.get_group.subject.map((subject) => ({
    label: `${subject.fullname.first_name} ${subject.fullname.last_name}`,
    value: subject.id,
  }))
);

const bufferModule = ref([]);

const showForm = (module) => {
  show.value = true;
  form.value.module_name = module.name;
  form.value.user_name = `${module.property4.fullname.first_name} ${module.property4.fullname.last_name}`;
  form.value.date_start = module.property5.date;
  form.value.date_end = module.property6.date;

  Object.values(form.value).forEach((el) => bufferModule.value.push(el));
  bufferModule.value.push(module.id);
};

const showQDateStart = ref(false);
const showQDateEnd = ref(false);

const form = ref({
  module_name: "",
  user_name: "",
  date_start: date.formatDate(Date.now(), "YYYY/MM/DD"),
  date_end: date.formatDate(Date.now(), "YYYY/MM/DD"),
});

const onSubmit = async () => {
  const filtredValue = {};

  Object.values(form.value).forEach((el, index) => {
    let keyName = Object.keys(form.value)[index];

    if (el != bufferModule.value[index]) filtredValue[keyName] = el;
  });
  const input = {};

  filtredValue.module_name ? (input.name = filtredValue.module_name) : null;
  filtredValue.user_name
    ? (input.property4 = {
        "2529884860175464566": filtredValue.user_name.value,
      })
    : null;
  filtredValue.date_start
    ? (input.property5 = {
        date: new Date(filtredValue.date_start).toLocaleDateString(),
      })
    : null;
  filtredValue.date_end
    ? (input.property6 = {
        date: new Date(filtredValue?.date_end).toLocaleDateString(),
      })
    : null;

  if (Object.entries(input).length != 0) {
    input.name = form.value.module_name;
    try {
      const { data } = await updatingModule({
        id: bufferModule.value.at(-1),
        input: input,
      });
      refetchModules();
    } catch (error) {
      console.log(error);
    }
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
