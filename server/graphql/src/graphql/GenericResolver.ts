
        
import { Resolver, Query, Arg, Mutation, Ctx, Info } from "type-graphql";
import { GraphQLResolveInfo } from "graphql/type/definition";
import { TFilter, TSaveOrUpdateResponse } from "@_types/base/TFilter";
import { TDescriptor, TDescriptorsResponse } from "@_types/index";
import { TFile, TFilesResponse } from "@_types/index";
import { TListOfValue, TListOfValuesResponse } from "@_types/index";
import { TSession, TSessionsResponse } from "@_types/index";
import { TSessionUser, TSessionUsersResponse } from "@_types/index";
import { TSessionUserDate } from "@_types/index";
import { TUser, TUsersResponse } from "@_types/index";
import { TUserGroup, TUserGroupsResponse } from "@_types/index";
import { TUserOrganisation, TUserOrganisationsResponse } from "@_types/index";
import { TFlow, TFlowsResponse } from "@_types/index";
import { TTranslation, TTranslationsResponse } from "@_types/index";
import { TWizard, TWizardsResponse } from "@_types/index";
import { TWizardNode, TWizardNodesResponse } from "@_types/index";
import { TEmployeeContract, TEmployeeContractsResponse } from "@_types/index";
import { TEvaluation, TEvaluationsResponse } from "@_types/index";
import { TEvaluationTemplate, TEvaluationTemplatesResponse } from "@_types/index";
import { TRecruitingAdvert, TRecruitingAdvertsResponse } from "@_types/index";
import { TRecruitingCuriculumVitae, TRecruitingCuriculumVitaesResponse } from "@_types/index";
import { TRecruitingCuriculumVitaeComments, TRecruitingCuriculumVitaeCommentsResponse } from "@_types/index";
import { TUserAbsence, TUserAbsencesResponse } from "@_types/index";
import { TAppContext, TSaveOrUpdate } from "@_types/base";
import { TDelete } from "@_types/base/TDelete";
import { useGenericResolverFieldsDataMany } from "@hooks/resolver/useGenericResolverFieldsDataMany";
import { useGenericResolverFieldsDataOne } from "@hooks/resolver/useGenericResolverFieldsDataOne";
import { useGenericResolverSave } from "@hooks/resolver/useGenericResolverSave";
import { useGenericResolverDelete } from "@hooks/resolver/useGenericResolverDelete";
    
        
/**
 * ------------------
 * This file is generated. Do not attempt to modify manually, the modification will be overwrite at the next generation
 * ------------------
 */
