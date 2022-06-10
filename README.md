Issue description:
We created a hook `useWitQuery` (`src/issue.tsx` file) that wraps a hook from generated file (`src/graphql.tsx`) adding authorisation data and provides a graphQLClient.
We need our hook to accept any generated hook and properly infer the types e.g should work both with `useCustomerListQuery` and `useCustomerQuery`.
Since hooks in `src/graphql.tsx` are generated by aa 3rd party library, their high-level structure remains the same.

Now we need to type it in a way that when it's used (`TestComponent`) given the generated hook as the first parameter,
it should properly check types of second parameters (it's inferred from the provided hook)
and return proper data that the provided hook returns.

We have already a half-working solution, but removed it from the example to avoid bias.

Limitation: `src/graphql.tsx` is generated from gql queries, hence can't be modified.
