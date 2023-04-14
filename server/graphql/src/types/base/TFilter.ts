import { Field, InputType, ObjectType } from "type-graphql"
import { GraphQLJSONObject } from 'graphql-type-json';

@InputType()
export class TFilter {

    @Field(() => Number, { nullable: true })
    id?: number

    @Field(() => Number, { nullable: true })
    page: number = 0

    @Field(() => Number, { nullable: true })
    pageSize?: number

    @Field(() => String, { nullable: true })
    key?: string

    @Field(() => [TFilterSort], { nullable: true })
    sort?: Array<TFilterSort>
    
    @Field(() => GraphQLJSONObject, { nullable: true })
    data?: TFilterData
}

export type TFilterData = {
    id?: number

    [key: string]: any
}

@InputType()
export class TFilterSort {

    @Field(() => String)
    value: string

    @Field(() => String)
    sort: TSortEnum
}

export type TSortEnum = 'ASC' | 'DESC'


@ObjectType()
export class TSaveOrUpdateResponse {
    @Field(() => Number, { nullable: true })
    id?: number;

    @Field(() => [Number], { nullable: true })
    ids?: Array<number>
}
