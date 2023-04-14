import { useContext, useContextUser } from "@hooks/context"
import { TListOfValue, TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany } from "typeorm"

@Entity()
@ObjectType()
@MetadataClass({ name: 'wizardNode' })
export class TWizardNode extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    nodeKey?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    title?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    description?: string
    
    @Field(() => String, { nullable: true })
    @Column({ type: 'text', nullable: true })
    @Metadata({ searchable: false })
    value?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    comment?: string

    /**
     * tp: WIZARD_NODE_TAGS
     */
    @Field(() => [TListOfValue], { nullable: true })
    @ManyToMany(() => TListOfValue, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TListOfValue' })
    tags?: Array<TListOfValue>

    @Field(type => String)
    valueTitle(): Promise<string> | string {
        const obj = JSON.parse(this.value || '{}')
        return obj?.data?.title
    }

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return TWizardNode.canCreate()
    }

    @Field(type => Boolean)
    async isEditable(){
        return TWizardNode.canCreate()
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
export class TWizardNodesResponse extends TQueryResponse {
    @Field(() => [TWizardNode])
    data: TWizardNode[];
}
