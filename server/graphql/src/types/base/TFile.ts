import { TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity } from "typeorm"
import { TSoftDeleteEntity } from "./TSoftDeleteEntity"

@Entity()
@ObjectType()
@MetadataClass({ name: 'file' })
export class TFile extends TSoftDeleteEntity {

    @Field(() => String)
    @Column({ type: 'varchar', length: '255' })
    name: string

    @Field(() => String)
    @Column({ type: 'varchar', length: '72' })
    hash: string
    
    @Field(() => String, { nullable: true })
    @Column({ type: 'text', nullable: true })
    value?: string

    @Field(type => Boolean)
    canRead(){
        return true
    }

    @Field(type => Boolean)
    isEditable(){
        return false
    }

    @Field(type => Boolean)
    isDeletable(){
        return false
    }
}


@ObjectType()
export class TFilesResponse extends TQueryResponse {
    @Field(() => [TFile])
    data: TFile[];
}
