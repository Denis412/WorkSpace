import { useQuery } from "@vue/apollo-composable";
import { getListProperty } from "src/graphql/queries";

const { result: listProperties, refetch } = useQuery(getListProperty);

export const getAllStatusesForSelect = () => {
  refetch().then((res) => res);

  return listProperties.value?.property.meta.options.map((status) => ({
    label: status.label,
    value: status.id,
  }));
};

export const getTaskStatus = (status_id) => {
  refetch().then((res) => res);

  return listProperties.value?.property.meta.options.find(
    (status) => status.id === status_id
  );
};
