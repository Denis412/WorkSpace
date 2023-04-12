<template>
  <q-btn
    class="btn-position absolute"
    round
    flat
    icon="chevron_right"
    :class="{ rotate: dropdown }"
    @click="dropdown = !dropdown"
  />
  <tr
    v-for="task in group"
    :key="task.id"
    :style="{ 'background-color': calculatedCurrentStatus(task?.status) }"
    v-show="dropdown"
  >
    <td>
      {{ task.name }}
    </td>

    <td>
      {{ task.description }}
    </td>

    <td>
      {{ calculatedStatus?.label }}
    </td>

    <td>
      <TaskAction
        :module="module || task.module"
        title="Редактирование задачи"
        button-label="Изменить"
        :task="task"
        :executor-edit="true"
      />
      <q-btn
        v-if="deleteBtn"
        class="q-ml-md"
        @click="deleteTask(task.id)"
        color="negative"
        label="Удалить"
      />
    </td>
  </tr>
</template>

<script setup>
import taskApi from "src/sdk/task";
import TaskAction from "./TaskAction.vue";
import { useQuasar } from "quasar";
import { ref, defineProps } from "vue";

const { group, listProperties, module } = defineProps({
  group: Array,
  listProperties: Object,
  module: Object,
  deleteBtn: Boolean,
});

const dropdown = ref(false);

const $q = useQuasar();

const calculatedStatus = ref({});

const calculatedCurrentStatus = (taskProperty) => {
  const obj = listProperties?.property.meta.options.find(
    (status) => status.id === taskProperty
  );

  calculatedStatus.value = obj;

  return obj?.color;
};

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
</script>

<style lang="scss" scoped>
.rotate {
  transform: rotate(90deg);
}

.btn-position {
  top: 0;
  right: 0;
}
</style>
