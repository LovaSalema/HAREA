import { useContextUser } from "@hooks/context"
import { useContextUserGroupRoles } from "@hooks/context/useContextUserGroupRoles"
import {  TDescriptor, TFile, TQueryResponse, TUser } from "@_types/base"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { TSoftDeleteEntity } from "./TSoftDeleteEntity"
import { TUserGroup } from "./TUserGroup"

@Entity()
@ObjectType()
@MetadataClass({ name: 'userOrganisation' })
export class TUserOrganisation extends TSoftDeleteEntity {

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    organisationKey?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    designation?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    email?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    phone?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    comment?: string

    @Field(() => [TUserGroup], { nullable: true })
    @OneToMany(() => TUserGroup, (user) => user.organisation, { lazy: true, nullable: true })
    @Metadata()
    groups?: Array<TUserGroup>

    @Field(() => [TDescriptor], { nullable: true })
    @ManyToMany(() => TDescriptor, { lazy: true })
    @JoinTable()
    @Metadata({ relation: 'TDescriptor' })
    roles?: Array<TDescriptor>

    @Field(() => TUser, { nullable: true })
    @ManyToOne(() => TUser, { lazy: true, nullable: true })
    @Metadata({ readonly: true })
    userCreator?: TUser

    @Field(() => TFile, { nullable: true })
    @ManyToOne(() => TFile, { lazy: true, nullable: true })
    @Metadata({ relation: 'TFile' })
    logo?: TFile

    @Field(type => Number)
    async userCount(){
        const groups = await this.groups
        const counts = await Promise.all(groups.map((group) => group.userCount()))
        return counts.reduce((all, item) => all + item, 0)
    }

    @Field(type => Boolean)
    async isOwner(){
        return (await this.userCreator).id === (await useContextUser()).id
    }

    @Field(type => Boolean)
    async isSameOrganisation(){
        // Todo : create an organisation switch on the front end to make the comparison
        return false
    }

    @Field(type => Boolean)
    async isEditable(){
        return (
            (await this.isOwner())
            || (await this.isSameOrganisation() && await TUserGroup.canCreate())
        )
    }

    @Field(type => Boolean)
    async canUpdateRoles(){
        if (this.organisationKey === 'ISA_SOLUTIONS') {
            return false
        }

        return true
        // const org = await useContextUserOrganisations()
        // return org.organisationKey === 'ISA_SOLUTIONS' && await TUserGroup.canCreate()
    }

    @Field(type => Boolean)
    isDeletable(){
        return this.isEditable()
    }

    static canCreate = async () => {
        const roles = await useContextUserGroupRoles()
        return roles.includes('ORGANISATION')
    }
}


@ObjectType()
export class TUserOrganisationsResponse extends TQueryResponse {
    @Field(() => [TUserOrganisation])
    data: TUserOrganisation[];
}
