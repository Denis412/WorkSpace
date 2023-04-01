<template>
  <table>
    <thead>
      <tr>
        <th v-for="headerColumn in headerColumns" :key="headerColumn">
          {{ headerColumn }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="contentRow in bodyContent" :key="contentRow.id">
        <td v-for="contentCell in contentRow" :key="contentCell">
          {{ contentCell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const { headerColumns, bodyContent } = defineProps({
  headerColumns: Array,
  bodyContent: Array,
});
</script>
