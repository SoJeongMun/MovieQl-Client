import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://localhost:4000/",
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      {
        allMovies {
          title
        }
      }
    `,
  })
  .then((res) => console.log(res));

export default client;
