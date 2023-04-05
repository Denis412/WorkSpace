import {
  provideApolloClient,
  useMutation,
  useQuery,
} from "@vue/apollo-composable";
import {
  createTask,
  updateTask,
  deleteTask,
  deletePage,
} from "src/graphql/mutations";
import { getModuleById } from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const { mutate: creatingTask } = useMutation(createTask);
const { mutate: updatingTask } = useMutation(updateTask);
const { mutate: deletingTask } = useMutation(deleteTask);
const { mutate: deletingPage } = useMutation(deletePage);

const { refetch: refetchModule } = useQuery(getModuleById, {
  module_id: "1",
});

const taskCreate = async (form, moduleId) => {
  const { data } = await creatingTask({
    input: {
      name: form.name,
      property1: form.description,
      property2: {
        [process.env.SUBJECT_ID]: form.executor.value,
      },
      property3: process.env.APPOINTED_ID,
      property7: {
        [process.env.MODULE_ID]: moduleId,
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
        [process.env.SUBJECT_ID]: form.executor.value,
      },
      property3: process.env.APPOINTED_ID,
    },
  });

  await refetchModule({
    module_id: moduleId,
  });

  return data;
};

const taskDelete = async (taskId, moduleId, pageId) => {
  const { data } = await deletingTask({
    task_id: taskId,
  });

  await refetchModule({
    module_id: moduleId,
  });

  return data;
};

const taskApi = { taskCreate, taskUpdate, taskDelete };

export default taskApi;
