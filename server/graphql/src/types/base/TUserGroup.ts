import { useContextUser } from "@hooks/context"
import { useContextUserGroupRoles } from "@hooks/context/useContextUserGroupRoles"
import { TQueryResponse } from "@_types/base"
import { TDescriptor } from "@_types/base/TDescriptor"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { TSoftDeleteEntity } from "./TSoftDeleteEntity"
import { TUser } from "./TUser"
import { TUserOrganisation } from "./TUserOrganisation"

@Entity()
@ObjectType()
@MetadataClass({ name: 'userGroup' })
export class TUserGroup extends TSoftDeleteEntity {

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    groupKey?: string

    @Field(() => String)
    @Column()
    @Metadata()
    designation?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    comment?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    color?: string

    @Field(() => [TDescriptor], { nullable: true })
    @ManyToMany(() => TDescriptor, { lazy: true })
    @JoinTable()
    @Metadata({ relation: 'TDescriptor' })
    roles?: Array<TDescriptor>

    @Field(() => TUserOrganisation, { nullable: true })
    @ManyToOne(() => TUserOrganisation, (userOrganisation) => userOrganisation.groups, { lazy: true, nullable: true })
    @Metadata({ relation: 'TUserOrganisation' })
    organisation?: TUserOrganisation

    @Field(() => [TUser], { nullable: true })
    @ManyToMany(() => TUser, { lazy: true })
    @JoinTable()
    @Metadata({ relation: 'TUser' })
    users?: Array<TUser>

    @Field(() => TUser, { nullable: true })
    @ManyToOne(() => TUser, { lazy: true, nullable: true })
    @Metadata({ readonly: true })
    userCreator?: TUser

    @Field(type => Number)
    async userCount(){
        const users = await this.users
        return users.length
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

    async isEditable() {
        return (
            (await this.isOwner())
            || (await this.isSameOrganisation() && await TUserGroup.canCreate())
        )
    }

    isDeletable(){
        return this.isEditable()
    }

    static canCreate = async () => {
        const roles = await useContextUserGroupRoles()
        return roles.includes('ORGANISATION_GROUP')
    }
}


@ObjectType()
export class TUserGroupsResponse extends TQueryResponse {
    @Field(() => [TUserGroup])
    data: TUserGroup[];
}
