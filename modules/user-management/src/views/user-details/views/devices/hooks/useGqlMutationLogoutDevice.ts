export const useGqlMutationLogoutDevice = () => {
    return `
        mutation($data: LogoutInput!){
            logoutDevice(data: $data)
        }
    `
}