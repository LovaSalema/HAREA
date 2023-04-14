import { useContext, useContextUser } from "@hooks/context"
import { TListOfValue, TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany } from "typeorm"
import { TWizardNode } from "./TWizardNode"

@Entity()
@ObjectType()
@MetadataClass({ name: 'wizard' })
export class TWizard extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    wizardKey?: string

    @Field(() => String, { nullable: true })
    @Column({ default: 'SEQUENTIAL' })
    @Metadata()
    type?: 'SEQUENTIAL' | 'FLOW'

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    title?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'text', nullable: true })
    @Metadata({ searchable: false })
    value?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    comment?: string
    
    @Field(() => [TListOfValue], { nullable: true })
    @ManyToMany(() => TListOfValue, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TListOfValue' })
    tags?: Array<TListOfValue>

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return TWizardNode.canCreate()
    }

    @Field(type => Boolean)
    isEditable(){
        return TWizard.canCreate()
    }

    @Field(type => Boolean)
    isDeletable(){
        return this.isEditable()
    }

    static canCreate = async () => {
        const context = useContext()
        const user = await useContextUser()
        return Boolean(user && context.appName === 'bo')
    }
}


@ObjectType()
export class TWizardsResponse extends TQueryResponse {
    @Field(() => [TWizard])
    data: TWizard[];
}
