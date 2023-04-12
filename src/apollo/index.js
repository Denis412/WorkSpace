import { createUploadLink } from "apollo-upload-client";
import { createHttpLink, InMemoryCache, ApolloLink } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

export function getClientOptions() {
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_URI || "https://app.stud.druid.1t.ru/graphql",
  });

  const uploadLink = createUploadLink({
    uri: "https://app.stud.druid.1t.ru/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = Cookies.get("token");

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const link = ApolloLink.split(
    (operation) => operation.getContext().hasUpload,
    uploadLink,
    authLink.concat(httpLink)
  );

  return Object.assign(
    {
      link,
      cache: new InMemoryCache(),
    },
    process.env.MODE === "spa"
      ? {
          //
        }
      : {},
    process.env.MODE === "ssr"
      ? {
          //
        }
      : {},
    process.env.MODE === "pwa"
      ? {
          //
        }
      : {},
    process.env.MODE === "bex"
      ? {
          //
        }
      : {},
    process.env.MODE === "cordova"
      ? {
          //
        }
      : {},
    process.env.MODE === "capacitor"
      ? {
          //
        }
      : {},
    process.env.MODE === "electron"
      ? {
          //
        }
      : {},
    process.env.DEV
      ? {
          //
        }
      : {},
    process.env.PROD
      ? {
          //
        }
      : {},
    process.env.MODE === "ssr" && process.env.SERVER
      ? {
          ssrMode: true,
        }
      : {},
    process.env.MODE === "ssr" && process.env.CLIENT
      ? {
          ssrForceFetchDelay: 100,
        }
      : {}
  );
}
