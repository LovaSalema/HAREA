import { useContextUser } from '@hooks/context';
import { Metadata } from '@_types/metadata/Metadata';
import { MetadataClass } from '@_types/metadata/MetadataClass';
import { Field, ObjectType } from 'type-graphql';
import { ManyToOne } from 'typeorm';
import { TSoftDeleteEntity } from './TSoftDeleteEntity';
import { TUser } from './TUser';

@ObjectType()
@MetadataClass()
export class TEntityUserCreator extends TSoftDeleteEntity {

    @Field(() => TUser, { nullable: true })
    @ManyToOne(() => TUser, { lazy: true, nullable: true })
    @Metadata({ readonly: true })
    userCreator?: TUser

    @Field(type => Boolean)
    async isOwner(){
        return (await this.userCreator).id === (await useContextUser()).id
    }

    @Field(type => Boolean)
    async isSameOrganisation(){
        // Todo : create an organisation switch on the front end to make the comparison
        return false
    }
}
