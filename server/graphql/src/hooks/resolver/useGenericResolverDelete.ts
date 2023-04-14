import 'reflect-metadata';
import { TAppContext } from "@_types/base"
import { useGenericResolverData } from './useGenericResolverData';

export const useGenericResolverDelete = async ({ ids, className }: GenericResolverDeleteProps): Promise<Boolean> => {

    const getData = useGenericResolverData(className, { page: 0, data: { id_among: ids } })
    const [datas] = await getData()
    await Promise.all(datas?.map(async (item: any) => {
        if (item.isDeletable?.() === false) {
            throw 'FORBIDDEN_DELETE'
        }

        await item.softRemove()
    }))
    
    return true
}

export type GenericResolverDeleteProps = {
    ids: Array<number>
    className: string
}
