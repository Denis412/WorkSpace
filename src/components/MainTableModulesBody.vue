<template>
  <tbody>
    <tr v-for="module in modules.property4" :key="module.id">
      <td class="q-pa-md text-center">
        {{ module.name }}
      </td>

      <!-- <td class="q-pa-md text-center">
        <router-link :to="{ name: 'subject', params: { id: module.id } }">
          {{ module.property4.fullname.first_name }}
          {{ module.property4.fullname.last_name }}
        </router-link>
      </td> -->

      <td class="q-pa-md text-center">
        C {{ module.property5.date }} {{ module.property5.time }}
      </td>

      <td class="q-pa-md text-center">
        До {{ module.property6.date }} {{ module.property6.time }}
      </td>

      <td class="q-pa-md text-center">
        Назначено: {{ reduceTasks(0) }} Выполнено:
        {{ reduceTasks(1) }} Завершено: {{ reduceTasks(2) }}
      </td>
      <ModuleAction :module="module" />
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getUserTasks } from "src/graphql/queries";
import ModuleAction from "./ModuleAction.vue";
const { modules } = defineProps({
  modules: Object,
});

const { result: getTask } = useQuery(getUserTasks);
const task = computed(() => getTask.value?.paginate_subject.data[0].property2);

const reduceTasks = (status) => {
  if (!task.value?.length) return 0;

  let sum = 0;

  if (status === 0) {
    task.value?.forEach((elem) => {
      elem.property3 === process.env.APPOINTED_ID ? sum++ : null;
    });
    return sum;
  } else if (status === 1) {
    task.value?.forEach((elem) => {
      elem.property3 === process.env.COMPLETED_ID ? sum++ : null;
    });
    return sum;
  } else {
    task.value?.forEach((elem) => {
      elem.property3 === process.env.FINISHED_ID ? sum++ : null;
    });
    return sum;
  }
};
</script>
