import { TDescriptor, TUserGroup, TUserOrganisation } from "@mzara/graphql"
import { In, MigrationInterface, QueryRunner } from "typeorm"

export class RoleSeed1674311641936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const organisation = [
            { value: 'ORGANISATION', descriptorKey: 'ORGANISATION', tp: 'ROLE' },
            { value: 'ORGANISATION_GROUP', descriptorKey: 'ORGANISATION', tp: 'ROLE' },
        ]

        const user = [
            { value: 'USER', descriptorKey: 'USER', tp: 'ROLE' },
            { value: 'USER_AFFILIATE', descriptorKey: 'USER', tp: 'ROLE' },
            { value: 'USER_CHANGE_ROLE', descriptorKey: 'USER', tp: 'ROLE' },
            { value: 'USER_BLOCK', descriptorKey: 'USER', tp: 'ROLE' },
            { value: 'USER_EDIT', descriptorKey: 'USER', tp: 'ROLE' },
            { value: 'USER_RESET_PASSWORD', descriptorKey: 'USER', tp: 'ROLE' },
            { value: 'USER_STATS', descriptorKey: 'USER', tp: 'ROLE' },
        ]

        const translations = [
            { value: 'TRANSLATION', descriptorKey: 'TRANSLATION', tp: 'ROLE' },
        ]

        const wizard = [
            { value: 'WIZARD', descriptorKey: 'WIZARD', tp: 'ROLE' },
        ]

        const roles = await TDescriptor.insert([
            ...organisation,
            ...user,
            ...translations,
            ...wizard
        ])
        
        const groups = await TUserGroup.find({ where: { groupKey: In(['ADMIN', 'DEVELOPER']), organisation: { organisationKey: 'ISA_SOLUTIONS' } } })
        await Promise.all(
            groups.map(async (item) => {
                item.roles = roles.identifiers as Array<TDescriptor>
                await item.save()
            })
        )

        const org = await TUserOrganisation.findOne({ where: { organisationKey: 'ISA_SOLUTIONS' } })
        org.roles = roles.identifiers as Array<TDescriptor>
        await org.save()
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
