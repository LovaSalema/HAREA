import { useContextUser, useContextUserOrganisations } from "@hooks/context"
import { useContextUserGroupRoles } from "@hooks/context/useContextUserGroupRoles"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { TEmployeeContract } from ".."
import { TQueryResponse } from "./TBase"
import { TFile } from "./TFile"
import { TSessionUser } from "./TSessionUser"
import { TSoftDeleteEntity } from "./TSoftDeleteEntity"
import { TUserGroup } from "./TUserGroup"

@Entity()
@ObjectType()
@MetadataClass({ name: 'user' })
export class TUser extends TSoftDeleteEntity {

    @Field(() => String, { nullable: true })
    @Column({ type: 'varchar', length: 50 })
    @Metadata()
    userName?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'varchar', length: 50 })
    @Metadata()
    userNameTolower?: string

    @Field(() => String, { nullable: true })
    @Column({ type: 'varchar', length: '255', nullable: true })
    @Metadata()
    phone?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    email?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    skype?: string

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    emailTolower?: string

    @Column({ type: 'varchar', length: '50' })
    password: string

    @Field(() => String)
    @Column({ type: 'varchar', length: '100', nullable: true })
    resetPasswordId?: string
    
    @Field(() => Date)
    @Column({ nullable: true })
    dateResetPasswordCreated?: Date
    
    @Field(() => Date)
    @Column({ nullable: true })
    dateEditPassword?: Date

    @Field(() => Boolean, { nullable: true })
    @Column({ default: false })
    @Metadata()
    isDisabled?: Boolean

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    firstName?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    lastName?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    fullName?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    job?: string

    @Field(() => [TEmployeeContract], { nullable: true })
    @ManyToMany(() => TEmployeeContract, { lazy: true })
    @JoinTable()
    @Metadata({ relation: 'TEmployeeContract' })
    recruitingContracts?: TEmployeeContract[]

    @OneToMany(() => TSessionUser, (session) => session.user, { nullable: true, lazy: true })
    @Field(() => [TSessionUser])
    sessionUsers?: TSessionUser[]

    @Field(() => Array<TUserGroup>, { nullable: true })
    @ManyToMany(() => TEmployeeContract, { lazy: true })
    @JoinTable()
    @Metadata({ relation: 'TUserGroup' })
    groups?: Array<TUserGroup>

    @Field(() => TUser, { nullable: true })
    @ManyToOne(() => TUser, { lazy: true, nullable: true })
    @Metadata({ readonly: true })
    userCreator?: TUser

    @Field(() => TFile, { nullable: true })
    @ManyToOne(() => TFile, { lazy: true, nullable: true })
    @Metadata({ relation: 'TFile' })
    profilePicture?: TFile

    @Field(() => TFile, { nullable: true })
    @ManyToOne(() => TFile, { lazy: true, nullable: true })
    @Metadata({ relation: 'TFile' })
    coverPicture?: TFile

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
    isEditable(){
        return this.isOwner()
    }

    @Field(type => Boolean)
    async isDeletable() {
        return false
    }

    static canCreate = async () => {
        const roles = await useContextUserGroupRoles()
        return roles.includes('USER_EDIT')
    }
}


@ObjectType()
export class TUsersResponse extends TQueryResponse {
    @Field(() => [TUser])
    data: TUser[];
}
