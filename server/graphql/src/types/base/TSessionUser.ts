import { TQueryResponse } from "@_types/base"
import { TTimeStamp } from "@_types/base/TTimeStamp"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { TSession } from "./TSession"
import { TSessionUserDate } from "./TSessionUserDate"
import { TUser } from "./TUser"

@Entity()
@ObjectType()
@MetadataClass({ name: 'sessionUser' })
export class TSessionUser extends TTimeStamp {

    @ManyToOne(() => TSession, {nullable: true, lazy: true})
    @JoinColumn()
    @Field(() => TSession)
    session: TSession

    @Field(() => Boolean, { defaultValue: false })
    @Column({ type: 'tinyint', default: false })
    @Metadata()
    remember: boolean

    @Field(() => Boolean, { defaultValue: false })
    @Column({ type: 'tinyint', default: false })
    @Metadata()
    authenticated: boolean

    @Field(() => Boolean, { defaultValue: false })
    @Column({ type: 'tinyint', default: false })
    @Metadata()
    active: boolean

    @OneToMany(() => TSessionUserDate, (sessionUserDate) => sessionUserDate.sessionUser, { lazy: true, nullable: true })
    @Field(() => [TSessionUserDate])
    sessionUserDates?: TSessionUserDate[]

    @ManyToOne(() => TUser, (user) => user.sessionUsers, {nullable: true, lazy: true})
    @Field(() => TUser, { nullable: true })
    user: TUser
    
    @Field(type => Boolean)
    isEditable(){
        return false
    }

    @Field(type => Boolean)
    isDeletable(){
        return false
    }

    static canCreate = () => {
        return false
    }
}


@ObjectType()
export class TSessionUsersResponse extends TQueryResponse {
    @Field(() => [TSessionUser])
    data: TSessionUser[];
}
