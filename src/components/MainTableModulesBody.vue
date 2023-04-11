<template>
  <tbody v-for="subject in modules" :key="subject.id">
    <div
      v-if="subject.modules.length && modules.length > 1"
      class="w-100p text-center text-h5"
    >
      {{ subject.fullname.first_name }}
    </div>

    <tr v-for="module in subject.modules" :key="module.id">
      <td class="q-pa-md text-center">
        {{ module.name }}
      </td>

      <td class="q-pa-md text-center">
        C {{ module.startdate.date }} {{ module.startdate.time }}
      </td>

      <td class="q-pa-md text-center">
        До {{ module.expirationdate.date }} {{ module.expirationdate.time }}
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
        <div>Назначены: {{ reduceTasks(module.tasks, 0) }}</div>
        <div>Выполнены: {{ reduceTasks(module.tasks, 1) }}</div>
        <div>Завершены: {{ reduceTasks(module.tasks, 2) }}</div>
      </td>

      <td v-if="isOwner" class="flex justify-center items-center">
        <ModuleAction :module="module" />
        <ModuleAction :moduleDelete="module" />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps, inject, ref } from "vue";
import ModuleAction from "./ModuleAction.vue";
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

const isOwner = inject("isOwner");

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

const reduceTasks = (tasks, status) => {
  if (!tasks.length) return 0;

  const checkedStatus =
    status === 0
      ? process.env.APPOINTED_ID
      : status === 1
      ? process.env.COMPLETED_ID
      : process.env.FINISHED_ID;

  return tasks.reduce(
    (sum, task) => (task.status === checkedStatus ? sum + 1 : sum + 0),
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
