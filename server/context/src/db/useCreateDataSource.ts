import { DataSource, DataSourceOptions } from 'typeorm';
import { Entities } from '@mzara/graphql';
import { MigrationV4 } from '../migration/v4-0-0';

export const useCreateDataSource = async (options: Partial<DataSourceOptions>) => {

    const AppDataSource = new DataSource({
        ...(defaultOptions),
        ...options,
    } as DataSourceOptions)
    try {
        await AppDataSource.initialize()
        console.log('[DataSource] Created')
        await AppDataSource.synchronize()
        console.log('[DataSource] Synchronized')
        await AppDataSource.runMigrations()
        console.log('[Migration] Successed')
    } catch (e) {
        console.error("Error during Data Source initialization", e)
    }
}

const defaultOptions: DataSourceOptions = {
    name: 'default',
    type: 'mysql',
    charset: 'utf8mb4',
    entities: [
        ...Entities
    ],
    migrations: [
        ...MigrationV4
    ],
}
