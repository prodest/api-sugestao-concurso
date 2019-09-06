import * as mongoose from 'mongoose';

const conn = process.env.URI_MONGO;

export const databaseProviders = [
  {
    provide: 'MongoConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(conn),
  },
];
