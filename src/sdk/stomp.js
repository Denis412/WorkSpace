import {
  provideApolloClient,
  useMutation,
  useQuery,
} from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import { createQueue } from "src/graphql/mutations";
import { getUserModules, getUserTasks, pages } from "src/graphql/queries";
import Cookies from "js-cookie";
import stompClient from "src/lib/stompClient";

provideApolloClient(apolloClient);

const { mutate: creatingQueue } = useMutation(createQueue);

const { refetch: refetchPages } = useQuery(pages);
const { refetch: refetchModules } = useQuery(getUserModules);
const { refetch: refetchTasks } = useQuery(getUserTasks);

const queueCreate = async () => {
  const { data: createdQueue } = await creatingQueue();

  Cookies.set("queue", createdQueue.notificationSubscribe.hash);

  return createdQueue;
};

const stompConnect = () => {
  const queue = Cookies.get("queue");

  const onConnect = async () => {
    console.log("connected");

    let onMessage = (message) => {
      const messageObj = JSON.parse(message.body);

      console.log("Receive message:", messageObj);

      // if (
      //   messageObj.type === "object.created" ||
      //   messageObj.type === "page.created" ||
      //   messageObj.type === "object.updated" ||
      //   messageObj.type === "page.updated" ||
      //   messageObj.type === "object.deleted" ||
      //   messageObj.type === "page.deleted"
      // ) {

      console.log("owiwefjoiwejfoiwefgliwefgiwel");
      refetchPages();
      refetchTasks();
      refetchModules();
      // }

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
