import { TDescriptor } from "@mzara/graphql"
import { MigrationInterface, QueryRunner } from "typeorm"

export class AppZone1671248340475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await TDescriptor.insert(
            ZONE.map((key) => ({
                descriptorKey: key,
                value: key,
                tp: 'APP_ZONE'
            }))
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

const ZONE = [
    'FR',
    'EN',
    'MG'
]
