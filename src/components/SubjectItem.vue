<template>
  <div
    class="flex items-center q-pa-sm hover-menu-item rounded-borders cursor-pointer"
  >
    <q-icon name="person" />

    <div class="q-ml-sm">
      {{ subject?.fullname?.first_name }} {{ subject?.fullname?.last_name }}
    </div>
  </div>
</template>

<script setup>
const { subject } = defineProps({
  subject: Object,
});
</script>
