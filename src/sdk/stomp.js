import { provideApolloClient, useMutation } from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import { createQueue } from "src/graphql/mutations";
import Cookies from "js-cookie";
import stompClient from "src/lib/stompClient";

provideApolloClient(apolloClient);

const { mutate: creatingQueue } = useMutation(createQueue);

const queueCreate = async () => {
  try {
    const { data: createdQueue } = await creatingQueue();

    return createdQueue;
  } catch (error) {
    console.log(error);
  }
};

const stompConnect = () => {
  const queue = Cookies.get("queue");

  const onConnect = async () => {
    console.log("connected");

    let onMessage = (message) => {
      console.log("Receive message:", JSON.parse(message.body));

      message.ack();
    };

    stompClient.subscribe(`/amq/queue/${queue}`, onMessage, { ack: "client" });
  };

  const onError = (msg) => {
    console.log("Error", msg);
  };

  const onClose = (msg) => {
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
};

const stompApi = { queueCreate, stompConnect };

export default stompApi;
