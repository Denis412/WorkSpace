<template>
  <tbody>
    <tr
      v-for="task in sortTasks"
      :key="task.id"
      :style="{ 'background-color': calculatedCurrentStatus(task?.property3) }"
    >
      <td>
        <div class="link">
          {{ task.name }}
        </div>
      </td>

      <td>
        {{ task.property1 }}
      </td>

      <td>
        <router-link
          :to="{ name: 'subject', params: { id: task.property2.id } }"
        >
          {{ task.property2.fullname.first_name }}
        </router-link>
      </td>

      <td class="flex justify-center">
        <TaskAction
          :module-id="moduleId"
          title="Редактирование задачи"
          button-label="Изменить"
          :task="task"
        />

        <q-btn
          class="q-ml-md"
          @click="deleteTask(task.id)"
          color="negative"
          label="Удалить"
        />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getModuleById, getListProperty } from "src/graphql/queries";
import TaskAction from "./TaskAction.vue";
import taskApi from "src/sdk/task";
import sortApi from "src/utils/sort.js";
import { useQuasar } from "quasar";

const $q = useQuasar();

const { moduleId, pageId, sortBy } = defineProps({
  moduleId: String,
  sortBy: String
});

const calculatedStatus = ref({});

const { result: listProperties } = useQuery(getListProperty);

const { result: resultModule } = useQuery(getModuleById, {
  module_id: moduleId,
});

const deleteTask = async (taskId) => {
  try {
    await taskApi.taskDelete(taskId, moduleId, 0);

    $q.notify({
      type: "positive",
      message: "Задача удалена!",
    });
  } catch (error) {
    console.log(error);
  }
};

const calculatedCurrentStatus = (taskProperty) => {
  const obj = listProperties.value?.property.meta.options.find(
    (status) => status.id === taskProperty
  );

  calculatedStatus.value = obj;

  return obj?.color;
};

const sortTasks = computed(()=>{
  console.log(sortBy)
  if(sortBy==='Сначала новые')
    return sortApi.sortDESCByCreate( resultModule.value?.get_type2.property7 );
  else if(sortBy==='Сначала старые')
    return sortApi.sortASCByCreate( resultModule.value?.get_type2.property7 );
  else if(sortBy === 'По названию')
    return sortApi.sortByModuleName( resultModule.value?.get_type2.property7 );
  else
    return resultModule.value?.get_type2.property7;
})
</script>
