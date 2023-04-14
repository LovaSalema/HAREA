
export const WIZARD_NODE_MUTATION = `
mutation ($data: JSONObject) {
    saveWizardNode (data: { data: $data }){ id }
}
`
