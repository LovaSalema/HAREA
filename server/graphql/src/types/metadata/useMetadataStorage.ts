import { MetadataStorage } from "./MetadataStorage";

export function useMetadataStorage(): MetadataStorage {
    return (
        (global as any).GraphQLMetadataStorage || ((global as any).GraphQLMetadataStorage = new MetadataStorage())
    );
}