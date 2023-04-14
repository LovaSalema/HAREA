import { TUserGroup, TUserOrganisation } from "@mzara/graphql"
import { MigrationInterface, QueryRunner } from "typeorm"

export class OrganisationSeed1670068661112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const organisation = TUserOrganisation.create({
            organisationKey: 'ISA_SOLUTIONS',
            designation: 'Isa Solutions',
            comment: ''
        })

        await organisation.save()
        
        await TUserGroup.createQueryBuilder()
                            .insert()
                            .into(TUserGroup)
                            .values([
                                { organisation, groupKey: 'ADMIN', designation: 'Administrateur' },
                                { organisation, groupKey: 'DEVELOPER', designation: 'Developpeur' },
                                { organisation, groupKey: 'COMMERCIAL', designation: 'Commercial' },
                                { organisation, groupKey: 'SUPPORT', designation: 'Support' }
                            ])
                            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
