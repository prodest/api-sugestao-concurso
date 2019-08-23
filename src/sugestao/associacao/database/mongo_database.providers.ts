import * as mongoose from 'mongoose';

const conn =
  process.env.URI_MONGO ||
  'mongodb+srv://prodest:afvF0ACKtNOVOMCH@cluster0-6cnzg.mongodb.net/prodest?retryWrites=true&w=majority';
// 'mongodb+srv://espm:aWVafBlHL64ylXsc@cluster0-v75tt.mongodb.net/test?retryWrites=true&w=majority';
export const databaseProviders = [
  {
    provide: 'MongoConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(conn),
  },
];
