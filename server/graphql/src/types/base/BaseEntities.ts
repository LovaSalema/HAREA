import { TBase } from "./TBase";
import { TDescriptor } from "./TDescriptor";
import { TEntityUserCreator } from "./TEntityUserCreator";
import { TFile } from "./TFile";
import { TListOfValue } from "./TListOfValue";
import { TLog } from "./TLog";
import { TSession } from "./TSession";
import { TSessionUser } from "./TSessionUser";
import { TSessionUserDate } from "./TSessionUserDate";
import { TSoftDeleteEntity } from "./TSoftDeleteEntity";
import { TTimeStamp } from "./TTimeStamp";
import { TUser } from "./TUser";
import { TUserGroup } from "./TUserGroup";
import { TUserOrganisation } from "./TUserOrganisation";

export const BaseEntities = [
    TBase, TTimeStamp, TSoftDeleteEntity, 
    TLog,
    TDescriptor, TListOfValue, 
    TEntityUserCreator,
    TUserGroup, TUserOrganisation, TUser,
    TSession, TSessionUser, TSessionUserDate,
    TFile
]
