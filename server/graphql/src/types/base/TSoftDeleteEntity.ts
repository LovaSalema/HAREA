import { Metadata } from '@_types/metadata/Metadata';
import { MetadataClass } from '@_types/metadata/MetadataClass';
import { Field, ObjectType } from 'type-graphql';
import { DeleteDateColumn, Entity } from 'typeorm';
import { AliasFn, TBase } from './TBase';
import { TTimeStamp } from './TTimeStamp';

@ObjectType()
@MetadataClass()
export class TSoftDeleteEntity extends TTimeStamp {

    @Field(() => Date)
    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date
}