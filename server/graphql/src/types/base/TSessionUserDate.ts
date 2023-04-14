import { TBase } from "@_types/base"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, ManyToOne } from "typeorm"
import { TSessionUser } from "./TSessionUser"

@Entity()
@ObjectType()
@MetadataClass({ name: 'sessionUserDate' })
export class TSessionUserDate extends TBase {

    @ManyToOne(() => TSessionUser, { nullable: true, lazy: true, cascade: ['remove', 'update'] })
    @Field(() => TSessionUser)
    sessionUser: TSessionUser
    
    @Field(() => Date)
    @Column({ type: 'datetime' })
    @Metadata()
    dateBegin: Date

    @Field(() => Date, { nullable: true })
    @Column({ type: 'datetime', nullable: true})
    @Metadata()
    dateEnd?: Date

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
