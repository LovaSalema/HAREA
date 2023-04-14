import { TUser, TUserGroup } from "@mzara/graphql"
import { MigrationInterface, QueryRunner } from "typeorm"

export class UserSeed1670072457144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const user = TUser.create({
            userName: 'rocknatt',
            userNameTolower: 'rocknatt',
            email: 'fahernatt@gmail.com',
            emailTolower: 'fahernatt@gmail.com',
            password: 'ee11cbb19052e40b07aac0ca060c23ee',
            firstName: 'Nantenaina',
            lastName: 'Fahendrena',
            fullName: 'Nantenaina Fahendrena',
            groups: await TUserGroup.find({ where: { groupKey: 'ADMIN', organisation: { organisationKey: 'ISA_SOLUTIONS' } } }),
        })

        await user.save()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
