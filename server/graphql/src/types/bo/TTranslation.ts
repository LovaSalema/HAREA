import { useContext, useContextUser } from "@hooks/context"
import { TAppContext, TQueryResponse } from "@_types/base"
import { TDescriptor } from "@_types/base/TDescriptor"
import { TEntityUserCreator } from "@_types/base/TEntityUserCreator"
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Field, ObjectType } from "type-graphql"
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm"

@Entity()
@ObjectType()
@MetadataClass({ name: 'translation' })
export class TTranslation extends TEntityUserCreator {

    @Field(() => String, { nullable: true })
    @Column()
    @Metadata()
    translationKey?: string
    
    @Field(() => String, { nullable: true })
    @Column({ type: 'mediumtext', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', nullable: true })
    @Metadata()
    value?: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    @Metadata()
    comment?: string

    @Field(() => TDescriptor, { nullable: true })
    @ManyToOne(() => TDescriptor, { lazy: true, nullable: true })
    @Metadata({ relation: 'TDescriptor' })
    language?: TDescriptor

    @Field(() => TDescriptor, { nullable: true })
    @ManyToOne(() => TDescriptor, { lazy: true, nullable: true })
    @Metadata({ relation: 'TDescriptor' })
    appName?: TDescriptor
    
    @Field(() => TDescriptor, { nullable: true })
    @ManyToOne(() => TDescriptor, { lazy: true, nullable: true })
    @Metadata({ relation: 'TDescriptor' })
    quality?: TDescriptor

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return TTranslation.canCreate()
    }

    isEditable(){
        return TTranslation.canCreate()
    }

    isDeletable(){
        return this.isEditable()
    }

    static canCreate = async () => {
        const context = useContext()
        const user = await useContextUser()
        return Boolean(user && context.appName === 'bo')
    }
}


@ObjectType()
export class TTranslationsResponse extends TQueryResponse {
    @Field(() => [TTranslation])
    data: TTranslation[];
}
