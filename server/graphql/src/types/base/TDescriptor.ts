import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity } from "typeorm"
import { TBase, TEntityFn, TQueryResponse } from "./TBase"
@Entity()
@ObjectType()
@MetadataClass({ name: 'descriptor' })
export class TDescriptor extends TBase {
    
    @Field(() => String)
    @Metadata()
    @Column()
    descriptorKey?: string

    @Field(() => String)
    @Metadata()
    @Column()
    value?: string

    @Field(() => String)
    @Metadata()
    @Column()
    tp?: string

    @Field(() => String, { nullable: true })
    @Metadata()
    translationKey(){
        return `Generic.de.${this.value}`
    }
}

@ObjectType()
export class TDescriptorsResponse extends TQueryResponse {
    @Field(() => [TDescriptor])
    data: TDescriptor[];
}
