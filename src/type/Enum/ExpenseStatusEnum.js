import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'ExpenseStatusEnum',
  description: 'Enum to classify the status of the expense',
  values: {
    PAID: {
      value: 'PAID',
    },
    NOT_PAID: {
      value: 'NOT_PAID',
    },
  },
});
