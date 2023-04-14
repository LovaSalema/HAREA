export const useGqlMutationStateCv = ()=> {
    return `
    mutation ($data: JSONObject){
        stateChangeResult: saveRecruitingCuriculumVitae (data: {data: $data}) {id}
    }
    `
}