import * as mongoose from 'mongoose';

const conn =
  process.env.URI_MONGO ||
  'mongodb+srv://prodest:afvF0ACKtNOVOMCH@cluster0-6cnzg.mongodb.net/prodest?retryWrites=true&w=majority';

export const databaseProviders = [
  {
    provide: 'MongoConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(conn),
  },
];
