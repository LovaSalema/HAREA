import { TDescriptor, TQueryResponse } from "@_types/base"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, ManyToOne } from "typeorm"

@Entity()
@ObjectType()
@MetadataClass({ name: 'userAbsence' })
export class TUserAbsence extends TEntityUserCreator {

    @Field(() => Number)
    @Column({ type: 'smallint', default: 0 })
    solde: number

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    motif?: string

    @Field(() => Date, { nullable: true })
    @Column({ type: 'datetime', nullable: true})
    @Metadata()
    dateBegin?: Date

    @Field(() => Date, { nullable: true })
    @Column({ type: 'datetime', nullable: true})
    @Metadata()
    dateEnd?: Date

    @Field(() => Boolean, { defaultValue: false })
    @Column({ type: 'tinyint', default: false })
    @Metadata()
    isRevocked: boolean

    @Field(() => Boolean, { defaultValue: false })
    @Column({ type: 'tinyint', default: false })
    @Metadata()
    isValidated: boolean

    /**
     * values : 'CONGE', 'PERMISSION', 'FORCED'
     */
    @Field(() => String, { nullable: true })
    @Column({ nullable: true, default: 'FORCED' })
    @Metadata()
    type?: string

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return TUserAbsence.canCreate()
    }

    @Field(type => Boolean)
    isEditable(){
        return this.isOwner()
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
export class TUserAbsencesResponse extends TQueryResponse {
    @Field(() => [TUserAbsence])
    data: TUserAbsence[];
}
