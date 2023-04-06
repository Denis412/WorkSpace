<template>
  <tbody>
    <tr v-for="task in tasks.property2" :key="task.id">
      <td>
        {{ task.name }}
      </td>

      <td>
        {{ task.property1 }}
      </td>

      <td>
        {{ task.property3 }}
      </td>

      <td>
        <q-btn color="primary" label="Изменить статус" />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
const { tasks } = defineProps({
  tasks: Object,
});
</script>
