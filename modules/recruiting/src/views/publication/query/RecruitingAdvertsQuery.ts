import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingAdvert, TRecruitingAdvertsResponse } from "@mzara/graphql";

export class RecruitingAdvertsQuery implements GraphQLQueryClass<TRecruitingAdvertsResponse, TResponseAdverts> {
    public queryKey: string = 'App.Harea.RecruitingAdvertsQuery' 

    public gql: string = `
        query RecruitingAdvertsQuery(
            $pageSize: Float,
            $page: Float,
            $data: JSONObject
        ) {
            recruitingAdverts(filter: {
                data: $data,
                pageSize: $pageSize,
                page: $page
            }){
                total
                data {
                  id title createdAt dateEnd description tags{value color} cvs{id} state{id value} category{ value }
                }
            }
        }
    `
    
    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponseAdverts): TRecruitingAdvertsResponse {
        return {
            total: data.recruitingAdverts.total,
            data: data.recruitingAdverts.data
        }
    }
}

export type TResponseAdverts = {
    recruitingAdverts: {
        total: number,
        data: Array<TRecruitingAdvert>
    }
}