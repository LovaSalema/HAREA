import { useContextUser } from "@hooks/context"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm"
import { TQueryResponse } from "./TBase"
import { TEntityUserCreator } from "./TEntityUserCreator"

@Entity()
@ObjectType()
@MetadataClass({ name: 'listOfValue' })
export class TListOfValue extends TEntityUserCreator {
    
    @Field(() => String)
    @Metadata()
    @Column()
    valueKey?: string

    @Field(() => String)
    @Metadata()
    @Column()
    value?: string

    @Field(() => String)
    @Metadata()
    @Column()
    color?: string

    @Field(() => String)
    @Metadata()
    @Column()
    tp?: string

    @OneToOne(() => TListOfValue, { nullable: true })
    @JoinColumn({ name: "lov_id" })
    @Field(() => TListOfValue, { nullable: true })
    @Metadata({ relation: 'TListOfValue' })
    listOfValue?: TListOfValue

    @OneToMany(() => TListOfValue, (lov) => lov.listOfValue, { nullable: true, lazy: true })
    @Field(() => [TListOfValue], { nullable: true })
    @Metadata({ relation: 'TListOfValue' })
    listOfValues?: TListOfValue[]

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return TListOfValue.canCreate()
    }

    @Field(type => Boolean)
    isEditable(){
        return this.isSameOrganisation()
    }

    @Field(type => Boolean)
    isDeletable(){
        return this.isEditable()
    }

    static canCreate = async () => {
        const user = await useContextUser()
        return Boolean(user)
    }
}

@ObjectType()
export class TListOfValuesResponse extends TQueryResponse {
    @Field(() => [TListOfValue])
    data: TListOfValue[];
}
