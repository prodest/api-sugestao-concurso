import * as mongoose from 'mongoose';

const conn =
  process.env.URI_MONGO ||
  'mongodb://10.243.9.16:8080/identidade?retryWrites=true&w=majority';
export const databaseProviders = [
  {
    provide: 'MongoConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(conn),
  },
];
