import { useContextUser } from "@hooks/context"
import { TQueryResponse } from "@_types/base"
import { TTimeStamp } from "@_types/base/TTimeStamp"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, OneToMany } from "typeorm"
import { TSessionUser } from "./TSessionUser"

@Entity()
@ObjectType()
@MetadataClass({ name: 'session' })
export class TSession extends TTimeStamp {

    @Metadata()
    @Column({ type: 'varchar', length: '50' })
    token: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'varchar', length: '250' })
    userAgent: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'varchar', length: '75' })
    browser: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'varchar', length: '20' })
    browserVersion: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'varchar', length: '50', nullable: true })
    mobileName?: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'varchar', length: '50', nullable: true })
    robotName?: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'varchar', length: '225', nullable: true })
    referer?: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'varchar', length: '125', nullable: true })
    plateform?: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'varchar', length: '50', nullable: true })
    device?: string

    @Field(() => String, { nullable: true })
    @Metadata()
    @Column({ type: 'text', nullable: true })
    userAgentJson?: string

    @OneToMany(() => TSessionUser, (sessionUser) => sessionUser.session, { nullable: true, lazy: true })
    @Field(() => [TSessionUser])
    sessionUsers?: TSessionUser[]

    @Field(type => Boolean)
    async isEditable(){
        const user = await useContextUser()
        const sessionUsers = await this.sessionUsers
        const userIds = await Promise.all(sessionUsers.map(async (item) => (await item.user).id))

        if (userIds.includes(user.id)) {
            return true
        }

        // Todo : take in count user permisssion
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
export class TSessionsResponse extends TQueryResponse {
    @Field(() => [TSession])
    data: TSession[];
}
