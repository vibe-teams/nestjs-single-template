import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@InputType()
export class UserInput {
  @Field()
  username: string;

  @Field()
  name: string;

  @Field()
  password: string;
}

@ObjectType()
export class Login {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}
