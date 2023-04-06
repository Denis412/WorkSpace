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
  createPermissionRule,
} from "src/graphql/mutations";
import { getModuleById } from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const { mutate: creatingTask } = useMutation(createTask);
const { mutate: updatingTask } = useMutation(updateTask);
const { mutate: deletingTask } = useMutation(deleteTask);
const { mutate: creatingPermissionRule } = useMutation(createPermissionRule);

const { refetch: refetchModule } = useQuery(getModuleById, {
  module_id: "1",
});

const taskCreate = async (form, moduleId) => {
  console.log(form, process.env.MODULE_ID);

  const { data: createdTask } = await creatingTask({
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

  const { data: createdPermissionRule } = await creatingPermissionRule({
    input: {
      model_type: "object",
      model_id: createdTask.create_type1.recordId,
      owner_type: "subject",
      owner_id: form.executor.value,
      level: 5,
    },
  });

  await refetchModule({
    module_id: moduleId,
  });

  return {
    createdTask,
    createdPermissionRule,
  };
};

const taskUpdate = async (form, taskId, moduleId) => {
  console.log(form);
  const { data } = await updatingTask({
    id: taskId,
    input: {
      name: form.name,
      property1: form.description,
      property2: {
        [process.env.SUBJECT_ID]: form.executor.value,
      },
      property3: form.status.value,
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
