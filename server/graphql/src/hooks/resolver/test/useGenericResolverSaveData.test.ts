import { useSetContext } from "@hooks/context";
import { useGenericResolverSaveData } from "@hooks/resolver/useGenericResolverSaveData";
import { TAppContext, TSessionUser, TUser, TUserGroup } from "@_types/base";
import { TTranslation } from "@_types/bo";
import _ from "lodash";

describe('[useGenericResolverSaveData]', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        useSetContext(AppContext)
    })

    it('throw exception, not allowed to create', async () => {
        mockTranslation()
        TTranslation.canCreate = () => Promise.resolve(false)
        const { saveObject } = useGenericResolverSaveData()
        const data = {
            id: null,
            translationKey: 'ke',
            value: 'val',
            comment: 'comments',
        }

        try {
            await saveObject('translation', data)
        } catch (e) {
            expect(e).toBe('FORBIDDEN_CREATE')
        }
    })

    it('create', async () => {
        mockUser()
        useSetContext(AppContext)
        const { saveObject } = useGenericResolverSaveData()
        const data = {
            id: null,
            userName: 'userName',
            phone: 'phone',
            email: 'email',
            emailTolower: 'emailTolower',
            firstName: 'firstName',
            lastName: 'lastName',
            fullName: 'fullName',
        }

        const result = await saveObject('user', data)
        expect(result).toBeInstanceOf(TUser)
        expect(result.toObject()).toEqual(
            _.assign({
                userName: 'userName',
                phone: 'phone',
                email: 'email',
                emailTolower: 'emailTolower',
                firstName: 'firstName',
                lastName: 'lastName',
                fullName: 'fullName',
                userCreator: undefined,
            })
        )
    })

    it('create nested', async () => {
        mockUser()
        mockUserGroup()
        useSetContext(AppContext)
        const saveMock = jest.fn()
        jest.spyOn(TUserGroup.prototype, 'save').mockImplementation(saveMock);
        const { saveObject } = useGenericResolverSaveData()
        const data = {
            id: null,
            userName: 'userName',
            email: 'email',
            group: {
                id: null,
                groupKey: 'groupKey',
                organisation: { id: 1 },
                roles: [
                    { id: 1 },
                    { id: 2 },
                ]
            }
        }

        const result = await saveObject('user', data)
        expect(result).toBeInstanceOf(TUser)
        expect(saveMock).toBeCalled()
        expect(result.toObject()).toEqual(
            _.assign({
                userName: 'userName',
                email: 'email',
                userCreator: undefined,
                /**
                 * Should have an id at this point
                 * The mock not let us to emulate a new creation
                 */
                group: { 
                    groupKey: 'groupKey',
                    userCreator: undefined,
                    organisation: { id: 1 },
                    roles: [
                        { id: 1 },
                        { id: 2 },
                    ]
                }
            })
        )
    })

    test.todo('update')

    test.todo('skipSaving')
})

const mockUser = () => {
    TUser.canCreate = () => Promise.resolve(true)
    jest.spyOn(TUser, 'create').mockImplementation((data: any) => {
        const user = new TUser()
        Object.keys(data).forEach((key) => user[key] = data[key])
        return user
    });
    jest.spyOn(TUser.prototype, 'save').mockImplementation(jest.fn());
}

const mockTranslation = () => {
    TUser.canCreate = () => Promise.resolve(true)
    jest.spyOn(TTranslation, 'create').mockImplementation((data: any) => {
        const _data = new TTranslation()
        Object.keys(data).forEach((key) => _data[key] = data[key])
        return _data
    });
    jest.spyOn(TTranslation.prototype, 'save').mockImplementation(jest.fn());
}

const mockUserGroup = () => {
    TUserGroup.canCreate = () => Promise.resolve(true)
    jest.spyOn(TUserGroup, 'create').mockImplementation((data: any) => {
        const _data = new TUserGroup()
        Object.keys(data).forEach((key) => _data[key] = data[key])
        return _data
    });

    jest.spyOn(TUserGroup.prototype, 'save').mockImplementation(jest.fn());
}

const AppContext = {
    appName: 'mz-bo',
    sessionUser: {} as any
}
