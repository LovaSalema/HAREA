import { TDescriptor } from "@mzara/graphql"
import { MigrationInterface, QueryRunner } from "typeorm"

export class TranslationQuality1671249122214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await TDescriptor.insert(
            QUALITIES.map((key) => ({
                descriptorKey: key,
                value: key,
                tp: 'TRANSLATION_QUALITY'
            }))
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

const QUALITIES = [
    'AUTOMATIC',
    'BAD',
    'NORMAL',
    'OFFICIAL'
]
