import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import httpStatusPlugin from '../plugins/http-status.plugin';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      context: (ctx) => ctx,
      plugins: [httpStatusPlugin],
      subscriptions: {
        'subscriptions-transport-ws': {
          onConnect: (params) => ({ connectionParams: params }),
          path: '/graphql',
        },
      },
      typePaths: ['*/**/*.gql'],
      path: '/graphql',
      autoSchemaFile: join(process.cwd(), '/src/schema.gql'),
    }),
  ],
})
export class CustomGraphQLModule {}
