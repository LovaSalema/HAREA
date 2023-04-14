import { Metadata } from '@_types/metadata/Metadata';
import { MetadataClass } from '@_types/metadata/MetadataClass';
import { Field, ObjectType } from 'type-graphql';
import { CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { TBase } from './TBase';

@ObjectType()
@MetadataClass()
export class TTimeStamp extends TBase {

    @Field(() => String)
    @CreateDateColumn()
    @Metadata()
    createdAt: string

    @Field(() => String)
    @UpdateDateColumn({ nullable: true })
    @Metadata()
    updatedAt?: string
}