import { TFile, TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm"
import { TRecruitingCuriculumVitae } from "./TRecruitingCuriculumVitae"

@Entity()
@ObjectType()
@MetadataClass({ name: 'recruitingCuriculumVitaeComment' })
export class TRecruitingCuriculumVitaeComments extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column({ type: 'text', nullable: true })
    @Metadata({ searchable: false })
    value?: string

    @Field(() => TRecruitingCuriculumVitae, { nullable: true })
    @ManyToOne(() => TRecruitingCuriculumVitae, { lazy: true, nullable: true })
    @Metadata({ relation: 'TRecruitingCuriculumVitae' })
    cv?: TRecruitingCuriculumVitae

    @Field(() => [TFile], { nullable: true })
    @ManyToMany(() => TFile, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TFile' })
    files?: Array<TFile>

    @Field(type => Boolean)
    isEditable(){
        return this.isSameOrganisation()
    }

    @Field(type => Boolean)
    isDeletable(){
        return this.isEditable()
    }
}


@ObjectType()
export class TRecruitingCuriculumVitaeCommentsResponse extends TQueryResponse {
    @Field(() => [TRecruitingCuriculumVitaeComments])
    data: TRecruitingCuriculumVitaeComments[];
}

