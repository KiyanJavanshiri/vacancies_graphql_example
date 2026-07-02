import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({ uri: import.meta.env.VITE_API_URL });
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});
