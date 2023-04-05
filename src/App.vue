<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import stompClient from "src/lib/stompClient";

console.log(stompClient);

let headers = {
  login: "d.a.malyshev22@gmail.com",
  passcode: "@3P^Lgdab)sv",
};

let queue =
  "user.5571026735801383150.notifications.1ef93875-adc7-4663-a6bc-3ae4126a2740";

let onConnect = async () => {
  console.log("connected");

  let onMessage = (message) => {
    console.log("Receive message:", JSON.parse(message.body));

    message.ack();
  };

  stompClient.subscribe(`/queue/${queue}`, onMessage, { ack: "client" });
};

let onError = (msg) => {
  console.log("Error", msg);
};

let onClose = (msg) => {
  console.log("Close", msg);
};

stompClient.connect(
  "readonly",
  "@3P^Lgdab)sv",
  onConnect,
  onError,
  "/",
  onClose
);
</script>
