import { TDescriptor, TTranslation } from "@mzara/graphql"
import { MigrationInterface, QueryRunner } from "typeorm"
import Translations from '../artefacts/translations'

export class Translation1671249211056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const items = await Promise.all(
            Translations.filter((item) => !/^clt/.test(item.ke)).map(async (item) => ({
                translationKey: item.ke,
                value: item.val,
                language: await TDescriptor.findOne({ where: { tp: 'APP_ZONE', descriptorKey: item.appZone } }),
                appName: await TDescriptor.findOne({ where: { tp: 'APP_NAME', descriptorKey: item.appName } }),
                quality: await TDescriptor.findOne({ where: { tp: 'TRANSLATION_QUALITY', descriptorKey: 'NORMAL' } }),
            }))
        )

        await TTranslation.insert(items.filter((item) => item.appName !== null))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