@Resolver()
export class GenericResolver {

            
@Query(() => TDescriptorsResponse)
async descriptors(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TDescriptor", filter })
}    

            
@Query(() => TDescriptor)
async descriptor(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TDescriptor", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveDescriptor(@Arg("data") data: TSaveOrUpdate<TDescriptor>) {
    return useGenericResolverSave({ name: "descriptor", data })
}

            
@Mutation(() => Boolean)
async deleteDescriptor(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TDescriptor", ids: data.ids || [] })
}

        
            
@Query(() => TFilesResponse)
async files(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TFile", filter })
}    

            
@Query(() => TFile)
async file(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TFile", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveFile(@Arg("data") data: TSaveOrUpdate<TFile>) {
    return useGenericResolverSave({ name: "file", data })
}

            
@Mutation(() => Boolean)
async deleteFile(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TFile", ids: data.ids || [] })
}

        
            
@Query(() => TListOfValuesResponse)
async listOfValues(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TListOfValue", filter })
}    

            
@Query(() => TListOfValue)
async listOfValue(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TListOfValue", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveListOfValue(@Arg("data") data: TSaveOrUpdate<TListOfValue>) {
    return useGenericResolverSave({ name: "listOfValue", data })
}

            
@Mutation(() => Boolean)
async deleteListOfValue(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TListOfValue", ids: data.ids || [] })
}

        
            
@Query(() => TSessionsResponse)
async sessions(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TSession", filter })
}    

            
@Query(() => TSession)
async session(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TSession", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveSession(@Arg("data") data: TSaveOrUpdate<TSession>) {
    return useGenericResolverSave({ name: "session", data })
}

            
@Mutation(() => Boolean)
async deleteSession(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TSession", ids: data.ids || [] })
}

        
            
@Query(() => TSessionUsersResponse)
async sessionUsers(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TSessionUser", filter })
}    

            
@Query(() => TSessionUser)
async sessionUser(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TSessionUser", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveSessionUser(@Arg("data") data: TSaveOrUpdate<TSessionUser>) {
    return useGenericResolverSave({ name: "sessionUser", data })
}

            
@Mutation(() => Boolean)
async deleteSessionUser(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TSessionUser", ids: data.ids || [] })
}

        
            
            
@Query(() => TSessionUserDate)
async sessionUserDate(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TSessionUserDate", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveSessionUserDate(@Arg("data") data: TSaveOrUpdate<TSessionUserDate>) {
    return useGenericResolverSave({ name: "sessionUserDate", data })
}

            
@Mutation(() => Boolean)
async deleteSessionUserDate(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TSessionUserDate", ids: data.ids || [] })
}

        
            
@Query(() => TUsersResponse)
async users(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TUser", filter })
}    

            
@Query(() => TUser)
async user(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TUser", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveUser(@Arg("data") data: TSaveOrUpdate<TUser>) {
    return useGenericResolverSave({ name: "user", data })
}

            
@Mutation(() => Boolean)
async deleteUser(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TUser", ids: data.ids || [] })
}

        
            
@Query(() => TUserGroupsResponse)
async userGroups(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TUserGroup", filter })
}    

            
@Query(() => TUserGroup)
async userGroup(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TUserGroup", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveUserGroup(@Arg("data") data: TSaveOrUpdate<TUserGroup>) {
    return useGenericResolverSave({ name: "userGroup", data })
}

            
@Mutation(() => Boolean)
async deleteUserGroup(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TUserGroup", ids: data.ids || [] })
}

        
            
@Query(() => TUserOrganisationsResponse)
async userOrganisations(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TUserOrganisation", filter })
}    

            
@Query(() => TUserOrganisation)
async userOrganisation(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TUserOrganisation", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveUserOrganisation(@Arg("data") data: TSaveOrUpdate<TUserOrganisation>) {
    return useGenericResolverSave({ name: "userOrganisation", data })
}

            
@Mutation(() => Boolean)
async deleteUserOrganisation(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TUserOrganisation", ids: data.ids || [] })
}

        
            
@Query(() => TFlowsResponse)
async flows(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TFlow", filter })
}    

            
@Query(() => TFlow)
async flow(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TFlow", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveFlow(@Arg("data") data: TSaveOrUpdate<TFlow>) {
    return useGenericResolverSave({ name: "flow", data })
}

            
@Mutation(() => Boolean)
async deleteFlow(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TFlow", ids: data.ids || [] })
}

        
            
@Query(() => TTranslationsResponse)
async translations(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TTranslation", filter })
}    

            
@Query(() => TTranslation)
async translation(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TTranslation", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveTranslation(@Arg("data") data: TSaveOrUpdate<TTranslation>) {
    return useGenericResolverSave({ name: "translation", data })
}

            
@Mutation(() => Boolean)
async deleteTranslation(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TTranslation", ids: data.ids || [] })
}

        
            
@Query(() => TWizardsResponse)
async wizards(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TWizard", filter })
}    

            
@Query(() => TWizard)
async wizard(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TWizard", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveWizard(@Arg("data") data: TSaveOrUpdate<TWizard>) {
    return useGenericResolverSave({ name: "wizard", data })
}

            
@Mutation(() => Boolean)
async deleteWizard(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TWizard", ids: data.ids || [] })
}

        
            
@Query(() => TWizardNodesResponse)
async wizardNodes(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TWizardNode", filter })
}    

            
@Query(() => TWizardNode)
async wizardNode(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TWizardNode", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveWizardNode(@Arg("data") data: TSaveOrUpdate<TWizardNode>) {
    return useGenericResolverSave({ name: "wizardNode", data })
}

            
@Mutation(() => Boolean)
async deleteWizardNode(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TWizardNode", ids: data.ids || [] })
}

        
            
@Query(() => TEmployeeContractsResponse)
async employeeContracts(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TEmployeeContract", filter })
}    

            
@Query(() => TEmployeeContract)
async employeeContract(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TEmployeeContract", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveEmployeeContract(@Arg("data") data: TSaveOrUpdate<TEmployeeContract>) {
    return useGenericResolverSave({ name: "employeeContract", data })
}

            
@Mutation(() => Boolean)
async deleteEmployeeContract(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TEmployeeContract", ids: data.ids || [] })
}

        
            
@Query(() => TEvaluationsResponse)
async evaluations(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TEvaluation", filter })
}    

            
@Query(() => TEvaluation)
async evaluation(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TEvaluation", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveEvaluation(@Arg("data") data: TSaveOrUpdate<TEvaluation>) {
    return useGenericResolverSave({ name: "evaluation", data })
}

            
@Mutation(() => Boolean)
async deleteEvaluation(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TEvaluation", ids: data.ids || [] })
}

        
            
@Query(() => TEvaluationTemplatesResponse)
async evaluationTemplates(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TEvaluationTemplate", filter })
}    

            
@Query(() => TEvaluationTemplate)
async evaluationTemplate(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TEvaluationTemplate", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveEvaluationTemplate(@Arg("data") data: TSaveOrUpdate<TEvaluationTemplate>) {
    return useGenericResolverSave({ name: "evaluationTemplate", data })
}

            
@Mutation(() => Boolean)
async deleteEvaluationTemplate(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TEvaluationTemplate", ids: data.ids || [] })
}

        
            
@Query(() => TRecruitingAdvertsResponse)
async recruitingAdverts(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TRecruitingAdvert", filter })
}    

            
@Query(() => TRecruitingAdvert)
async recruitingAdvert(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TRecruitingAdvert", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveRecruitingAdvert(@Arg("data") data: TSaveOrUpdate<TRecruitingAdvert>) {
    return useGenericResolverSave({ name: "recruitingAdvert", data })
}

            
@Mutation(() => Boolean)
async deleteRecruitingAdvert(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TRecruitingAdvert", ids: data.ids || [] })
}

        
            
@Query(() => TRecruitingCuriculumVitaesResponse)
async recruitingCuriculumVitaes(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TRecruitingCuriculumVitae", filter })
}    

            
@Query(() => TRecruitingCuriculumVitae)
async recruitingCuriculumVitae(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TRecruitingCuriculumVitae", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveRecruitingCuriculumVitae(@Arg("data") data: TSaveOrUpdate<TRecruitingCuriculumVitae>) {
    return useGenericResolverSave({ name: "recruitingCuriculumVitae", data })
}

            
@Mutation(() => Boolean)
async deleteRecruitingCuriculumVitae(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TRecruitingCuriculumVitae", ids: data.ids || [] })
}

        
            
@Query(() => TRecruitingCuriculumVitaeCommentsResponse)
async recruitingCuriculumVitaeComments(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TRecruitingCuriculumVitaeComments", filter })
}    

            
@Query(() => TRecruitingCuriculumVitaeComments)
async recruitingCuriculumVitaeComment(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TRecruitingCuriculumVitaeComments", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveRecruitingCuriculumVitaeComment(@Arg("data") data: TSaveOrUpdate<TRecruitingCuriculumVitaeComments>) {
    return useGenericResolverSave({ name: "recruitingCuriculumVitaeComment", data })
}

            
@Mutation(() => Boolean)
async deleteRecruitingCuriculumVitaeComment(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TRecruitingCuriculumVitaeComments", ids: data.ids || [] })
}

        
            
@Query(() => TUserAbsencesResponse)
async userAbsences(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataMany({ className: "TUserAbsence", filter })
}    

            
@Query(() => TUserAbsence)
async userAbsence(@Arg("filter", { nullable: true }) filter?: TFilter) {
    return useGenericResolverFieldsDataOne({ className: "TUserAbsence", filter })
} 

            
@Mutation(() => TSaveOrUpdateResponse)
async saveUserAbsence(@Arg("data") data: TSaveOrUpdate<TUserAbsence>) {
    return useGenericResolverSave({ name: "userAbsence", data })
}

            
@Mutation(() => Boolean)
async deleteUserAbsence(@Arg("data") data: TDelete) {
    return useGenericResolverDelete({ className: "TUserAbsence", ids: data.ids || [] })
}

        
}
    
    