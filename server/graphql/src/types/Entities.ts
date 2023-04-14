import { BaseEntities } from "./base/BaseEntities"
import { BoEntities } from "./bo/BoEntities"
import { HareaEntities } from "./harea/HareaEntities"

export const Entities = [
    ...BaseEntities,
    ...BoEntities,
    ...HareaEntities
]

export const initEntities = () => {
    Entities.forEach((item) => {
        return new item()
    })
}
