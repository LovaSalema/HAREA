import { TFilter } from "@_types/base"
import _ from "lodash"
import { useGenericResolverData } from "./useGenericResolverData"

export const useGenericResolverFieldsInit = ({
    filter, className
}: GenericResolverFieldsInitProps) => {
    const getData = useGenericResolverData(className, filter)
    return { getData }
}

export type GenericResolverFieldsInitProps = {
    filter?: TFilter
    className?: string
}
