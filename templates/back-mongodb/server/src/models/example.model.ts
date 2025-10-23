import mongoose from 'mongoose';

const ExampleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
);

export const Example = mongoose.model('Example', ExampleSchema);
