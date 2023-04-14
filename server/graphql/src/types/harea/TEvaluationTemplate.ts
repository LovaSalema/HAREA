import { TListOfValue, TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm"
import { TEvaluation } from "./TEvaluation"

@Entity()
@ObjectType()
@MetadataClass({ name: 'evaluationTemplate' })
export class TEvaluationTemplate extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    title?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'text', nullable: true })
    @Metadata({ searchable: false })
    description?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    comment?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'mediumtext', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', nullable: true })
    @Metadata({ searchable: false })
    value?: string

    @Field(() => Boolean, { defaultValue: false })
    @Column({ type: 'tinyint', default: false })
    @Metadata()
    isPublic: boolean

    @Field(() => String, { nullable: true })
    @Column({ type: 'mediumtext', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', nullable: true })
    @Metadata({ searchable: false })
    correction?: string
    
    @Field(() => [TListOfValue], { nullable: true })
    @ManyToMany(() => TListOfValue, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TListOfValue' })
    tags?: Array<TListOfValue>

    @Field(() => [TEvaluation], { nullable: true })
    @OneToMany(() => TEvaluation, (item) => item.evaluationTemplate, { nullable: true, lazy: true })
    @Metadata({ relation: 'TEvaluation' })
    evaluations?: Array<TEvaluation>

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return TEvaluationTemplate.canCreate()
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
        // Todo :  Add rules here
        return true
    }
}


@ObjectType()
export class TEvaluationTemplatesResponse extends TQueryResponse {
    @Field(() => [TEvaluationTemplate])
    data: TEvaluationTemplate[];
}
