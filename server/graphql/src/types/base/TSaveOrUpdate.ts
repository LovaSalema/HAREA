import { Field, InputType } from "type-graphql"
import { GraphQLJSONObject, } from 'graphql-type-json';
import { TBase } from "./TBase";

@InputType()
export class TSaveOrUpdate<TClass extends TBase> {

    @Field(() => GraphQLJSONObject, { nullable: true })
    data?: TClass

    @Field(() => [GraphQLJSONObject], { nullable: true })
    datas?: Array<TClass>
}