import { useCustomerListQuery } from './graphql';
import { graphQLClient, useGraphqlClient } from './graphql-config';

export const useWitQuery = (queryHook: unknown, params: unknown): unknown => {
  const {authorization} = useGraphqlClient();
  const client = graphQLClient(authorization);
  return queryHook(client, params);
};

export const TestComponent = () => {
  const { data, isLoading, error } = useWitQuery(useCustomerListQuery, {
    includeTotalMarketValue: true,
    includePortfolioSummary: true,
    includeEmail: true,
    includePhone: true,
  });

  return <></>;
}
