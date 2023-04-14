import { useAjax, useUrlParamsDecode, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component"
import { useCallback } from "react"

export const useRedirectToApp = () => {
    const ajax = useAjax()

    const { r } = useUrlParamsValue<RedirectionParams>()
    const urlDecode = useUrlParamsDecode()
    const urlEncode = useUrlParamsEncode()
    
    return useCallback(() => {

        if (r) {
            const [url] = r.split('?')
            const returnUrlParams = urlDecode(r)
            const params = { ...returnUrlParams, _t: ajax?.get_token() }
            window.location.href = `${url}?${urlEncode(params)}`
        } else {
            window.location.href = `${process.env.REACT_APP_DEFAULT_APP}?_t=${ajax?.get_token()}`
        }
    }, [r])
}

type RedirectionParams = {
    r?: string
}
