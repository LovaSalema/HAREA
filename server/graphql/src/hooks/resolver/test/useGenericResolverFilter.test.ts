import { useGenericResolverFilter } from "@hooks/resolver/useGenericResolverFilter";
import { TFilter } from "@_types/base/TFilter"
import { Between, In, LessThan, Like, MoreThan } from "typeorm";

describe('[useGenericResolverFilter]', () => {

    it('filter id', () => {
        const filter: TFilter = getFilterInstance({ id: 10 })
        const result = useGenericResolverFilter('TTranslation', filter)
        expect(result).toEqual({
            where: { id: 10 },
            relations: {}
        })
    })

    it('filter equals', () => {
        const filter: TFilter = getFilterInstance({
            data: {
                title: 'title',
                description: 'description'
            }
        })
        const result = useGenericResolverFilter('TTranslation', filter)
        expect(result).toEqual({
            where: {
                title: 'title',
                description: 'description'
            },
            relations: {}
        })
    })

    it('filter equals with relations', () => {
        const filter: TFilter = getFilterInstance({
            data: {
                title: 'title',
                description: 'description',
                organisation: {
                    organisationKey: 'org'
                },
                roles: {
                    id_among: [1, 2]
                }
            }
        })
        const result = useGenericResolverFilter('TUserGroup', filter)
        expect(result).toEqual({
            where: {
                title: 'title',
                description: 'description',
                organisation: {
                    organisationKey: 'org'
                },
                roles: {
                    id: In([1, 2])
                }
            },
            relations: {
                organisation: true,
                roles: true
            }
        })
    })

    it('filter operator', () => {
        const filter: TFilter = getFilterInstance({
            data: {
                userName_among: ['title1', 'title2'],
                phone_like: 'description',
                email_sup: 100,
                emailTolower_inf: 4,
                firstName_between: [100, 1000]
            }
        })
        const result = useGenericResolverFilter('TUser', filter)
        expect(result).toEqual({
            where: {
                userName: In(['title1', 'title2']),
                phone: Like("%description%"),
                email: MoreThan(100),
                emailTolower: LessThan(4),
                firstName: Between(100, 1000)
            },
            relations: {}
        })
    })

    it('filter deep nested', () => {
        const filter: TFilter = getFilterInstance({
            data: {
                organisation: {
                    organisationKey_among: ['org', 'gov']
                }
            }
        })
        const result = useGenericResolverFilter('TUserGroup', filter)
        expect(result).toEqual({
            where: {
                organisation: {
                    organisationKey: In(['org', 'gov'])
                },
            },
            relations: {
                organisation: true
            }
        })
    })

    test.todo('filter key')

    test.todo('filter relation')

    test.todo('filter recursive')
})


const getFilterInstance = (data: Record<string, any>) => {
    const instance = new TFilter()
    Object.keys(data).forEach((key) => instance[key] = data[key])
    return instance
}
