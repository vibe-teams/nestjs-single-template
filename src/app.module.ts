import { Module } from '@nestjs/common';
import * as modules from './modules';
import * as resolvers from './resolvers';

@Module({
  imports: Object.values(modules),
  providers: [...Object.values(resolvers)],
})
export class AppModule {}
