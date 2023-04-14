import { TFile, TListOfValue, TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm"
import { TRecruitingCuriculumVitae } from "./TRecruitingCuriculumVitae"

@Entity()
@ObjectType()
@MetadataClass({ name: 'employeeContract' })
export class TEmployeeContract extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    designation?: string

    @Field(() => Boolean, { nullable: true })
    @Column({ default: false })
    @Metadata()
    isPublic?: boolean

    @Field(() => Boolean, { nullable: true })
    @Column({ default: false })
    @Metadata()
    isActive?: boolean

    @Field(() => TFile, { nullable: true })
    @ManyToOne(() => TFile, { lazy: true, nullable: true })
    @Metadata({ relation: 'TFile' })
    file?: TFile

    /**
     * tp: EMPOLYEE_CONTRACT_TAGS
     */
    @Field(() => [TListOfValue], { nullable: true })
    @ManyToMany(() => TListOfValue, { lazy: true, nullable: true })
    @JoinTable()
    @Metadata({ relation: 'TListOfValue' })
    tags?: Array<TListOfValue>

    isEditable(){
        return this.isSameOrganisation()
    }

    isDeletable(){
        return this.isEditable()
    }

    static canCreate = async () => {
        // Todo : add rules
        return true
    }
}


@ObjectType()
export class TEmployeeContractsResponse extends TQueryResponse {
    @Field(() => [TEmployeeContract])
    data: TEmployeeContract[];
}
