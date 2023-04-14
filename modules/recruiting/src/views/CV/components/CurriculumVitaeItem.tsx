import {
    Chip,
    IconButton,
    useCdnAssets,
    useTranslationRoute,
} from "@mzara/component";
import { TDescriptor } from "@mzara/graphql";
import { Link } from "react-router-dom";

export const CurriculumVitaeItem = ({
    name,
    advertName,
    id,
    state,
    ...props
}: CurriculumVitaeItemProps) => {
    const cdn = useCdnAssets();
    const t = useTranslationRoute();
    return (
        <div
            className="flex items-center justify-between w-full pt-2 pb-5 px-3 border-b"
            {...props}
        >
            <div className="flex items-start gap-5">
                <div className="object-cover object-center rounded-full w-12 h-12 overflow-hidden">
                    <img src={cdn("/img/isa/profile-user.png")} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="font-semibold">{name || 'Unknown'}</h6>
                    {state?.value && <Chip label={stateDict[state?.value]} color={`${ColorState[state.value]}`} className="text-xs  rounded-full w-fit px-2" />}
                    <span>
                        Annonce: <strong> {advertName} </strong>
                    </span>
                </div>
            </div>
            <Link to={t(`recruiting/cv/${id}/details`)}>
                <IconButton icon="fa-solid fa-angle-right" />
            </Link>
        </div>
    );
};
export const stateDict = {
    "NEW" : "Nouveau",
    "TESTING" : "En cours de teste",
    "INTERVIEW" : "Entretien",
    "REJECTED" : "Rejeté"
}
export const ColorState = {
    "NEW" : "#48496C",
    "TESTING" : "#17a2b8",
    "INTERVIEW" : "#110ee438",
    "REJECTED" : "#E4260E"
}

export type CurriculumVitaeItemProps = {
    name?: string;
    advertName?: string;
    id: number;
    state?: TDescriptor
};
