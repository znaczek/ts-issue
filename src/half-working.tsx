import { GraphQLClient } from 'graphql-request';
import { UseQueryOptions, UseQueryResult } from 'react-query';
import { graphQLClient, useGraphqlClient } from './graphql-config';

/**
 * Below one ensures type safety in TestComponent but requires @ts-ignore which is less them ideal
 */
export const useWithQuery = <
  H extends (...args: any) => ReturnType<H>
  >(
  queryHook: H,
  params: Parameters<H>[1]
): H extends (
    client: GraphQLClient,
    variables: Parameters<H>[1],
    options?: UseQueryOptions<infer R, infer E, infer R>,
    headers?: RequestInit['headers']
  ) => ReturnType<H>
  ? UseQueryResult<R, E>
  : any => {
  const { authorization } = useGraphqlClient();
  const client = graphQLClient(authorization);
  //@ts-ignore
  return queryHook(client, params);
};
