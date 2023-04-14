const pluralize = require('pluralize')
const fs = require('fs')
const _ = require('lodash')
var jsonic = require('jsonic')

const generateImport = (classes) => {
    return `
import { Resolver, Query, Arg, Mutation, Ctx, Info } from "type-graphql";
import { GraphQLResolveInfo } from "graphql/type/definition";
import { TFilter, TSaveOrUpdateResponse } from "@_types/base/TFilter";
${
    classes.map((classItem) => (
        `import { ${classItem.className}${classItem.listReturnType ? `, ${classItem.listReturnType}` : ''} } from "@_types/index";`
    )).join('\n')
}
import { TAppContext, TSaveOrUpdate } from "@_types/base";
import { TDelete } from "@_types/base/TDelete";
import { useGenericResolverFieldsDataMany } from "@hooks/resolver/useGenericResolverFieldsDataMany";
import { useGenericResolverFieldsDataOne } from "@hooks/resolver/useGenericResolverFieldsDataOne";
import { useGenericResolverSave } from "@hooks/resolver/useGenericResolverSave";
import { useGenericResolverDelete } from "@hooks/resolver/useGenericResolverDelete";
    `
}

const generateClass = (str) => {
    return `
/**
 * ------------------
 * This file is generated. Do not attempt to modify manually, the modification will be overwrite at the next generation
 * ------------------
 */
@Resolver()
export class GenericResolver {
${str}
}
    `
}

const generateListResolver = ({ className, entity, listReturnType }) => {
    return `
@Query(() => ${listReturnType})
async ${pluralize(entity, 2)}(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "${className}", filter })
}    
`
}

const generateDetailsResolver = ({ className, entity }) => {
    return `
@Query(() => ${className})
async ${_.camelCase(entity)}(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "${className}", filter })
} 
`
}

const generateSaveResolver = ({ className, entity }) => {
    return `
@Mutation(() => TSaveOrUpdateResponse)
async ${`save${_.upperFirst(_.camelCase(entity))}`}(@Arg("data") data: TSaveOrUpdate<${className}>) {
    return useGenericResolverSave({ name: "${entity}", data })
}
`
}

const generateDeleteResolver = ({ className, entity }) => {
    return `
@Mutation(() => Boolean)
async ${`delete${_.upperFirst(_.camelCase(entity))}`}(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "${className}", ids: data.ids || [] })
}
`
}

const getResolveClassInfo = (str) => {
    const [, entityParams, className] = str.match(/@MetadataClass\(?(.+)\)[\s|\n]+export class ([a-zA-Z0-9]+)/) || []

    if (!entityParams || entityParams === '(' || !className) {
        return null
    }

    const metadataClass = jsonic(entityParams)

    const result = {
        className: className,
        entity: metadataClass.name,
        listReturnType: str.match(/export class ([a-zA-Z0-9]+) extends TQueryResponse/)?.[1]
    }

    if (!result.entity) {
        return null
    }

    return result
}

const getClasses = (dir) => {
    let result = []
    // Read all files inside folder
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
        const path = `${dir}/${file}`
        if (fs.statSync(path).isDirectory()) {
            result = result.concat(getClasses(path))
            return;
        }
        if (file.endsWith('index.ts') || !file.endsWith('.ts')) {
            return;
        }
        const fileContent = fs.readFileSync(path, 'utf8')
        const resolverInfo = getResolveClassInfo(fileContent)
        resolverInfo && result.push(resolverInfo)
    })

    return result
}


const generate = (dir) => {
    let str = ''
    let classContent = ''
    const classes = getClasses(`${__dirname}/../${dir}`)
    classes.forEach((classInfo) => {
        classContent += `
            ${classInfo.listReturnType ? generateListResolver(classInfo) : ''}
            ${generateDetailsResolver(classInfo)}
            ${generateSaveResolver(classInfo)}
            ${generateDeleteResolver(classInfo)}
        `
    })
    str += `
        ${generateImport(classes)}
        ${generateClass(classContent)}
    `

    fs.writeFileSync(`${__dirname}/../${dst}`, str)
}

const src = 'types'
const dst = 'graphql/GenericResolver.ts'


generate(src)

