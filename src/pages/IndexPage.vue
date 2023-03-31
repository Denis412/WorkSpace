<template>
  <q-page class="flex flex-center">
    <!-- <q-btn @click="cl">kjshgsdfgjk</q-btn> -->
  </q-page>
</template>

<script setup>
import { useMutation } from "@vue/apollo-composable";
import { userGroupInviteUser } from "src/graphql/mutations";

const { mutate: inviteGroup } = useMutation(userGroupInviteUser);

const cl = async () => {
  try {
    const { data } = await inviteGroup({
      input: {
        name: "Vika",
        surname: "Payko",
        email: "miapozilaa785@gmail.com",
        page_group_id: "4752300662842270917",
      },
    });

    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
</script>
