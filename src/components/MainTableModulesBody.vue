<template>
  <tbody v-for="subject in modules" :key="subject.id">
    <div v-if="subject.property4.length" class="w-100p text-center text-h5">
      {{ subject.fullname.first_name }}
    </div>
    <tr v-for="module in subject.property4" :key="module.id">
      <td class="q-pa-md text-center">
        {{ module.name }}
      </td>

      <td class="q-pa-md text-center">
        C {{ module.property5.date }} {{ module.property5.time }}
      </td>

      <td class="q-pa-md text-center">
        До {{ module.property6.date }} {{ module.property6.time }}
      </td>

      <td>
        <q-file filled v-model="fileUpload" label="Загрузить файл">
          <template #append>
            <q-icon
              class="cursor-pointer icon-hover"
              name="close"
              @click.stop.prevent="fileUpload = null"
            />

            <q-icon
              class="cursor-pointer icon-hover"
              name="upload"
              @click.stop.prevent="upload"
            />
          </template>
        </q-file>
      </td>

      <td class="q-pa-md text-center">
        <div>Назначены: {{ reduceTasks(module.property7, 0) }}</div>
        <div>Выполнены: {{ reduceTasks(module.property7, 1) }}</div>
        <div>Завершены: {{ reduceTasks(module.property7, 2) }}</div>
      </td>

      <td class="flex justify-center items-center">
        <ModuleAction :module="module" />
        <ModuleAction :moduleDelete="module" />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";
import ModuleAction from "./ModuleAction.vue";
import sortApi from "src/utils/sort.js";
import { useMutation } from "@vue/apollo-composable";
import { filesUpload } from "src/graphql/mutations";
import { Cookies } from "quasar";
const { modules, sortBy } = defineProps({
  modules: Object,
  sortBy: String,
});

const fileUpload = ref(null);

const { mutate: uploadingFiles } = useMutation(filesUpload, {
  context: {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  },
});

const upload = async () => {
  console.log(fileUpload.value);

  try {
    const { data: filesdd } = await uploadingFiles(
      {
        files: [fileUpload.value],
      },
      {
        context: {
          hasUpload: true,
        },
      }
    );

    console.log("files", filesdd);
  } catch (error) {
    console.log(error);
  }
};

const SortModules = computed(() => {
  if (sortBy === "Сначала новые")
    return sortApi.sortDESCByCreate(modules.property4);
  else if (sortBy === "Сначала старые")
    return sortApi.sortASCByCreate(modules.property4);
  else if (sortBy === "По названию")
    return sortApi.sortByModuleName(modules.property4);
  else return modules.property4;
});

const reduceTasks = (tasks, status) => {
  if (!tasks.length) return 0;

  const checkedStatus =
    status === 0
      ? process.env.APPOINTED_ID
      : status === 1
      ? process.env.COMPLETED_ID
      : process.env.FINISHED_ID;

  return tasks.reduce(
    (sum, task) => (task.property3 === checkedStatus ? sum + 1 : sum + 0),
    0
  );
};
</script>

<style lang="scss" scoped>
.icon-hover {
  &:hover {
    color: $primary;
  }
}
</style>
