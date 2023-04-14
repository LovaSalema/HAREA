import { TListOfValue, TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm"
import { TEvaluationTemplate } from "./TEvaluationTemplate"

@Entity()
@ObjectType()
@MetadataClass({ name: 'evaluation' })
export class TEvaluation extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    email?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'text', nullable: true })
    @Metadata()
    message?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'mediumtext', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', nullable: true })
    @Metadata({ searchable: false })
    value?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'mediumtext', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', nullable: true })
    @Metadata({ searchable: false })
    result?: string

    @Field(() => Boolean, { defaultValue: false })
    @Column({ type: 'tinyint', default: false })
    @Metadata()
    isFinished: boolean

    @Field(() => TEvaluationTemplate, { nullable: true })
    @ManyToOne(() => TEvaluationTemplate, { lazy: true, nullable: true })
    @Metadata({ relation: 'TEvaluationTemplate' })
    evaluationTemplate?: TEvaluationTemplate

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return TEvaluation.canCreate()
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
export class TEvaluationsResponse extends TQueryResponse {
    @Field(() => [TEvaluation])
    data: TEvaluation[];
}
