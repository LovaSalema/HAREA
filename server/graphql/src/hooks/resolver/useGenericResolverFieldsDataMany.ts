import { GenericResolverFieldsInitProps, useGenericResolverFieldsInit } from "./useGenericResolverFieldsInit"

export const useGenericResolverFieldsDataMany = async ({
    filter, className
}: GenericResolverFieldsInitProps) => {

    const { getData } = useGenericResolverFieldsInit({ className, filter })
    const [data, total] = await getData()
    return {
        data,
        total
    }

}
