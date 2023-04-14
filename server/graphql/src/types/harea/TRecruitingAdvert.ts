import { useContext, useContextUser } from "@hooks/context"
import { TDescriptor, TListOfValue, TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { TFile } from "@_types/base/TFile"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { TRecruitingCuriculumVitae } from "./TRecruitingCuriculumVitae"

@Entity()
@ObjectType()
@MetadataClass({ name: 'recruitingAdvert' })
export class TRecruitingAdvert extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    title?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'text', nullable: true })
    @Metadata({ searchable: false })
    description?: string

    @Field(() => Date, { nullable: true })
    @Column({ type: 'datetime', nullable: true })
    @Metadata()
    dateEnd?: Date

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    comment?: string

    @Field(() => [TFile], { nullable: true })
    @ManyToMany(() => TFile, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TFile' })
    images?: Array<TFile>
    
    /**
     * tp: RECRUITING_ADVERT_TAGS
     */
    @Field(() => [TListOfValue], { nullable: true })
    @ManyToMany(() => TListOfValue, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TListOfValue' })
    tags?: Array<TListOfValue>

    @Field(() => [TRecruitingCuriculumVitae], { nullable: true })
    @OneToMany(() => TRecruitingCuriculumVitae, (item) => item.recrutingAdvert, { nullable: true, lazy: true })
    @Metadata({ relation: 'TRecruitingCuriculumVitae' })
    cvs?: Array<TRecruitingCuriculumVitae>

    /**
     * tp: RECRUITING_ADVERT_CATEGORY
     */
    @Field(() => TDescriptor, { nullable: true })
    @ManyToOne(() => TDescriptor, { lazy: true, nullable: true })
    @Metadata({ relation: 'TDescriptor' })
    category?: TDescriptor

    /**
     * tp: RECRUITING_ADVERT_STATE
     */
    @Field(() => TDescriptor, { nullable: true })
    @ManyToOne(() => TDescriptor, { lazy: true, nullable: true })
    @Metadata({ relation: 'TDescriptor' })
    state?: TDescriptor

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

    static canCreate = async () => {
        // Todo :  Add rules here
        return true
    }
}


@ObjectType()
export class TRecruitingAdvertsResponse extends TQueryResponse {
    @Field(() => [TRecruitingAdvert])
    data: TRecruitingAdvert[];
}
