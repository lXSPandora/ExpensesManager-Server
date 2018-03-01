import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'ExpenseTypeEnum',
  description: 'Enum to classify the type of the expense',
  values: {
    CREDIT_CARD_BILL: {
      value: 'CREDIT_CARD_BILL',
    },
    LIGHT_BILL: {
      value: 'LIGHT_BILL',
    },
    WATER_BILL: {
      value: 'WATER_BILL',
    },
    GASOLINE: {
      value: 'GASOLINE',
    },
    GENERIC_BILL: {
      value: 'GENERIC_BILL',
    },
  },
});
