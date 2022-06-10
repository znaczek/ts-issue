import { useCustomerListQuery } from './graphql';
import { graphQLClient, useGraphqlClient } from './graphql-config';

export const useWithQuery = (queryHook: unknown, params: unknown): unknown => {
  const {authorization} = useGraphqlClient();
  const client = graphQLClient(authorization);
  return queryHook(client, params);
};

export const TestComponent = () => {
  const { data, isLoading, error } = useWithQuery(useCustomerListQuery, {
    includeTotalMarketValue: true,
    includePortfolioSummary: true,
    includeEmail: true,
    includePhone: true,
  });

  return <></>;
}
