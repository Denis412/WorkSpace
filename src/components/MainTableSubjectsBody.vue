<template>
  <tbody>
    <tr v-for="subject in subjects" :key="subject.id">
      <!-- <pre>{{ subject }}</pre> -->
      <td class="q-pa-md hover-item link">
        <router-link :to="{ name: 'subject', params: { id: subject.id } }">
          {{ subject.fullname.first_name }}
        </router-link>
      </td>

      <td class="q-pa-md text-center">
        {{ subject.fullname.last_name }}
      </td>

      <td class="q-pa-md text-center">
        {{ subject.email?.email }}
      </td>

      <td v-if="columnLength === 4" class="flex wrap">
        <div
          class="q-pa-sm link hover-item rounded-borders"
          v-for="propertyObj in subject[calculatedPropertyName()]"
          :key="propertyObj.id"
        >
          <router-link :to="{ name: 'page', params: { id: propertyObj.id } }">
            {{ propertyObj.name }}
          </router-link>
        </div>
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
