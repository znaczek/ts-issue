import { GraphQLClient } from 'graphql-request';
import { createContext, useContext } from 'react';

interface GraphqlClientContextProps {
  authorization: string;
}

export const GraphqlClientContext = createContext<GraphqlClientContextProps>({
  authorization: '',
});

export const useGraphqlClient = () => useContext(GraphqlClientContext);

export const graphQLClient = (authorization: string) => {
  return new GraphQLClient('http://example.com', {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
  });
};
