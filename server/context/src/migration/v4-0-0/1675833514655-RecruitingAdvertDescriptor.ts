import { TDescriptor } from "@mzara/graphql"
import { MigrationInterface, QueryRunner } from "typeorm"

export class RecruitingAdvertDescriptor1675833514655 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const recruitingAdvertCategory = [
            { value: 'ELSE', descriptorKey: 'ELSE', tp: 'RECRUITING_ADVERT_CATEGORY' },
            { value: 'IT', descriptorKey: 'IT', tp: 'RECRUITING_ADVERT_CATEGORY' },
            { value: 'COMMERCIAL', descriptorKey: 'COMMERCIAL', tp: 'RECRUITING_ADVERT_CATEGORY' },
            { value: 'INDUSTRIAL', descriptorKey: 'INDUSTRIAL', tp: 'RECRUITING_ADVERT_CATEGORY' },
        ]

        const recruitingAdvertState = [
            { value: 'OPEN', descriptorKey: 'OPEN', tp: 'RECRUITING_ADVERT_STATE' },
            { value: 'CLOSED', descriptorKey: 'CLOSED', tp: 'RECRUITING_ADVERT_STATE' },
        ]

        await TDescriptor.insert([
            ...recruitingAdvertCategory,
            ...recruitingAdvertState
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
