import { Field, ObjectType } from "type-graphql"
import { TAppContext } from './TAppContext'
import 'reflect-metadata'
import { Metadata } from "@_types/metadata/Metadata"
import { MetadataClass } from "@_types/metadata/MetadataClass"
import { Entity, PrimaryGeneratedColumn, BaseEntity as TypeOrmBaseEntity } from "typeorm"

@ObjectType()
@MetadataClass()
export class TBase extends TypeOrmBaseEntity {

    protected context?: TAppContext

    @PrimaryGeneratedColumn('increment', { 
        type: 'int',
        unsigned: true
    })
    @Field(type => Number)
    @Metadata()
    id: number

    @Field(type => Boolean)
    isEditable(): Promise<boolean> | boolean {
        return false
    }

    @Field(type => Boolean)
    isDeletable(): Promise<boolean> | boolean {
        return false
    }

    @Field(type => Boolean)
    canRead(): Promise<boolean> | boolean {
        return true
    }

    /**
     * If true, it will skip saving each property
     */
    skipSaving?: boolean

    static canCreate?: (context?: TAppContext) => boolean | Promise<boolean>

    /**
     * Mainly used for unit testing
     * @returns Object representing the instance
     */
    toObject = () => {
        return Object.keys(this).reduce((all, key) => {
            if (!['context', 'toObject'].includes(key)) {
                if (Array.isArray(this[key])) {
                    all[key] = this[key].map((item) => item.toObject())
                } else if (typeof this[key] === 'object') {
                    all[key] = this[key].toObject()
                } else if (typeof this[key] !== 'function') {
                    all[key] = this[key]
                }
            }
            return all
        }, {})
    }
}

@ObjectType()
export class TQueryResponse {
    @Field(() => Number)
    total : number;
}

export type TEntityRulesFn<TData = any> = () => boolean | Promise<boolean>

export type TEntityFn = () => any

export type AliasFn = () => Array<TAlias> 

export type TAlias = {
    field: string
    alias: string
    relation?: 'MONO' | 'MULTI'
}
