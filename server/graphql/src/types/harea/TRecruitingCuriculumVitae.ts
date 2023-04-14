import { useContext, useContextUser } from "@hooks/context"
import { TDescriptor, TFile, TListOfValue, TQueryResponse, TUser } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { TEvaluation } from "./TEvaluation"
import { TRecruitingAdvert } from "./TRecruitingAdvert"
import { TRecruitingCuriculumVitaeComments } from "./TRecruitingCuriculumVitaeComments"

@Entity()
@ObjectType()
@MetadataClass({ name: 'recruitingCuriculumVitae' })
export class TRecruitingCuriculumVitae extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    name?: string

    
    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    phone?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    email?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    adress?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    school?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    degree?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    comment?: string
    
    // TDescriptor TP : RECRUITING_CV_STATE
    @Field(() => TDescriptor, { nullable: true })
    @ManyToOne(() => TDescriptor, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TDescriptor' })
    state?: TDescriptor

    @Field(() => [TRecruitingCuriculumVitaeComments], { nullable: true })
    @OneToMany(() => TRecruitingCuriculumVitaeComments, (item) => item.cv, { nullable: true, lazy: true })
    @Metadata({ relation: 'TWizardNode' })
    comments?: Array<TRecruitingCuriculumVitaeComments>

    @Field(() => TRecruitingAdvert, { nullable: true })
    @ManyToOne(() => TRecruitingAdvert, { lazy: true, nullable: true })
    @Metadata({ relation: 'TRecruitingAdvert' })
    recrutingAdvert?: TRecruitingAdvert

    @Field(() => TUser, { nullable: true })
    @ManyToOne(() => TUser, { lazy: true, nullable: true })
    @Metadata({ relation: 'TUser' })
    userEmployee?: TUser

    @Field(() => TFile, { nullable: true })
    @ManyToOne(() => TFile, { lazy: true, nullable: true })
    @Metadata({ relation: 'TFile' })
    profilePicture?: TFile

    @Field(() => [TFile], { nullable: true })
    @ManyToMany(() => TFile, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TFile' })
    files?: Array<TFile>

    @Field(() => [TEvaluation], { nullable: true })
    @ManyToMany(() => TEvaluation, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TEvaluation' })
    evaluations?: Array<TEvaluation>

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return TRecruitingAdvert.canCreate()
    }

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
export class TRecruitingCuriculumVitaesResponse extends TQueryResponse {
    @Field(() => [TRecruitingCuriculumVitae])
    data: TRecruitingCuriculumVitae[];
}
