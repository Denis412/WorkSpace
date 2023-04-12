<template>
  <SortedTasks
    v-if="!groupBy"
    :tasks="resultModule?.get_type2.property7"
    :sortBy="sortBy"
    :listProperties="listProperties"
    :moduleId="moduleId"
  />

  <GroupedModuleTasks
    :tasks="resultModule?.get_type2.property7"
    :groupBy="groupBy"
    :listProperties="listProperties"
    :moduleId="moduleId"
  />
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getModuleById, getListProperty } from "src/graphql/queries";
import SortedTasks from "./SortedModuleTasks.vue";
import GroupedModuleTasks from "./GroupedModuleTasks.vue";

const { moduleId, sortBy, groupBy } = defineProps({
  moduleId: String,
  sortBy: String,
});

const updateTasks = inject("updateTasks");

const calculatedStatus = ref({});

const { result: listProperties } = useQuery(getListProperty);

const { result: resultModule, refetch: refetchModule } = useQuery(
  getModuleById,
  {
    module_id: moduleId,
  }
);

const deleteTask = async (taskId) => {
  try {
    await taskApi.taskDelete(taskId, moduleId, 0);

    updateTasks();
    refetchModule({
      module_id: moduleId,
    });

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

const sortTasks = computed(() => {
  console.log(resultModule.value);
  if (sortBy === "Сначала новые")
    return sortApi.sortDESCByCreate(resultModule.value?.get_module.tasks);
  else if (sortBy === "Сначала старые")
    return sortApi.sortASCByCreate(resultModule.value?.get_module.tasks);
  else if (sortBy === "По названию")
    return sortApi.sortByModuleName(resultModule.value?.get_module.tasks);
  else return resultModule.value?.get_module.tasks;
});
</script>
