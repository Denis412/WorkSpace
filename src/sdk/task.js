import {
  provideApolloClient,
  useMutation,
  useQuery,
} from "@vue/apollo-composable";
import { createTask, updateTask } from "src/graphql/mutations";
import { getModuleById } from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const { mutate: creatingTask } = useMutation(createTask);
const { mutate: updatingTask } = useMutation(updateTask);

const { refetch: refetchModule } = useQuery(getModuleById, {
  module_id: "1",
});

const taskCreate = async (form, moduleId) => {
  const { data } = await creatingTask({
    input: {
      name: form.name,
      property1: form.description,
      property2: {
        "2529884860175464566": form.executor.value,
      },
      property3: "4799030204995883472",
      property7: {
        "6647062161604721421": moduleId,
      },
    },
  });

  await refetchModule({
    module_id: moduleId,
  });

  return data;
};

const taskUpdate = async (form, taskId, moduleId) => {
  const { data } = await updatingTask({
    id: taskId,
    input: {
      name: form.name,
      property1: form.description,
      property2: {
        "2529884860175464566": form.executor.value,
      },
      property3: "4799030204995883472",
    },
  });

  await refetchModule({
    module_id: moduleId,
  });

  return data;
};

const taskApi = { taskCreate, taskUpdate };

export default taskApi;
