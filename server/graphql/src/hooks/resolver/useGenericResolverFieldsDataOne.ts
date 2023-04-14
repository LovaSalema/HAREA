import { ErrorEnum } from "@_types/base/TAppContext"
import { GenericResolverFieldsInitProps, useGenericResolverFieldsInit } from "./useGenericResolverFieldsInit"

export const useGenericResolverFieldsDataOne = async ({
    filter, className
}: GenericResolverFieldsInitProps) => {

    const {  getData } = useGenericResolverFieldsInit({ className, filter })
    const data = await getData(true)

    if (!data) {
        throw new Error(ErrorEnum.NOT_FOUND)
    }

    if (data.canRead?.() === false) {
        throw new Error(ErrorEnum.FORBIDDEN)
    }

    return data
}
