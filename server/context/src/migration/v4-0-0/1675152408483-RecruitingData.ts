import { TDescriptor } from "@mzara/graphql"
import { MigrationInterface, QueryRunner } from "typeorm"

export class RecruitingData1675152408483 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const recruitingCVStates = [
            { value: 'NEW', descriptorKey: 'NEW', tp: 'RECRUITING_CV_STATE' },
            { value: 'TESTING', descriptorKey: 'TESTING', tp: 'RECRUITING_CV_STATE' },
            { value: 'INTERVIEW', descriptorKey: 'INTERVIEW', tp: 'RECRUITING_CV_STATE' },
            { value: 'REJECTED', descriptorKey: 'REJECTED', tp: 'RECRUITING_CV_STATE' },
        ]

        await TDescriptor.insert([
            ...recruitingCVStates,
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
