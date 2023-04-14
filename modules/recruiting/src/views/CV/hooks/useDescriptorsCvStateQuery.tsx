import { useGraphqlQuery } from "@mzara/component";
import { DescriptorsCvStateQuery } from "../query/DescriptorsCvStateQuery";

export const useDescriptorsCvStateQuery = (tp?: string,  suspense?: boolean ) => {
    return useGraphqlQuery(new DescriptorsCvStateQuery ({tp}), {enabled : tp !==undefined, suspense})
}