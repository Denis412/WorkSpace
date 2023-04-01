<template>
  <table class="border-black-1 rounded-borders">
    <thead class="rounded-borders border-black-1">
      <tr>
        <th class="q-pa-md">Имя</th>
        <th class="q-pa-md">Фамилия</th>
        <th class="q-pa-md">Список групп</th>
      </tr>
    </thead>

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
  </table>
</template>

<script setup>
const { subjects } = defineProps({
  subjects: Array,
});

// const subjectColumns = () => {
//   Object.keys(subject).
// }
</script>

<style>
.border-bottom {
  border-bottom: 1px solid black;
}
</style>
