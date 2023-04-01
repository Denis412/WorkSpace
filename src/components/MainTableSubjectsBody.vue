<template>
  <tbody>
    <tr v-for="subject in subjects" :key="subject.id" class="border-bottom">
      <td class="q-pa-md text-center">
        {{ subject.fullname.first_name }}
      </td>

      <td class="q-pa-md text-center">
        {{ subject.fullname.last_name }}
      </td>

      <td class="q-pa-md text-center">
        <div v-for="group in subject.group" :key="group.id">
          {{ group.name }}
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script setup>
const { subjects } = defineProps({
  subjects: Array,
});
</script>
