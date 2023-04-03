<template>
  <tbody>
    <tr v-for="task in moduleTasks" :key="task.id">
      <td class="flex q-pa-md items-center justify-center">
        {{ task.name }}
      </td>
    </tr>
    <pre>{{ moduleTasks }}</pre>
  </tbody>
</template>

<script setup>
const { moduleTasks } = defineProps({
  moduleTasks: Array,
});
</script>
