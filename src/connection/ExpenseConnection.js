// @flow

import { GraphQLInt } from 'graphql';

import { connectionDefinitions } from 'graphql-relay';

import Expense from '../type/Expense';

export default connectionDefinitions({
  name: 'Expense',
  nodeType: Expense,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
