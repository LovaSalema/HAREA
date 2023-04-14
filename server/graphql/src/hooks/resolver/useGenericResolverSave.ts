import { TAppContext, TSaveOrUpdate } from "@_types/base"
import { useGenericResolverSaveData } from "./useGenericResolverSaveData"

export const useGenericResolverSave = async ({ data, name }: GenericResolverSaveProps) => {

    const { saveObject } = useGenericResolverSaveData()

    const saveItem = async (item: any) => {
        const instance = await saveObject(name, item)
        await instance.save()
        return instance
    }

    if (data.data) {
        const instance = await saveItem(data.data)
        return { id: instance.id }
    }

    if (data.datas) {
        const instances = await Promise.all(data.datas.map(async (item) => saveItem(item)))
        
        return instances.map((item) => item.id)
    }
    return {}
}

export type GenericResolverSaveProps = {
    name: string
    data: TSaveOrUpdate<any>
}
