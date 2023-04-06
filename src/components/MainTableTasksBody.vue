<template>
  <tbody>
    <tr v-for="task in tasks" :key="task.id">
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
  tasks: Array,
});
</script>
