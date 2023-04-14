import { TDescriptor } from "@mzara/graphql"
import { MigrationInterface, QueryRunner } from "typeorm"

export class AppName1671247974403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await TDescriptor.insert(
            APP_NAME.map((key) => ({
                descriptorKey: key,
                value: key,
                tp: 'APP_NAME'
            }))
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

const APP_NAME = [
    '*',
    'bo',
    'isa-bo',
    'isa-web',
    'harea'
]
