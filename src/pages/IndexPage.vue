<template>
  <q-page class="flex flex-center">
    <!-- <q-btn @click="cl">kjshgsdfgjk</q-btn> -->
  </q-page>
</template>

<script setup>
import { useMutation } from "@vue/apollo-composable";
import { createModule } from "src/graphql/mutations";

const { mutate: inviteGroup } = useMutation(createModule);

const cl = async () => {
  const currentDate = new Date();

  try {
    const { data } = await inviteGroup({
      input: {
        name: "Модуль1",
        property1: "Модуль1",
        property10: {
          date: currentDate.toLocaleDateString(),
          time: currentDate.toLocaleTimeString(),
        },
        property11: {
          date: currentDate.toLocaleDateString(),
          time: currentDate.toLocaleTimeString(),
        },
        property12: {
          6227464153175039000: "6880455107833567813",
        },
      },
    });

    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
</script>
