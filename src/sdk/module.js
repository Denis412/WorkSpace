import { provideApolloClient, useMutation, useQuery } from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import { createModule, createPage,updateModule } from "src/graphql/mutations";
import { getModulesAll } from "src/graphql/queries";

provideApolloClient(apolloClient);

const { mutate: creatingModule } = useMutation(createModule);
const { mutate: creatingPage } = useMutation(createPage);
const { refetch: refetchModules } = useQuery(getModulesAll);
const { mutate: updatingModule } = useMutation(updateModule);

const moduleCreate = async (form) => {
  const { data: createdModule } = await creatingModule({
    input: {
      name: form.name,
      property4: {
        "2529884860175464566": form.responsible.value,
      },
      property5: {
        date: new Date(form.date_start).toLocaleDateString(),
        time: "01:00:00",
      },
      property6: {
        date: new Date(form.date_end).toLocaleDateString(),
        time: "23:58:00",
      },
    },
  });

  const { data: createdPage } = await creatingPage({
    input: {
      title: createdModule.create_type2.record.name,
      parent_id: "1107262131192288825",
      object: {
        id: createdModule.create_type2.record.id,
        type_id: createdModule.create_type2.record.type_id,
      },
    },
  });

  return { createdModule, createdPage };
};

const moduleUpdate = async(Moduleform,bufferModule) => {
  const filtredValue = {};

  Object.values(Moduleform).forEach((el, index) => {
    let keyName = Object.keys(Moduleform)[index];

    if (el != bufferModule[index]) filtredValue[keyName] = el;
  });
  const input = {};

  filtredValue.name ? (input.name = filtredValue.name) : null;
  filtredValue.responsible
    ? (input.property4 = {
        "2529884860175464566": filtredValue.responsible.value,
      })
    : null;
  filtredValue.date_start
    ? (input.property5 = {
        date: new Date(filtredValue.date_start).toLocaleDateString(),
      })
    : null;
  filtredValue.date_end
    ? (input.property6 = {
        date: new Date(filtredValue?.date_end).toLocaleDateString(),
      })
    : null;

  if (Object.entries(input).length != 0) {
    input.name = Moduleform.name;
    try {
      const { data } = await updatingModule({
        id: bufferModule.at(-1),
        input: input,
      });
      refetchModules();
    } catch (error) {
      console.log(error);
    }
  }
};

const moduleApi = { moduleCreate, moduleUpdate };

export default moduleApi;
