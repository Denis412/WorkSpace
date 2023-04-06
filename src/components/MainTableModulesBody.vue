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
        <div>Назначено: {{ reduceTasks(0) }}</div>
        <div>Выполнено: {{ reduceTasks(1) }}</div>
        <div>Завершено: {{ reduceTasks(2) }}</div>
      </td>
      <ModuleAction :module="module" />
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps, computed } from "vue";
import ModuleAction from "./ModuleAction.vue";
const { modules } = defineProps({
  modules: Object,
});

const task = computed(() => modules?.property4[0].property7);

const reduceTasks = (status) => {
  if (!task.value?.length) return 0;

  console.log(task.value);

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
