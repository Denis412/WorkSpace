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
        Назначено: {{ reduceTasks(module, 0) }}
        Выполнено: {{ reduceTasks(module, 1) }}
        Завершено: {{ reduceTasks(module, 2) }}
      </td>
      <div class="row no-wrap">
        <ModuleAction :module="module"/>
        <ModuleAction :moduleDelete="module"/>
      </div>
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps, computed, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getTasksAll } from "src/graphql/queries";
import ModuleAction from "./ModuleAction.vue";
const { modules } = defineProps({
  modules: Array,
});

const { result: getTask } = useQuery(getTasksAll);
const task = computed(() => getTask.value?.paginate_type1.data);

const reduceTasks = (module, status) => {
  if (!module.property7.length)
    return 0;
  else {
    let sum = 0;
    if (status === 0) {
      task.value?.filter(item => item.property7.id === module.id)?.forEach(elem => {
        elem.property3 === "4799030204995883472" ? sum++ : null;
      });
      return sum;
    } else if (status === 1) {
      task.value?.filter(item => item.property7.id === module.id)?.forEach(elem => {
        elem.property3 === "4526730325823526303" ? sum++ : null;
      });
      return sum;
    } else {
      task.value?.filter(item => item.property7.id === module.id)?.forEach(elem => {
        elem.property3 === "2146013030427836869" ? sum++ : null;
      });
      return sum;
    }
  }
}

</script>
