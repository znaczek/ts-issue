import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** JavaScript Date object */
  Date: any;
  MonetaryAmount: any;
  /** JavaScript Date object as an UTC timestamp */
  UTCDateTime: any;
};

export type CustomerQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', id: string, name: string, customerId: string, lastUpdateDate?: any | null, serviceStatus?: { __typename?: 'ServiceStatus', priority?: number | null, status?: string | null } | null } };

export type CustomerQueryVariables = Exact<{
  customerID: Scalars['String'];
}>;

export const CustomerDocument = `
    query customer($customerID: String!) {
  customer(customerId: $customerID) {
    id
    name
    customerId
    serviceStatus {
      priority
      status
    }
    lastUpdateDate
  }
}
    `;
export const useCustomerQuery = <
TData = CustomerQuery,
  TError = unknown
    >(
      client: GraphQLClient,
  variables: CustomerQueryVariables,
  options?: UseQueryOptions<CustomerQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
useQuery<CustomerQuery, TError, TData>(
  ['customer', variables],
  fetcher<CustomerQuery, CustomerQueryVariables>(client, CustomerDocument, variables, headers),
  options
);

export type CustomerListQuery = { __typename?: 'Query', customers: Array<{ __typename?: 'Customer', id: string, customerId: string, displayName: string, email?: string | null, phone?: string | null, totalMarketValue?: number | null, govId?: string | null, weightedInterestRate?: number | null, serviceStatus?: { __typename?: 'ServiceStatus', priority?: number | null, status?: string | null, severity?: number | null } | null, collateralAccounts?: Array<{ __typename?: 'CollateralAccount', collateralAccountId: string } | null> | null, loans: Array<{ __typename?: 'Loan', loanObligor?: string | null, currentInterestRate?: number | null } | null>, pledgedAccountSummary?: { __typename?: 'PledgedAccountSummary', totalCollateralValue?: number | null } | null, portfolioSummary?: { __typename?: 'PortfolioSummary', totalOutstandingBalance?: number | null, availability?: number | null, numberOfLoans?: number | null, totalCommitment?: number | null } | null } | null> };

export type CustomerListQueryVariables = Exact<{
  includeTotalMarketValue: Scalars['Boolean'];
  includePortfolioSummary: Scalars['Boolean'];
  includeEmail: Scalars['Boolean'];
  includePhone: Scalars['Boolean'];
}>;

export const CustomerListDocument = `
    query customerList($includeTotalMarketValue: Boolean!, $includePortfolioSummary: Boolean!, $includeEmail: Boolean!, $includePhone: Boolean!) {
  customers {
    id
    customerId
    displayName
    email @include(if: $includeEmail)
    phone @include(if: $includePhone)
    totalMarketValue @include(if: $includeTotalMarketValue)
    govId
    weightedInterestRate
    serviceStatus {
      priority
      status
      severity
    }
    collateralAccounts {
      collateralAccountId
    }
    loans {
      loanObligor
      currentInterestRate
    }
    pledgedAccountSummary {
      totalCollateralValue
    }
    portfolioSummary @include(if: $includePortfolioSummary) {
      totalOutstandingBalance
      availability
      numberOfLoans
      totalCommitment
    }
  }
}
    `;
export const useCustomerListQuery = <
TData = CustomerListQuery,
  TError = unknown
    >(
      client: GraphQLClient,
  variables: CustomerListQueryVariables,
  options?: UseQueryOptions<CustomerListQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
useQuery<CustomerListQuery, TError, TData>(
  ['customerList', variables],
  fetcher<CustomerListQuery, CustomerListQueryVariables>(client, CustomerListDocument, variables, headers),
  options
);
