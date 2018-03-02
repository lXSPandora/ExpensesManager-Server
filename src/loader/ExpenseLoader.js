// @flow
import DataLoader from 'dataloader';
import { Expense as ExpenseModel } from '../model';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';

import type { ConnectionArguments } from 'graphql-relay';
import type { GraphQLContext } from '../TypeDefinition';

type ExpenseType = {
  id: string,
  _id: string,
  title: string,
  value: number,
  type: string,
  status: string,
  dateToPay: string,
  user: string,
};

export default class ExpenseType {
  id: string;
  _id: string;
  title: string;
  value: number;
  type: string;
  status: string;
  dateToPay: string;
  user: string;

  constructor(data: ExpenseType) {
    this.id = data.id;
    this._id = data._id;
    this.title = data.title;
    this.value = data.value;
    this.type = data.type;
    this.status = data.status;
    this.dateToPay = data.dateToPay;
    this.user = data.user;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(ExpenseModel, ids));

const viewerCanSee = () => true;

export const load = async (context: GraphQLContext, id: string): Promise<?Board> => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.ExpenseLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new Board(data, context) : null;
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => dataloaders.BoardLoader.clear(id.toString());

export const loadUserExpenses = (context: GraphQLContext, args: ConnectionArguments, user: string) => {
  const Expenses = ExpenseModel.find({
    user,
  });

  return connectionFromMongoCursor({
    cursor: Expenses,
    context,
    args,
    loader: load,
  });
};

export const loadExpenses = async (context: GraphQLContext, args: ConnectionArguments) => {
  const Expenses = Expenses.find({});

  return connectionFromMongoCursor({
    cursor: Expenses,
    context,
    args,
    loader: load,
  });
};
