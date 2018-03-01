// @flow

import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { NodeInterface } from '../interface/NodeInterface';
import UserType from './UserType';
import ExpenseTypeEnum from './Enum/ExpenseTypeEnum';
import ExpenseStatusEnum from './Enum/ExpenseStatusEnum';
import * as UserLoader from '../loader/UserLoader';

export default new GraphQLObjectType({
  name: 'Expense',
  description: 'User data',
  fields: () => ({
    id: globalIdField('User'),
    _id: {
      type: GraphQLString,
      resolve: ({ _id }) => _id,
    },
    title: {
      type: GraphQLString,
      resolve: ({ title }) => title,
    },
    value: {
      type: GraphQLFloat,
      resolve: ({ value }) => value,
    },
    type: {
      type: ExpenseTypeEnum,
      resolve: ({ type }) => type,
    },
    status: {
      type: ExpenseStatusEnum,
      resolve: ({ status }) => status,
    },
    user: {
      type: UserType,
      resolve: ({ user }, args, context) => UserLoader.load(context, user),
    },
  }),
  interfaces: () => [NodeInterface],
});
