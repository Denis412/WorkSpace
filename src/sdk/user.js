import {
  useMutation,
  provideApolloClient,
  useQuery,
} from "@vue/apollo-composable";
import { UserSignIn } from "src/graphql/mutations";
import { User, pages } from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";
import Cookies from "js-cookie";
import stompApi from "./stomp";

provideApolloClient(apolloClient);

const { mutate: userSignIn } = useMutation(UserSignIn);
const { refetch: refetchUser } = useQuery(User);
const { refetch: refetchPages } = useQuery(pages);

const signIn = async (form) => {
  const { data: signedInf, error: signInError } = await userSignIn({
    input: {
      login: form.email,
      password: form.password,
    },
  });

  if (signInError) throw signInError;

  console.log(signedInf.userSignIn.record.access_token);

  Cookies.set("token", signedInf.userSignIn.record.access_token);

  const { data: signedUser, error: fetchUserError } = await refetchUser({
    id: signedInf.userSignIn.recordId,
  });

  if (fetchUserError) throw fetchUserError;

  const { notificationSubscribe } = await stompApi.queueCreate();

  await refetchPages();

  Cookies.set("user_id", signedUser.user.id);
  Cookies.set("user_name", signedUser.user.name);
  Cookies.set("user_surname", signedUser.user.surname);
  Cookies.set("user_email", signedUser.user.email);
  Cookies.set("user_avatar", signedUser.user.avatar);

  Cookies.set("queue", notificationSubscribe.hash);

  return {
    user: signedUser.user,
    queue: notificationSubscribe.hash,
  };
};

const userApi = { signIn };

export default userApi;
