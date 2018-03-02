// @flow

import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    user: {
      type: ObjectId,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'expenses',
  },
);

export default mongoose.model('Expenses', Schema);
