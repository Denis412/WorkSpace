<template>
  <tbody>
    <tr v-for="subject in subjects" :key="subject.id">
      <td class="q-pa-md text-center">
        <router-link :to="{ name: 'subject', params: { id: subject.id } }">
          <q-item
            clickable
            class="flex items-center justify-center rounded-borders"
          >
            {{ subject.fullname.first_name }}
          </q-item>
        </router-link>
      </td>

      <td class="q-pa-md text-center">
        {{ subject.fullname.last_name }}
      </td>

      <td class="q-pa-md text-center">
        {{ subject.email?.email }}
      </td>

      <td
        v-if="columnLength === 4"
        class="flex wrap q-pa-md justify-center items-center"
      >
        <q-item
          v-for="propertyObj in subject[calculatedPropertyName()]"
          :key="propertyObj.id"
          clickable
          class="flex rounded-borders q-pa-sm items-center"
        >
          {{ propertyObj.name }}
        </q-item>
      </td>
    </tr>
  </tbody>
</template>

<script setup>
const { subjects, propertyType, columnLength } = defineProps({
  subjects: Array,
  propertyType: String,
  columnLength: Number,
});

const calculatedPropertyName = () => {
  return propertyType === "Модули" ? "property4" : "property2";
};
</script>
